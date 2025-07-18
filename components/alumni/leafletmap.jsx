"use client"; // Mark as client component.

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Head from "next/head";
import { useMap } from "react-leaflet";

// Dynamically import React-Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

// Alumni data (full dataset from your original HTML)
const alumniData = [
  {
    name: "Sarowar Sattar",
    Id: "0x1b",
    dept: "CSE",
    series: "1998",
    optional: "",
    address: "Adelaide, South Australia, Australia",
    country: "Australia",
    badges: "teacher,highereducated,researcher,corporate",
    linkedinurl: "",
    type: "Point",
    coordinates: [138.4760410138386, -34.89292123921716],
  },
  {
    name: "Kamrul Hasan",
    Id: "0x1d",
    dept: "CSE",
    series: "1998",
    optional: "Software Specialist",
    address: "Brisbane, Queensland, Australia",
    country: "Australia",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [153.0234991, -27.4689682],
  },
  {
    name: "Nafisa Tarannum",
    Id: "0x20",
    dept: "CSE",
    series: "1998",
    optional: "",
    address: "Brisbane, Queensland, Australia",
    country: "Australia",
    badges: "teacher,highereducated,teamleader,researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [152.89151925167332, -27.36087235459407],
  },
  {
    name: "Muhammed Chowdhury",
    Id: "0x23",
    dept: "CSE",
    series: "1998",
    optional: "Senior Software Engineer",
    address: "Minneapolis, Minnesota, United States",
    country: "United States",
    badges: "highereducated",
    linkedinurl: "",
    type: "Point",
    coordinates: [-93.2654692, 44.9772995],
  },
  {
    name: "Md Ruhul Amin",
    Id: "0x24",
    dept: "CSE",
    series: "1999",
    optional: "Software Engineer",
    address: "Perth, Western Australia, Australia",
    country: "Australia",
    badges: "entrepreneur",
    linkedinurl: "",
    type: "Point",
    coordinates: [115.8604796, -31.9527121],
  },
  {
    name: "Md Saifur Rahman",
    Id: "0x25",
    dept: "CSE",
    series: "1999",
    optional: "",
    address: "Munich, Bavaria, Germany",
    country: "Germany",
    badges: "teamleader",
    linkedinurl: "",
    type: "Point",
    coordinates: [11.5753822, 48.1371079],
  },
  {
    name: "Rupom Razzaque",
    Id: "0x27",
    dept: "CSE",
    series: "1999",
    optional:
      "After several years in conventional software development, now focused to data-centric development and/or engineering. Aspiring to play a role as a data scientist too.",
    address: "London, London, United Kingdom",
    country: "United Kingdom",
    badges: "entrepreneur,highereducated,teamleader,recruiter",
    linkedinurl: "",
    type: "Point",
    coordinates: [-0.12765, 51.5073359],
  },
  {
    name: "Arif Hossen",
    Id: "0x29",
    dept: "CSE",
    series: "1999",
    optional: "",
    address: "London, , United Kingdom",
    country: "United Kingdom",
    badges: "highereducated,corporate",
    linkedinurl: "",
    type: "Point",
    coordinates: [0.05634641430456419, 51.65872993031965],
  },
  {
    name: "AKM Khaled Ahsan Talukder",
    Id: "0x2a",
    dept: "CSE",
    series: "1999",
    optional: "",
    address: "Okemos, Michigan, United States",
    country: "United States",
    badges: "highereducated,recruiter,corporate",
    linkedinurl: "",
    type: "Point",
    coordinates: [-84.4275259, 42.7221021],
  },
  {
    name: "Dr. Md Iqbal Hossain",
    Id: "0x2b",
    dept: "CSE",
    series: "2000",
    optional:
      "I lead a data science team to solve data science problems in higher education. ",
    address: "Tucson, Arizona, United States",
    country: "United States",
    badges: "highereducated,manager,teamleader,researcher,recruiter",
    linkedinurl: "",
    type: "Point",
    coordinates: [-110.9748477, 32.2228765],
  },
  {
    name: "Sammi Abida Salma",
    Id: "0x36",
    dept: "CSE",
    series: "2000",
    optional: "",
    address: "Tucson, AZ, United States",
    country: "United States",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [-110.84427148012966, 32.27657365966931],
  },
  {
    name: "Md Nur Alam Sumon",
    Id: "0x46",
    dept: "CSE",
    series: "2003",
    optional: "Build software for the future betterment ",
    address: ", , Cyprus",
    country: "Cyprus",
    badges: "manager",
    linkedinurl: "",
    type: "Point",
    coordinates: [33.1451285, 34.9823018],
  },
  {
    name: "Md Sajedul Islam (Pappu)",
    Id: "0x4a",
    dept: "CSE",
    series: "2003",
    optional: "Java Developer",
    address: "Woodbridge, NJ, United States",
    country: "United States",
    badges: "highereducated",
    linkedinurl: "",
    type: "Point",
    coordinates: [-74.28600076944446, 40.55418],
  },
  {
    name: "Md Mozaddid Hossain",
    Id: "0x4d",
    dept: "CSE",
    series: "2003",
    optional: "Systems Engineer, Nagra Media Australia Pty Ltd.",
    address: "Sydney, NSW, Australia",
    country: "Australia",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [151.09001211558407, -33.870408520797874],
  },
  {
    name: "Md Baharul Islam",
    Id: "0x4e",
    dept: "CSE",
    series: "2003",
    optional: "",
    address: "Fort Myers, Florida, United States",
    country: "United States",
    badges: "teacher,highereducated,manager,researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-81.8723084, 26.640628],
  },
  {
    name: "Md Moyen Uddin",
    Id: "0x50",
    dept: "CSE",
    series: "2003",
    optional: "Web Developer at Brainworx Audio GmbH in Lverkusen",
    address: "Leverkusen, NRW, Germany",
    country: "Germany",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [6.9881194, 51.0324743],
  },
  {
    name: "Md Hedayetul Islam Shovon",
    Id: "0x53",
    dept: "CSE",
    series: "2004",
    optional: "Researcher",
    address: "Mawson Lakes, South Australia, Australia",
    country: "Australia",
    badges: "teacher,highereducated,researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [138.6111791, -34.8104796],
  },
  {
    name: "Firoz Mahmud (Sabuz)",
    Id: "0x54",
    dept: "CSE",
    series: "2004",
    optional: "",
    address: "Queanbeyan , ACT, Australia",
    country: "Australia",
    badges: "teacher,highereducated,researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [149.3635308, -35.6545087],
  },
  {
    name: "Foyzul Karim",
    Id: "0x5f",
    dept: "CSE",
    series: "2004",
    optional: "Software professional",
    address: "Melbourne , Victoria , Australia",
    country: "Australia",
    badges: "corporate",
    linkedinurl: "",
    type: "Point",
    coordinates: [144.92769561434477, -37.66875355205749],
  },
  {
    name: "Nuhil Mehdy",
    Id: "0x67",
    dept: "CSE",
    series: "2005",
    optional: "",
    address: "Boise, ID, United States",
    country: "United States",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [-116.200835, 43.61656],
  },
  {
    name: "Saeed Ahmed",
    Id: "0x6e",
    dept: "CSE",
    series: "2005",
    optional: "",
    address: "Munich , Bavaria , Germany",
    country: "Germany",
    badges: "recruiter",
    linkedinurl: "",
    type: "Point",
    coordinates: [11.644347825814432, 48.09517365718174],
  },
  {
    name: "Saeed Ahmed",
    Id: "0x75",
    dept: "CSE",
    series: "2005",
    optional: "Team lead software development at content fleet",
    address: "Hamburg, , Germany",
    country: "Germany",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [10.000654, 53.550341],
  },
  {
    name: "Nakib Hossain",
    Id: "0x146",
    dept: "CSE",
    series: "2014",
    optional: "",
    address: "Atlanta, GA, United States",
    country: "United States",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [-84.3902644, 33.7489924],
  },
  {
    name: "Md. Mehedi Hasan",
    Id: "0x148",
    dept: "CSE",
    series: "2014",
    optional: "Graduate Teaching Assistant at Iowa State University ",
    address: "Ames, Iowa, United States",
    country: "United States",
    badges: "teacher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-93.79791340126637, 42.18215268600656],
  },
  {
    name: "Arnab Kanti Tarafder",
    Id: "0x149",
    dept: "CSE",
    series: "2014",
    optional: "PhD Student",
    address: "Williamsburg, Virginia, United States",
    country: "United States",
    badges: "teacher,researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-76.838750443534, 37.11400786760537],
  },
  {
    name: "Tahsin Masrur",
    Id: "0x14a",
    dept: "CSE",
    series: "2014",
    optional: "",
    address: "New Taipei City, , Taiwan",
    country: "Taiwan",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [121.47327970975414, 25.0851933],
  },
  {
    name: "Sabbir Ahmed Saqlain",
    Id: "0x154",
    dept: "CSE",
    series: "2014",
    optional: "PhD in CS",
    address: "Harrison , New Jersey , United States",
    country: "United States",
    badges: "researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-74.07617620189961, 40.74267105868319],
  },
  {
    name: "Md. Sabbir Hossain Pulok",
    Id: "0x155",
    dept: "CSE",
    series: "2015",
    optional:
      "Currently, I am working as a graduate research assistant in the Heterogeneous System Research Lab at University of Mississippi (USA). As well as I am a PhD candidate of Department of Computer and Information Science. Before joining here, I worked as a software development engineer of Frontier Semiconductor Inc. (Milpitas, CA). On there, mostly I developed software for metrological tools, robots, vision system for TSMC, Sony, Samsung etc.",
    address: "Oxford, Mississippi , United States",
    country: "United States",
    badges: "highereducated,teamleader,researcher,recruiter",
    linkedinurl: "",
    type: "Point",
    coordinates: [-89.4848044582297, 34.48369938656894],
  },
  {
    name: "Monoshi Kumar Roy",
    Id: "0x157",
    dept: "CSE",
    series: "2015",
    optional: "",
    address: "Ames, Iowa, United States",
    country: "United States",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [-93.58469627114349, 42.01955205212074],
  },
  {
    name: "Tamal Chakroborty",
    Id: "0x153",
    dept: "CSE",
    series: "2014",
    optional: "",
    address: "Waterloo, Ontario , Canada",
    country: "Canada",
    badges: "researcher,recruiter",
    linkedinurl:
      "https://www.linkedin.com/in/tamal-chakroborty-918b08119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    type: "Point",
    coordinates: [-80.5222961, 43.4652699],
  },
  {
    name: "Tasmia Jannat",
    Id: "0x152",
    dept: "CSE",
    series: "2014",
    optional: "Phd",
    address: "Rolla, Missouri , United States",
    country: "United States",
    badges: "teacher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-91.7708076, 37.9509324],
  },
  {
    name: "Sadia Afrin",
    Id: "0x15f",
    dept: "CSE",
    series: "2015",
    optional: "Masters ",
    address: "Halifax, Nova Scotia , Canada",
    country: "Canada",
    badges: "researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-63.58756823619973, 44.55026465953834],
  },
  {
    name: "Nowfel Mashnoor",
    Id: "0x160",
    dept: "CSE",
    series: "2015",
    optional: "",
    address: "Reno, NEVADA, United States",
    country: "United States",
    badges: "researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-119.90514637887438, 39.47254794398312],
  },
  {
    name: "Amit Karmakar",
    Id: "0x165",
    dept: "CSE",
    series: "2015",
    optional: "",
    address: "Hamamatsu , Shizuoka, Japan",
    country: "Japan",
    badges: "highereducated,corporate",
    linkedinurl: "",
    type: "Point",
    coordinates: [137.7259431, 34.7109786],
  },
  {
    name: "Minhaz Bin Farukee",
    Id: "0x166",
    dept: "CSE",
    series: "2015",
    optional:
      "Former Machine Learning Engineer @ACI AI team\nFormer Data Scientist @KONA Software Lab\nFormer Intern @Huawei",
    address: "Arlington, Texas, United States",
    country: "United States",
    badges: "researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-97.12578362460043, 32.53814798589792],
  },
  {
    name: "Sabit Ahmed",
    Id: "0x167",
    dept: "CSE",
    series: "2015",
    optional:
      "I am currently pursuing PhD in Computer Science. My research areas are: Machine Learning, Pattern Mining, Bioinformatics, Computer Vision, Ubiquitous Computing etc. I worked in the Machine Learning Research Group of RUET during my undergraduate degree. And I have been an AI Engineer in one of the AI-based healthcare companies in USA. My current research focus is sensing technology, smart health, iOT.",
    address: "Charlottesville, Virginia, United States",
    country: "United States",
    badges: "teamleader,researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-78.4766781, 38.029306],
  },
  {
    name: "Debashis Gupta",
    Id: "0x169",
    dept: "CSE",
    series: "2015",
    optional: "Doing my masters program here.",
    address: "Winston-Salem, North Carolina, United States",
    country: "United States",
    badges: "teacher,researcher",
    linkedinurl: "https://www.linkedin.com/in/debashis-gupta/",
    type: "Point",
    coordinates: [-80.07384070791637, 35.95455018487257],
  },
  {
    name: "Abir Zaman",
    Id: "0x16c",
    dept: "CSE",
    series: "2015",
    optional: "M.Sc. in Computer Science",
    address: "Siegen, North Rhein Westphalia , Germany",
    country: "Germany",
    badges: "",
    linkedinurl: "",
    type: "Point",
    coordinates: [8.016667, 50.883331],
  },
  {
    name: "Abu Zahid Bin Aziz",
    Id: "0x16f",
    dept: "CSE",
    series: "2015",
    optional:
      "Currently, I am pursuing a Master's degree in Computing with a specialization in Image Analysis from the University of Utah. Concurrently, I am working as a Research Assistant at the Elhabian Lab, which operates under the Institute for Scientific Computing and Imaging Institute (SCI), also at the University of Utah. My research efforts are primarily focused on the application of deep learning methodologies to statistical shape modeling, specifically in the domain of medical imaging.",
    address: "Salt Lake City, Utah, United States",
    country: "United States",
    badges: "researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-111.83750131855709, 40.78794974778229],
  },
  {
    name: "Md Al Siam",
    Id: "0x173",
    dept: "CSE",
    series: "2016",
    optional: "",
    address: "Tuskegee, Alabama, United States",
    country: "United States",
    badges: "",
    linkedinurl: "https://www.linkedin.com/in/mdalsiam/",
    type: "Point",
    coordinates: [-85.6908715, 32.4240535],
  },
  {
    name: "Md Nahid Sadik",
    Id: "0x176",
    dept: "CSE",
    series: "2016",
    optional: "",
    address: "Edmonton , Alberta, Canada",
    country: "Canada",
    badges: "researcher",
    linkedinurl: "",
    type: "Point",
    coordinates: [-113.5264658957693, 53.466533863215076],
  },
  {
    name: "Mahbubur Rahman Durlov",
    Id: "0x180",
    dept: "CSE",
    series: "2016",
    optional: "doing Masters in Computing Science ",
    address: "Edmonton, Alberta, Canada",
    country: "Canada",
    badges: "researcher",
    linkedinurl: "https://www.linkedin.com/in/mahbubur-rahman-durlov",
    type: "Point",
    coordinates: [-113.35657209055233, 53.474374215249476],
  },
  {
    name: "Tirtho Roy",
    Id: "0x181",
    dept: "CSE",
    series: "2017",
    optional: "",
    address: "Ames, Iowa, United States",
    country: "United States",
    badges: "teamleader",
    linkedinurl: "",
    type: "Point",
    coordinates: [-93.58077479797021, 41.92223085558622],
  },
];

const Leafletmap = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      // Fix Leaflet marker icon issue
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }
  }, []);

  // Custom component to handle map instance and marker events
  const MarkerWithEvents = ({ alumnus }) => {
    const map = useMap(); // Safely access the map instance

    const handleClick = () => {
      map.flyTo(alumnus.coordinates.reverse(), 10, { duration: 1 });
    };

    const handlePopupClose = () => {
      map.flyTo([20, 0], 2, { duration: 1 });
    };

    const [lng, lat] = alumnus.coordinates;
    const badges = alumnus.badges
      ? alumnus.badges
          .split(",")
          .map((badge) => (
            <span key={badge} className="badge">
              {badge}
            </span>
          ))
      : null;

    return (
      <Marker position={[lat, lng]} eventHandlers={{ click: handleClick, popupclose: handlePopupClose }}>
        <Popup>
          <div className="popup-content">
            <h3 className="text-gray-900">{alumnus.name}</h3>
            <p>
              <strong className="text-gray-800">Department:</strong> {alumnus.dept}
            </p>
            <p>
              <strong className="text-gray-800">Series:</strong> {alumnus.series}
            </p>
            {alumnus.optional && (
              <p>
                <strong className="text-gray-800">Details:</strong> {alumnus.optional}
              </p>
            )}
            <p>
              <strong className="text-gray-800">Address:</strong> {alumnus.address}
            </p>
            <p>
              <strong className="text-gray-800">Country:</strong> {alumnus.country}
            </p>
            {badges && <div className="badges">{badges}</div>}
            {alumnus.linkedinurl && (
              <p>
                <a
                  href={alumnus.linkedinurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn Profile
                </a>
              </p>
            )}
          </div>
        </Popup>
      </Marker>
    );
  };

  return (
    <>
      <Head>
        <title>CSE Alumni Map</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        * {
          font-family: "Lato", sans-serif;
        }
        #map {
          height: 100vh;
          width: 100%;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 0;
        }
        .popup-content {
          max-width: 320px;
          padding: 0.75rem;
        }
        .popup-content h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .popup-content p {
          font-size: 0.8125rem;
          color: #4b5563;
          margin-bottom: 0.375rem;
          line-height: 1.4;
        }
        .popup-content p strong {
          color: #111827;
          font-weight: 600;
        }
        .popup-content .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin: 0.5rem 0;
        }
        .popup-content .badge {
          background-color: #e5e7eb;
          color: #374151;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.6875rem;
          font-weight: 500;
          text-transform: capitalize;
        }
        .popup-content a {
          font-size: 0.8125rem;
          font-weight: 500;
          display: inline-block;
          margin-top: 0.25rem;
        }
        .leaflet-popup-close-button {
          position: absolute;
          top: 0.5rem !important;
          right: 0.5rem !important;
          width: 1.25rem !important;
          height: 1.25rem !important;
          font-size: 1.25rem !important;
          line-height: 1.25rem !important;
          text-align: center;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .leaflet-popup-close-button:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #333;
        }
        .leaflet-popup-content-wrapper {
          padding-top: 1px;
        }
        .leaflet-container a.leaflet-popup-close-button {
          color: #555 !important;
          text-decoration: none !important;
        }
      `}</style>
      <div className="bg-gray-100">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "100vh", width: "100%" }}
          maxBounds={[
            [-85, -180],
            [85, 180],
          ]}
          maxBoundsViscosity={1.0}
          minZoom={2}
          maxZoom={18}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {alumniData.map((alumnus) => (
            <MarkerWithEvents key={alumnus.Id} alumnus={alumnus} />
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Leafletmap;
