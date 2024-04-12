:host .swiper-wrapper {
    background-color: red;
    height: 500px;
}
:host ::slotted(swiper-slide) {
    overflow: hidden;
    height: 400px;
}
::slotted(.swiper-slide-next) {
    border: 2px solid #fff;
    tranform: scale(1.5);
}
::slotted(.swiper-slide-active) {
    border: 2px solid #000;
}

background-image: url("https://s3.ap-southeast-2.amazonaws.com/media.lookboxliving.com/2022/09/1.livingrooms.jpg"), linear-gradient(rgba(58, 51, 45, 0.98), rgba(58, 51, 45, 0.98))
<div className='images-container'>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <swiper-container init="false" className="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="3" coverflow-effect-rotate="0" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="0" coverflow-effect-slide-shadows="true" loop="true">
        <swiper-slide>
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.1280.suffix/1689786863909.jpeg" alt="img"></img>
        </swiper-slide>
        <swiper-slide>
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.1280.suffix/1689786863909.jpeg" alt="img"></img>
        </swiper-slide>
        <swiper-slide>
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.1280.suffix/1689786863909.jpeg" alt="img"></img>
        </swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
    </swiper-container>
    <button className='prev'>Swipe previous</button>
    <button className='next'>Swipe next</button>
</div>