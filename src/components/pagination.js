import React from "react";
import {Link} from 'gatsby';

const Pagination = ({currentPage, numPages, customSlug}) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    const slug = customSlug ? customSlug : "articoli"
    return (
        <div className="flex flex-row justify-between">
            {!isFirst && (
            <Link to={`/${slug}/${prevPage}`} rel="prev" className="text-sm dark:text-gray-300 mx-2 font-semibold">
            {"<"}
            </Link>
            )}
            <div className="mx-auto">
                {Array.from({ length: numPages }, (_, i) => (
                <Link 
                    className={`mx-1 py-1 px-3 rounded-full text-sm font-semibold dark:text-gray-300 ${i + 1 === currentPage ? "bg-[#eda550] hover:bg-[#c98028] text-white font-bold" : ""}`} 
                    key={`pagination-number${i + 1}`} 
                    to={`/${slug}/${i === 0 ? "" : i + 1}`}
                    >
                    {i + 1}
                </Link>
                ))}
            </div>
            {!isLast && (
            <Link to={`/${slug}/${nextPage}`} rel="next" className="text-sm dark:text-gray-300 mx-2 font-semibold">
            {">"}
            </Link>
            )}
        </div>
    )
}   

export default Pagination;