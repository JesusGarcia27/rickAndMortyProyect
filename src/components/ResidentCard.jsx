import axios from "axios";
import React, { useEffect, useState } from "react";

const residentStatus = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-400'
}

const ResidentCard = ({ resident }) => {

    const [residentInfo, setResidentInfo] = useState()

  useEffect(() => {
    
      axios
        .get(resident)
        .then((res) => setResidentInfo(res.data))
        .catch((err) => console.log(err));
  }, []);


  return (
    <article className="grid gap-2 border-[#8EFF8B] border-2 shadow-lg shadow-[#8EFF8B]/70 hover:bg-[#8fff8b8a] rounded-md overflow-hidden ">
        <div className="relative  ">
            <img className="w-full border-[#8EFF8B] border-2" src={residentInfo?.image} alt="" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center rounded-md border-[#8EFF8B] border-2 shadow-lg shadow-[#8EFF8B]/70 hover:bg-[#8fff8b8a] ">
                <div className={`w-3 h-3 ${residentStatus[residentInfo?.status]} rounded-full`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </div>
        <section className="p-6 sm:p-4">
            <h3 className="text-4xl text-center mb-5 sm:text-2xl text-white">{residentInfo?.name} </h3>
            <ul >
                <li className="text-1xl text-white">
                    <span>Species: </span>
                    <span className="text-1xl text-[#8EFF8B]">{residentInfo?.species} </span>
                </li>
                <li className="text-1xl text-white">
                    <span>Origin: </span>
                    <span className="text-1xl text-[#8EFF8B]">{residentInfo?.origin.name} </span>
                </li>
                <li className="text-1xl text-white">
                    <span>Times appear: </span>
                    <span className="text-1xl text-[#8EFF8B]">{residentInfo?.episode.length} Time</span>
                </li>
            </ul>
        </section>
    </article>
  )
};

export default ResidentCard;

