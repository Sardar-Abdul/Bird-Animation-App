let animatedBird = document.querySelector('.background');

let frames = [
    {transform: 'translateX(100%)'},
    {transform: 'translateX(-100%)'}
]


let timing = {duration: 10000, iterations: Infinity}

let backgroundMovement = animatedBird.animate(frames, timing)


function goFaster() {
    backgroundMovement.playbackRate *= 1.1
}

goFaster()

function speedslower() {
    if(backgroundMovement.playbackRate > 0.4){
        backgroundMovement.playbackRate *= 0.9
    }
}

speedslower()


setInterval(speedslower, 1000)

document.addEventListener('click', goFaster)