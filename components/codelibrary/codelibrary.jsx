"use client";
import { useState, useEffect, useRef } from "react";
import { db } from "@/lib/firebase";
import { ref, onValue, off, update } from "firebase/database";

import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";

const CodeLibrary = () => {
  const [snippets, setSnippets] = useState([]);
  const [filteredSnippets, setFilteredSnippets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(true);
  const [expandedSnippets, setExpandedSnippets] = useState({});
  const [animateLike, setAnimateLike] = useState({});
  const [animateCopy, setAnimateCopy] = useState({});
  const snippetsPerPage = 5;
  const maxCodeLines = 20;

  const needsHighlightRef = useRef(false);

  // Date formatting function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Unknown Date";
    }
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  // Fetch snippets from Firebase
  useEffect(() => {
    const snippetsRef = ref(db, "codeSnippets");
    const fetchData = onValue(
      snippetsRef,
      (snapshot) => {
        try {
          const data = snapshot.val();
          if (data) {
            const snippetsArray = Object.keys(data)
              .map((key) => ({
                id: key,
                ...data[key],
                isLiked: localStorage.getItem(`liked_${key}`) === "true",
                likesCount: data[key].likesCount || 0,
                copiesCount: data[key].copiesCount || 0,
                language:
                  data[key].language?.toLowerCase() === "js"
                    ? "javascript"
                    : data[key].language?.toLowerCase(),
              }))
              .sort((a, b) => new Date(b.date) - new Date(a.date));
            setSnippets(snippetsArray);
          } else {
            setSnippets([]);
          }
        } catch (error) {
          console.error("Error fetching snippets:", error);
          setSnippets([]);
        }
      },
      (error) => {
        console.error("Firebase error:", error);
        setSnippets([]);
      }
    );
    return () => off(snippetsRef, "value", fetchData);
  }, []);

  // Filter snippets
  useEffect(() => {
  let result = snippets;
  if (searchTerm) {
    result = result.filter((snippet) =>
      (snippet.title?.toLowerCase().includes(searchTerm.toLowerCase()) || "") ||
      (snippet.description?.toLowerCase().includes(searchTerm.toLowerCase()) || "")
    );
  }
  if (languageFilter) {
    result = result.filter(
      (snippet) =>
        snippet.language?.toLowerCase() === languageFilter.toLowerCase()
    );
  }
  if (authorFilter) {
    result = result.filter(
      (snippet) =>
        snippet.author?.toLowerCase() === authorFilter.toLowerCase()
    );
  }
  setFilteredSnippets(result);
  if (currentPage > Math.ceil(result.length / snippetsPerPage)) {
    setCurrentPage(1);
  }
}, [searchTerm, languageFilter, authorFilter, snippets, currentPage]);
  // Highlight code blocks
  useEffect(() => {
    needsHighlightRef.current = true; // Flag to indicate highlighting is needed
    const highlight = () => {
      if (needsHighlightRef.current) {
        document.querySelectorAll("pre code").forEach((block) => {
          if (block.hasAttribute("data-highlighted")) {
            block.removeAttribute("data-highlighted");
          }
          hljs.highlightElement(block);
        });
        needsHighlightRef.current = false;
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(highlight);
      });
    }, 100); // Slight delay for DOM stability

    return () => clearTimeout(timeout);
  }, [filteredSnippets, expandedSnippets, currentPage]); // Added currentPage to dependencies

  const indexOfLastSnippet = currentPage * snippetsPerPage;
  const indexOfFirstSnippet = indexOfLastSnippet - snippetsPerPage;
  const currentSnippets = filteredSnippets.slice(
    indexOfFirstSnippet,
    indexOfLastSnippet
  );
  const totalPages = Math.ceil(filteredSnippets.length / snippetsPerPage);

  const copyCode = async (id, code) => {
    try {
      await navigator.clipboard.writeText(code);
      setAnimateCopy((prev) => ({ ...prev, [id]: true }));
      setTimeout(
        () => setAnimateCopy((prev) => ({ ...prev, [id]: false })),
        500
      );
      setSnippets((prevSnippets) =>
        prevSnippets.map((snippet) =>
          snippet.id === id
            ? { ...snippet, copiesCount: (snippet.copiesCount || 0) + 1 }
            : snippet
        )
      );
      const snippetRef = ref(db, `codeSnippets/${id}`);
      await update(snippetRef, {
        copiesCount: (snippets.find((s) => s.id === id).copiesCount || 0) + 1,
      });
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const toggleLike = async (id) => {
    const snippet = snippets.find((s) => s.id === id);
    if (snippet.isLiked) return;

    const newIsLiked = true;
    setAnimateLike((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAnimateLike((prev) => ({ ...prev, [id]: false })), 500);

    setSnippets((prevSnippets) =>
      prevSnippets.map((snippet) =>
        snippet.id === id
          ? {
              ...snippet,
              likesCount: (snippet.likesCount || 0) + 1,
              isLiked: newIsLiked,
            }
          : snippet
      )
    );

    localStorage.setItem(`liked_${id}`, "true");

    const snippetRef = ref(db, `codeSnippets/${id}`);
    await update(snippetRef, {
      likesCount: (snippet.likesCount || 0) + 1,
    });
  };

  const toggleExpand = (id) => {
    setExpandedSnippets((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isCodeLong = (code) => {
    return code?.split("\n").length > maxCodeLines;
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          {/* Title and description */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl dark:text-gray-300 text-gray-700 font-bold mb-2">
                Code Snippets Gallery
              </h1>
              <p className="mb-6 dark:text-gray-400 text-gray-600">
                Browse and share useful code snippets
              </p>
            </div>
            {/* Dark mode toggle button - uncomment to re-enable */}
            {/* <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button> */}
          </div>

          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search snippets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white bg-white border-gray-300 text-gray-700"
              />
              <button className="absolute right-3 top-2 dark:text-gray-400 dark:hover:text-gray-300 text-gray-400 hover:text-gray-500">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="flex gap-4">
              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 bg-white border-gray-300 text-gray-500"
              >
                <option value="">All Languages</option>
                {Array.from(
                  new Set(snippets.map((s) => s.language).filter(Boolean))
                ).map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              {/* Author filter - uncomment to re-enable */}
              {/* <select
                value={authorFilter}
                onChange={(e) => setAuthorFilter(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 bg-white border-gray-300 text-gray-500"
              >
                <option value="">All Authors</option>
                {Array.from(new Set(snippets.map((s) => s.author).filter(Boolean))).map((author) => (
                  <option key={author} value={author}>{author}</option>
                ))}
              </select> */}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {currentSnippets.length > 0 ? (
            currentSnippets.map((snippet) => (
              <div
                key={snippet.id}
                className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 border dark:border-gray-700 bg-white border-gray-300"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <span className="inline-block text-xs px-2 py-1 rounded-full font-semibold uppercase dark:bg-blue-900 dark:text-blue-300 bg-blue-100 text-blue-800">
                      {snippet.language}
                    </span>
                    <span className="text-xs dark:text-gray-400 text-gray-500">
                      {formatDate(snippet.date)}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold dark:text-gray-100 text-gray-800">
                    {snippet.title}
                  </h3>
                  <p className="mt-1 dark:text-gray-400 text-gray-600">
                    {snippet.description}
                  </p>

                  <div className="code-container dark:bg-gray-900 bg-gray-200 mt-4 rounded-lg overflow-hidden relative group">
                    {/* Copy button */}
                    <button
                      className="copy-btn px-2 py-1 rounded text-xs absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white bg-gray-900 hover:bg-gray-800 text-white"
                      onClick={() => copyCode(snippet.id, snippet.codeSnippet)}
                    >
                      <i className="far fa-copy mr-1"></i> Copy
                    </button>

                    {/* Code snippet */}
                    <pre
                      className={`p-4 overflow-x-auto ${
                        isCodeLong(snippet.codeSnippet) &&
                        !expandedSnippets[snippet.id]
                          ? "max-h-70"
                          : ""
                      }`}
                    >
                      <code
                        className={`language-${
                          snippet.language?.toLowerCase() || "text"
                        }`}
                      >
                        {isCodeLong(snippet.codeSnippet) &&
                        !expandedSnippets[snippet.id]
                          ? snippet.codeSnippet
                              .split("\n")
                              .slice(0, maxCodeLines)
                              .join("\n") + "\n..."
                          : snippet.codeSnippet}
                      </code>
                    </pre>

                    {/* Code expand button */}
                    {isCodeLong(snippet.codeSnippet) && (
                      <div className="flex justify-center p-2">
                        <button
                          className="px-6 py-2 text-sm font-medium rounded-full mx-auto dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 bg-gray-300 hover:bg-gray-400 text-gray-600 transition-colors duration-300"
                          onClick={() => toggleExpand(snippet.id)}
                        >
                          {expandedSnippets[snippet.id]
                            ? "Collapse "
                            : "Expand "}
                          Code
                        </button>
                      </div>
                    )}
                  </div>

                  {/* About the author and code description */}
                  <div className="mt-4 flex justify-between items-center text-sm">
                    <span className="font-medium dark:text-gray-400 text-gray-500">
                      {snippet.rollNumber}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        className={`mr-2 ${
                          snippet.isLiked
                            ? "text-red-500"
                            : "dark:text-gray-400 text-gray-500"
                        } hover:text-red-500 ${
                          animateLike[snippet.id] ? "animate-bounce" : ""
                        }`}
                        onClick={() => toggleLike(snippet.id)}
                      >
                        <i
                          className={`${
                            snippet.isLiked ? "fas" : "far"
                          } fa-heart`}
                        ></i>
                      </button>
                      <span
                        className={`dark:text-gray-400 text-gray-600 ${
                          animateLike[snippet.id] ? "animate-bounce" : ""
                        }`}
                      >
                        {snippet.likesCount || 0} Likes
                      </span>
                      <span
                        className={`dark:text-gray-400 text-gray-600 ${
                          animateCopy[snippet.id] ? " animate-bounce" : ""
                        }`}
                      >
                        {snippet.copiesCount || 0} Copies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 dark:text-gray-400 text-gray-600">
              No snippets found matching your criteria
            </div>
          )}
        </div>

        {filteredSnippets.length > snippetsPerPage && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-l-md border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 bg-white border-gray-300 text-gray-500 hover:bg-gray-50 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-2 border-t border-b dark:bg-gray-800 dark:border-gray-700 ${
                      currentPage === number
                        ? "dark:text-blue-400"
                        : "dark:text-gray-300 dark:hover:bg-gray-700"
                    } bg-white border-gray-300 ${
                      currentPage === number
                        ? "text-blue-600"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-r-md border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 bg-white border-gray-300 text-gray-500 hover:bg-gray-50 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeLibrary;
