let cityouter = document.querySelector('.city-outer');
let cityinner = document.querySelector('.city-inner');
let carMore = document.querySelector('.car5');
let cloud = document.querySelector('.cloud');
let car = document.querySelector('.car');
let gameStarter = document.querySelector('.game-starter');
let myaudio = document.getElementById('myAudio');
let seconds = document.getElementById('counter').textContent;


let coundown = setInterval(function(){
    seconds --;
    document.getElementById('counter').textContent = seconds;

    if(seconds <= 0){
        clearInterval(coundown);
        gameStarter.remove();
        cloud.classList.add('cloudAnimation');
        
    }
}, 1000);

setInterval(function(){

    cityouter.classList.toggle('daytonight');

},3000);

document.addEventListener('keypress', keyControl);

let light = false;
let myCar = ['images/lights-off.png', 'images/lights-on.png']
let music = false;

function keyControl(e){
    if(e.keyCode ==  32){
        cityinner.classList.toggle('cityamimation');
        car.classList.toggle('caranimaton');
        carMore.classList.toggle('car5animatin');
    }

    if(e.keyCode == 108){
        if(light){
            car.setAttribute('src',myCar[0]);
            light = false;
        }
        else{
            car.setAttribute('src',myCar[1]);
            light = true;
        }

    }

    if(e.keyCode == 109){

        if(music){
            pausemusic();
            music = false;
        }
        else{
            playmusic();
            music = true;
        }
    }
    console.log(e.keyCode);

}

function pausemusic(){
    myaudio.pause();
}

function playmusic(){
    myaudio.play();
}