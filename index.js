var audio_volume = 0.6;

const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(() => {
        currentKey.classList.remove('pressed')
    }, 250)

}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume
    audio.play();

}

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    animate(triggeredKey)
})


const slider = document.getElementById("volume__slider")
slider.oninput = (event) => {
    audio_volume = event.target.value / 100
}


var auto_music_id;
var auto_music_on = false;
const start_auto_music = () => {
    const letters = ["w", "a", "s", "d", "j", "k", "l"]

    auto_music_id = setInterval(() => {
        const current_key = letters[Math.floor(Math.random() * letters.length)]
        makeSound(current_key)
        animate(current_key)

    }, 300)



}

const auto_music_button = document.getElementById("util__button-auto")
auto_music_button.addEventListener("click", () => {

    if (!auto_music_on) {
        start_auto_music()
        auto_music_on = true
        auto_music_button.classList.add("auto_music_on")
        auto_music_button.innerText = "Stop Auto Music"
    }
    else {
        clearInterval(auto_music_id)
        auto_music_on = false
        auto_music_button.classList.remove("auto_music_on")
        auto_music_button.innerText = "Start Auto Music"

    }
})


const makeSound = (key) => {

    switch (key) {
        case "w":
            playMusic("sounds/sound-1.mp3");
            break;
        case "a":
            playMusic("sounds/sound-2.mp3");
            break;
        case "s":
            playMusic("sounds/sound-3.mp3");
            break;
        case "d":
            playMusic("sounds/sound-4.mp3");
            break;
        case "j":
            playMusic("sounds/sound-5.mp3");
            break;
        case "k":
            playMusic("sounds/sound-6.mp3");
            break;
        case "l":
            playMusic("sounds/sound-7.mp3");
            break;
        default:
            console.log("hey wrong button!!");


    }


}

const handleDrumClick = (event) => {
    var innerHTML = event.target.innerHTML;
    animate(innerHTML)
    makeSound(innerHTML)
}

var drums = document.querySelectorAll(".drum")
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick)
}
