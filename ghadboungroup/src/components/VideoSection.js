import React, { useState } from 'react'

import video_wallpaper from './static/images/video-wallpaper.jpeg'
import InstagramEmbed from './InstagramEmbed'
import VideoIcon from './static/images/video-icon.png'

export default function VideoSection() {
    const [toggleVideo, setToggleVideo] = useState(false)
    const [popUp, setPopUp] = useState(false)
    
    return (
        <section id="video" className='w-full'>
            <div></div>
            <div className='relative flex justify-center items-center w-full h-[350px] mt-[60px] mb-[100px] bg-center bg-cover bg-no-repeat bg-[#4E443C]' style={{ backgroundImage: `url(${video_wallpaper})`, backgroundColor: 'black' }}>
                <h1 className='text-[32px]  text-white'>Quality Work On Site</h1>
                <Button setPopUp={setPopUp} />
            </div>
            {popUp && <PopUp setPopUp={setPopUp} setToggleVideo={setToggleVideo} />}
            {toggleVideo && <Video setToggleVideo={setToggleVideo} />}
        </section>
    )
}

function Button({ setPopUp }) {
  return (
    <div onClick={() => setPopUp(true)} className='absolute flex justify-center items-center cursor-pointer bottom-0 right-[50%] translate-y-2/4 translate-x-2/4 w-[70px] h-[70px] bg-[#b5a9a9ab] rounded-full'>
        <div className='flex justify-center items-center w-[36px] h-[36px] bg-[#8E8585] rounded-full'>
            <i className="fa-solid fa-play text-white pl-[3.5px] text-[14px]"></i>
        </div>
    </div>
  )
}

function PopUp({ setPopUp, setToggleVideo }){
    return (
        <section className='z-20 fixed top-0 left-0 w-[100%] min-h-[100vh] flex flex-col justify-around items-center backdrop-blur-sm'>
            <div className='relative shadow flex flex-col gap-[15px] items-center justify-center rounded-lg w-[100%] max-w-[275px] h-[220px] bg-white'>
                <i onClick={() => setPopUp(false)} className="cursor-pointer absolute top-[12px] left-[12px] text-[18px] fa-regular fa-circle-xmark text-black text-[30px]"></i>
                <img alt="video icon" src={VideoIcon}></img>
                <button className='h-[30px] w-[155px] bg-[#C7C7C7] rounded text-white text-[12px]' onClick={() => {setToggleVideo(true); setPopUp(false)}}>Whach here</button>
                <a href="https://www.instagram.com/reel/C5LvDZkCCUy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className='h-[30px] w-[155px] flex items-center justify-center bg-gradient-to-r from-[#FF6B3F] to-[#FB2184] rounded text-white text-[12px]' onClick={() => setPopUp(false)}>Wtach on instagram</a>
            </div>
        </section>
    )
}

function Video({ setToggleVideo }){
    return (
        <section className='z-20 fixed top-0 left-0 w-[100%] min-h-[100vh] flex flex-col justify-center items-center backdrop-blur-sm'>
            <i onClick={() => setToggleVideo(false)} className="z-30 absolute top-[15px] left-[15px] fa-solid fa-circle-xmark text-[#F8780F] text-[30px]"></i>
            <InstagramEmbed url="https://www.instagram.com/reel/C5LvDZkCCUy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </section>
    )
}
