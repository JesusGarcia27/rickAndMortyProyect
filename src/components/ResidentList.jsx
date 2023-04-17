import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ location }) => {
  const [currentPage, setcurrentPage] = useState(1);

  const RESIDENTS_PER_PAGE = 20

  const arrayPages = []
  const quantityPages = Math.ceil(
    location?.residents.length / RESIDENTS_PER_PAGE
  );
  for(let i = 1; i <= quantityPages; i++){
    arrayPages.push(i)
  } 

  const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE

  const endCut = currentPage * RESIDENTS_PER_PAGE

  const residents = location?.residents; 

  useEffect(() => {
    setcurrentPage(1)
  },[location])

  return (
    <>
    <section className="p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto">
      {residents?.slice(startCut, endCut).map((resident) => (
        <ResidentCard key={resident} resident={resident} />
      ))}
    </section>
    <ul className="flex gap-4 justify-center py-4 text-white ">
      {
        arrayPages.map(page => <li onClick={() => setcurrentPage(page)} className={`px-3 py-1 mt-10 cursor-pointer rounded-md border-solid border-2 border-[#8EFF8B] shadow-lg shadow-[#8EFF8B]/70 hover:bg-[#8fff8b8a] ${page === currentPage && 'bg-[#8EFF8B]/70 text-white font-bold'}`} key={page} >{page}</li> )
      }
    </ul>
    </>
  );
};

export default ResidentList;
