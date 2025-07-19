import { ProfileCard } from "@/components/developers/profileCard";

import rabbi1 from "@/public/images/developers/rabbi1.jpg";
import bitto from "@/public/images/developers/bitto.jpg";

const developers = [
  {
    name: "Md. Fazle Rabbi",
    role: "Developer",
    location: "Khulna, Bangladesh",
    image: rabbi1,
    github: "https://github.com/rabbi6272",
    linkedin: "https://www.linkedin.com/in/fazle-rabbi-b48a722a2/",
    facebook: "https://www.facebook.com/frabbi6272",
  },
  {
    name: "Bitto Saha",
    role: "Developer",
    image: bitto,
    location: "Bogra, Bangladesh",
    github: "https://github.com/idcnys/",
    linkedin: "https://www.linkedin.com/in/bittosaha/",
    facebook: "https://www.facebook.com/biiitto",
  },
];

export default function Developers() {
  return (
    <div className="p-4 sm:p-6 lg:p-6">
      <div className="p-5 w-full bg-slate-700 rounded-lg">
        <h3 className="text-center text-3xl font-semibold text-gray-200">
          Our Developers
        </h3>
        <br />
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {developers.map((developer) => (
            <ProfileCard
              key={developer.name}
              name={developer.name}
              role={developer.role}
              location={developer.location}
              image={developer.image}
              github={developer.github}
              linkedin={developer.linkedin}
              facebook={developer.facebook}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
