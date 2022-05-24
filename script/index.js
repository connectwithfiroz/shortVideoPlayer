
const video = document.querySelector(".videoContainer>video");
const videoPlayPauseBtn = document.querySelector("#videoStatus");

var videoStatus = 0;
video.addEventListener('click',(e)=>{
    if(videoStatus == 0){
        playVideo();
    }else{
        pauseVideo();
    }
})

function playVideo(){
    videoStatus = 1;
    video.play();
    document.querySelector("#videoStatus>i").classList.remove("bi-play")
    document.querySelector("#videoStatus>i").classList.add("bi-pause")
}
function pauseVideo(){
    videoStatus = 0;
    video.pause();
    document.querySelector("#videoStatus>i").classList.remove("bi-pause")
    document.querySelector("#videoStatus>i").classList.add("bi-play")
}
window.addEventListener('load',()=>{
    // video.src = videoObj[4].src;
    // playVideo();
})