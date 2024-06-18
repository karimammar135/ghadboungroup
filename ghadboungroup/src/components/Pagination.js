import React, { useEffect } from 'react'

import classNames from 'classnames'

export default function Pagination({ currentPage, handlePagination, isPrev, isNext }) {
    
    useEffect(() => {
        if (isPrev === true){
            document.querySelector('#prev').disabled = false;
        } else {
            document.querySelector('#prev').disabled = true;
        }
        if (isNext === true) {
            document.querySelector('#next').disabled = false;
        } else {
            document.querySelector('#next').disabled = true;
        }
    }, [isPrev, isNext])

    return (
        <div className='pagination w-full flex justify-around items-center pl-[20px] pr-[20px] nos:pl-[30px] nos:pr-[30px]'>
            <button id="prev" onClick={() => handlePagination('prev')} className={classNames('text-primary flex items-center justify-center gap-[10px] pl-[15px] pr-[15px] pt-[7px] pb-[7px]', {'opacity-40': isPrev == false})}><i className="text-1xl fa-solid fa-arrow-left"></i> Prev</button>
            <span className="pl-[5px] pr-[5px]">Page: {currentPage}</span>
            <button id="next" onClick={() => handlePagination('next')} className={classNames('text-primary flex items-center justify-center gap-[10px] pl-[15px] pr-[15px] pt-[7px] pb-[7px]', {'opacity-40': isNext == false})}>Next <i className="text-1xl fa-solid fa-arrow-right"></i></button>
        </div>
    );
}
