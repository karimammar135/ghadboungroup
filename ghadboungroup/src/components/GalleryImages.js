import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function GalleryImages({ images, loading, openImage, pageSize }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className='grid grid-cols-[repeat(1,minmax(0,370px))] nos:grid-cols-[repeat(2,minmax(0,400px))] lg:grid-cols-[repeat(3,minmax(0,400px))] vl:grid-cols-[repeat(4,minmax(0,420px))] auto-rows-auto gap-[30px] p-[20px] nos:p-[30px]'>
            {!loading && images.map((image) => {
                return <div key={image.id} className='relative before:block before:pt-[100%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${image.image_url})` }} onClick={() => openImage(image.id)}></div>
            }) || 
            <>{(() => {
                const skeletons = [];
        
                for (let i = 0; i < pageSize; i++) {
                    skeletons.push(<Skeleton key={i} className='relative before:block before:pt-[100%]'></Skeleton>);
                }
        
                return skeletons;
                })()}
            </>
            }
        </div>
    </SkeletonTheme>
  )
}
