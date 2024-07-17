"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  title: string;
  picture: string;
}

const professions = [
  "CEO",
  "Director",
  "Manager",
  "Supervisor",
  "Team Leader",
  "Karyawan 1",
  "Karyawan 2",
  "Karyawan 3",
];

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=4").then((response) => {
      const members = response.data.results.map((user: any, index: number) => ({
        name: `${user.name.first} ${user.name.last}`,
        title: professions[index % professions.length],
        picture: user.picture.large,
      }));
      setTeamMembers(members);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5 h-[1200px] lg:h-[800px]">
      <h1 className="text-4xl font-bold mt-8 mb-8 text-[#7d5d3f] flex justify-center">
        Dream House Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[100px] md:mt-[150px] lg:mt-[200px]">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-md">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={member.picture}
              alt={member.name}
            />
            <h3 className="text-xl font-semibold flex justify-center">
              {member.name}
            </h3>
            <p className="text-gray-600 flex justify-center">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
