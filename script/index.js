
var videoCon = document.querySelectorAll(".videoContainer");

var videoPlayPauseBtn = document.querySelector("#videoStatus");

var videoStatus = 0;
var currentVideo = undefined;
for(var i=0; i< videoCon.length; i++){
    videoCon[i].addEventListener('click', videoControl)          
}
function videoControl(){
   if(videoStatus == 0){
            videoStatus = 1;
            currentVideo = this.children[0];
            currentVideo.play();
            this.children[1].children[0].classList.remove("bi-play")
            this.children[1].children[0].classList.add("bi-pause")
        }else{
            videoStatus = 0;
            this.children[0].pause();
            this.children[1].children[0].classList.remove("bi-pause")
            this.children[1].children[0].classList.add("bi-play")
        }

}

function nextVideo(){
    videoCon[0].scrollBy(0,videoCon[0].offsetHeight)
}
function preVideo(){
    videoCon[0].scrollBy(0,-videoCon[0].offsetHeight)
}

window.addEventListener('keydown', (e)=>{
    currentVideo.pause();
    // play video
    currentVideo.parentElement.nextElementSibling.children[0].play();

    switch(e.key){
        case 'ArrowUp':
            preVideo();
            break;
        case 'ArrowDown': 
            nextVideo();
            break;
    }
})

function cl(msg){
    console.log(msg)
}
