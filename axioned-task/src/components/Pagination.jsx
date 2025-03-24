import React from 'react'

const Pagination = ({currentPage, totalPages, setCurrentPage}) => {
    const pageNumbers = Array.from({length : totalPages}, (_,i)=> i + 1);

  return (
    <div className='w-full flex justify-center items-center gap-5 my-4 md:flex-row flex-col'>
        <button className={` px-4 py-4 rounded-2xl md:rounded-l-2xl border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"}`} onClick={()=> setCurrentPage(currentPage - 1) } disabled={currentPage === 1}>Prev</button>
        <div className='w-full flex justify-center gap-2 md:flex-row flex-wrap'>
        {pageNumbers.map((page)=>(
            <button key={page} className={`w-[45px] h-[45px]  rounded-[50%] ${currentPage === page ? "bg-blue-700" : "bg-blue-300" }`} onClick={()=>setCurrentPage(page)}>{page}</button>
        ))}
        </div>
        <button className={` px-4 py-4 rounded-2xl md:rounded-l-2xl border ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"}`} onClick={()=> setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default Pagination