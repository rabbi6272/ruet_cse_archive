"use client";
import React, { useState } from 'react';

const CodeLibrary = () => {
  const [snippets, setSnippets] = useState([
    {
      id: 1,
      language: 'C',
      title: 'How to print Hello World',
      description: 'This is how we start our coding journey :)',
      code: `#include <stdio.h>

int main(){

      printf("Hello , World!");
      return 0;
      
}`,
      author: 'Bitto Saha',
      likes: 24,
      isLiked: false,
      date: 'July 18, 2025'
    },
    {
      id: 2,
      language: 'C',
      title: 'Module_6 Problem 1',
      description: 'How pointers work?',
      code: `#include <stdio.h>

int main()
{

    int a = 10;
    int *p;
    p = &a;
    printf("a=%d &a=%X p=%X *p=%d", a, &a, p, *p);
    printf("%x", &a);
    // my assumptions => a=10 &a=location p=location *p=10;
    // output a=10 &a=61FF18 p=61FF18 *p=10
    // corrected

    return 0;

}`,
      author: 'Bitto Saha',
      likes: 18,
      isLiked: false,
      date: 'July 18, 2025'
    },
    {
      id: 3,
      language: 'C',
      title: 'Prime Numbers',
      description: 'This code checks for prime numbers.',
      code: `#include<stdio.h>
int check(int a){
    //1 -> true
    // 0 -> false
    if(a<2) return 0;
    //else 1 or 0 return false
    if(a<4) return 1;
    //means 2 or 3 return true

    for(int i=2;i<a;i++){
        //checking all numbers from 2-a
        if(a%i==0) return 0;
        //means a is divisible by something not a and 1 
    }
    return 1;
    //it is a prime for sure
}

int main(){
    int num;
    printf("N.B: Negative number to exit/n");
    while(1){
        printf("Enter a number: ");
        scanf("%d",&num);
        if(num<0) break;
        if(check(num))
            printf("%d is Prime./n",num);
        else
            printf("%d is not Prime./n",num);
    }

    return 0;
}`,
      author: 'Bitto Saha',
      likes: 32,
      isLiked: false,
      date: 'July 18, 2025'
    }
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  const toggleLike = (id) => {
    setSnippets(prevSnippets => 
      prevSnippets.map(snippet => 
        snippet.id === id 
          ? { 
              ...snippet, 
              likes: snippet.isLiked ? snippet.likes - 1 : snippet.likes + 1,
              isLiked: !snippet.isLiked 
            } 
          : snippet
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header and Search */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Code Snippets Gallery</h1>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Browse and share useful code snippets</p>
            </div>
            <button 
              onClick={toggleDarkMode}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Search snippets..." 
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
              />
              <button className={`absolute right-3 top-2 ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="flex gap-2">
              <select className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}>
                <option value="">All Languages</option>
                <option value="cpp">C++</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
              </select>
              <select className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}>
                <option value="">All Authors</option>
                <option value="bitto">Bitto Saha</option>
                <option value="other">Others</option>
              </select>
            </div>
          </div>
        </div>

        {/* Code Cards */}
        <div className="space-y-6">
          {snippets.map(snippet => (
            <div 
              key={snippet.id} 
              className={`rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}
            >
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <span className={`inline-block text-xs px-2 py-1 rounded-full font-semibold uppercase ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                    {snippet.language}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{snippet.date}</span>
                </div>
                
                <h3 className={`mt-2 text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{snippet.title}</h3>
                <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{snippet.description}</p>
                
                <div className="code-container mt-4 rounded-lg overflow-hidden relative group">
                  <button 
                    className={`copy-btn px-2 py-1 rounded text-xs absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
                    onClick={() => copyCode(snippet.code)}
                  >
                    <i className="far fa-copy mr-1"></i> Copy
                  </button>
                  <pre className={`p-4 overflow-x-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <code className={`block font-mono text-sm ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {snippet.code}
                    </code>
                  </pre>
                </div>
                
                <div className="mt-4 flex justify-between items-center text-sm">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{snippet.author}</span>
                  <div className="flex items-center">
                    <button 
                      className={`mr-2 ${snippet.isLiked ? 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-red-500`}
                      onClick={() => toggleLike(snippet.id)}
                    >
                      <i className={`${snippet.isLiked ? 'fas' : 'far'} fa-heart`}></i>
                    </button>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {snippet.likes} {snippet.likes === 1 ? 'Like' : 'Likes'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className={`px-3 py-2 rounded-l-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
              Previous
            </a>
            <a href="#" className={`px-3 py-2 border-t border-b ${darkMode ? 'bg-gray-800 border-gray-700 text-blue-400 hover:bg-gray-700' : 'bg-white border-gray-300 text-blue-600 hover:bg-gray-50'}`}>
              1
            </a>
            <a href="#" className={`px-3 py-2 border-t border-b ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
              2
            </a>
            <a href="#" className={`px-3 py-2 border-t border-b ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
              3
            </a>
            <a href="#" className={`px-3 py-2 rounded-r-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CodeLibrary;
