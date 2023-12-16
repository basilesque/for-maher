const para = document.getElementById("p");
const link = document.createElement("button")
link.innerText = "The Album"
link.addEventListener("click", function () {
    window.open('https://photos.app.goo.gl/ogbiGLd1yfCKSvVz6', '_blank');
    return false;
});
let clicks = 0
function backgroundChange(color1, color2) {
    return `linear-gradient(to right, ${color1}, ${color2})`
}
function randomRGB() {
    let redValue = (Math.floor(Math.random() * 256));
    let greenValue = (Math.floor(Math.random() * 256));
    let blueValue = (Math.floor(Math.random() * 256));
    return `rgba(${redValue}, ${greenValue}, ${blueValue}, ${0.50})`
}
function gradient() {
    return `linear-gradient(to right, ${randomRGB()}, ${randomRGB()})`;
}
function changeBackground() {
    return document.body.style.background = gradient()
}

document.addEventListener('keydown', function (event) {
    clicks++
    if (event.key === ' ' && clicks === 1) {
        changeBackground()
        para.innerText = "First of all, hope you and the pets are doing well.";
    }
    else if (event.key === ' ' && clicks === 2) {
        changeBackground()
        para.innerText = "I was planning to send you a happy birthday message,";
    }
    else if (event.key === ' ' && clicks === 3) {
        changeBackground()
        para.innerText = "But I thought…";
    }
    else if (event.key === ' ' && clicks === 4) {
        changeBackground()
        para.innerText = "Why not make it more interactive?";
    }
    else if (event.key === ' ' && clicks === 5) {
        changeBackground()
        para.innerText = "More tought out?";
    }
    else if (event.key === ' ' && clicks === 6) {
        changeBackground()
        para.innerText = "More sweet and personal?";
    }
    else if (event.key === ' ' && clicks === 7) {
        changeBackground()
        para.innerText = "That’s why I coded this lil’ website.";
    }
    else if (event.key === ' ' && clicks === 8) {
        changeBackground()
        para.innerText = "(I didn’t send you the link to it at 00:00 because I thought it might fuck up your sleep lol)";
    }
    else if (event.key === ' ' && clicks === 9) {
        changeBackground()
        para.innerText = "But this website has been ready for like a week.";
    }
    else if (event.key === ' ' && clicks === 10) {
        changeBackground()
        para.innerText = "Anyway.";
    }
    else if (event.key === ' ' && clicks === 11) {
        changeBackground()
        para.innerText = "I wanna start by saying how awesome of a person you are. It’s literally crazy.";
    }
    else if (event.key === ' ' && clicks === 12) {
        changeBackground()
        para.innerText = "You are understanding.";
    }
    else if (event.key === ' ' && clicks === 13) {
        changeBackground()
        para.innerText = "You are smart.";
    }
    else if (event.key === ' ' && clicks === 14) {
        changeBackground()
        para.innerText = "You try to improve yourself and your life.";
    }
    else if (event.key === ' ' && clicks === 15) {
        changeBackground()
        para.innerText = "I’ve never seen you give into anger or lash out.";
    }
    else if (event.key === ' ' && clicks === 16) {
        changeBackground()
        para.innerText = "You are very funny.";
    }
    else if (event.key === ' ' && clicks === 17) {
        changeBackground()
        para.innerText = "You are fun to be around.";
    }
    else if (event.key === ' ' && clicks === 18) {
        changeBackground()
        para.innerText = "And many more.";
    }
    else if (event.key === ' ' && clicks === 19) {
        changeBackground()
        para.innerText = "You are just so awesome all around.";
    }
    else if (event.key === ' ' && clicks === 20) {
        changeBackground()
        para.innerText = "Thank you for letting me know you this well.";
    }
    else if (event.key === ' ' && clicks === 21) {
        changeBackground()
        para.innerText = "And now, you’re 20!";
    }
    else if (event.key === ' ' && clicks === 22) {
        changeBackground()
        para.innerText = "No longer a teenager.";
    }
    else if (event.key === ' ' && clicks === 23) {
        changeBackground()
        para.innerText = "If you’d ask me I would tell you being 19 and being 20 has no big differences that I could tell yet.";
    }
    else if (event.key === ' ' && clicks === 24) {
        changeBackground()
        para.innerText = "You are just the old you with a different number.";
    }
    else if (event.key === ' ' && clicks === 25) {
        changeBackground()
        para.innerText = "Thinking about this now, I guess this applies to any other age too lol";
    }
    else if (event.key === ' ' && clicks === 26) {
        changeBackground()
        para.innerText = "But you should seriously let me know if you notice any changes.";
    }
    else if (event.key === ' ' && clicks === 27) {
        changeBackground()
        para.innerText = "For scientific purposes of course.";
    }
    else if (event.key === ' ' && clicks === 28) {
        changeBackground()
        para.innerText = "With all that out of the way,";
    }
    else if (event.key === ' ' && clicks === 29) {
        changeBackground()
        para.innerText = "HAPPY BIRTHDAY MAHER!! <3";
    }
    else if (event.key === ' ' && clicks === 30) {
        changeBackground()
        para.innerText = "I hope this new age brings you more personal growth, dreams that come true, happiness and health.";
    }
    else if (event.key === ' ' && clicks === 31) {
        changeBackground()
        para.innerText = "Well, that’s about it for the good wishes and the birthday celebrations.";
    }
    else if (event.key === ' ' && clicks === 32) {
        changeBackground()
        para.innerText = "Please always know that I think and care about you no matter what happens Maher.";
    }
    else if (event.key === ' ' && clicks === 33) {
        changeBackground()
        para.innerText = "I’m here for you. And I will always be.";
    }
    else if (event.key === ' ' && clicks === 34) {
        changeBackground()
        para.innerText = "Hope to talk to you soon.";
    }
    else if (event.key === ' ' && clicks === 35) {
        changeBackground()
        para.innerText = "- Reyhan.";
    }
    else if (event.key === ' ' && clicks === 36) {
        changeBackground()
        para.innerText = ".";
    }
    else if (event.key === ' ' && clicks === 37) {
        changeBackground()
        para.innerText = "The birthday message is over sir, stop pressing space.";
    }
    else if (event.key === ' ' && clicks === 38) {
        changeBackground()
        para.innerText = "Uhhh, hello??? I said stop pressing space?? Are these texts not being shown or something?!!";
    }
    else if (event.key === ' ' && clicks === 39) {
        changeBackground()
        para.innerText = "Seriously. Go away.";
    }
    else if (event.key === ' ' && clicks === 40) {
        changeBackground()
        para.innerText = "Why would you keep pressing space, when I said stop!";
    }
    else if (event.key === ' ' && clicks === 41) {
        changeBackground()
        para.innerText = "You don't give up, do you?";
    }
    else if (event.key === ' ' && clicks === 42) {
        changeBackground()
        para.innerText = "Oh, I see what’s happening here now.";
    }
    else if (event.key === ' ' && clicks === 43) {
        changeBackground()
        para.innerText = "You’re expecting an easter egg or something?";
    }
    else if (event.key === ' ' && clicks === 44) {
        changeBackground()
        para.innerText = "As if I would do that…";
    }
    else if (event.key === ' ' && clicks === 45) {
        changeBackground()
        para.innerText = "As if this is a video game…";
    }
    else if (event.key === ' ' && clicks === 46) {
        changeBackground()
        para.innerText = "As if I would take the time to write the lines and the code for that haha…";
    }
    else if (event.key === ' ' && clicks === 47) {
        changeBackground()
        para.innerText = "Imagine…";
    }
    else if (event.key === ' ' && clicks === 48) {
        changeBackground()
        para.innerText = "Well, as you see, that proves that it doesn’t exist.";
    }
    else if (event.key === ' ' && clicks === 49) {
        changeBackground()
        para.innerText = "So, on your way now!";
    }
    else if (event.key === ' ' && clicks === 50) {
        changeBackground()
        para.innerText = "Oh, you're stubborn. Alright, let’s try other methods.";
    }
    else if (event.key === ' ' && clicks === 51) {
        changeBackground()
        para.innerText = "This will make you close the tab.";
    }
    else if (event.key === ' ' && clicks === 52) {
        para.innerText = "";
        document.body.style.backgroundImage = `url("pickle1.webp")`
    }
    else if (event.key === ' ' && clicks === 53) {
        document.body.style.backgroundImage = backgroundChange("#8c238c8b", "#084960d7")
        para.innerText = "No? You’re still here?";
    }
    else if (event.key === ' ' && clicks === 54) {
        changeBackground()
        para.innerText = "I for sure thought that would work. Let’s try something else.";
    }
    else if (event.key === ' ' && clicks === 55) {
        changeBackground()
        para.innerText = "What about this?";
    }
    else if (event.key === ' ' && clicks === 56) {
        para.innerText = "";
        document.body.style.backgroundImage = `url("pickle2.jpg")`
    }
    else if (event.key === ' ' && clicks === 57) {
        document.body.style.backgroundImage = backgroundChange("#8c238c8b", "#084960d7")
        para.innerText = "You like it? It had mixed vegetables, yummm";
    }
    else if (event.key === ' ' && clicks === 58) {
        changeBackground()
        para.innerText = "Oooo, look, they even have watermelon ones!!";
    }
    else if (event.key === ' ' && clicks === 59) {
        para.innerText = "";
        document.body.style.backgroundImage = `url("pickle3.webp")`
    }
    else if (event.key === ' ' && clicks === 60) {
        document.body.style.backgroundImage = backgroundChange("#8c238c8b", "#084960d7")
        para.innerText = "You're still here? *sigh* Okay, okay… Fine… I will let you see the secrets.";
    }
    else if (event.key === ' ' && clicks === 61) {
        changeBackground()
        para.innerText = "I know it's not the most thought-out or the most expensive birthday present ever.";
    }
    else if (event.key === ' ' && clicks === 62) {
        changeBackground()
        para.innerText = "Which, doesn't have to be.";
    }
    else if (event.key === ' ' && clicks === 63) {
        changeBackground()
        para.innerText = "But I wanted to share you the album which I've been keeping the photos of the sky that I take once in a while.";
    }
    else if (event.key === ' ' && clicks === 64) {
        changeBackground()
        para.innerText = "I will give you the link in a second, but before that, I want you to know why is this even a present.";
    }
    else if (event.key === ' ' && clicks === 65) {
        changeBackground()
        para.innerText = "Whenever I look at the sky";
    }
    else if (event.key === ' ' && clicks === 66) {
        changeBackground()
        para.innerText = "I think of you";
    }
    else if (event.key === ' ' && clicks === 67) {
        document.body.style.backgroundImage = `url("sky.jpg")`
        para.innerText = "I think about how we are under the same sky,";
    }
    else if (event.key === ' ' && clicks === 68) {
        document.body.style.backgroundImage = `url("sun.jpg")`
        para.innerText = "under the same sun,";
    }
    else if (event.key === ' ' && clicks === 69) {
        document.body.style.backgroundImage = `url("moon.jpg")`
        document.getElementById("p").style.color = "white"
        para.innerText = "under the same moon.";
    }
    else if (event.key === ' ' && clicks === 70) {
        document.body.style.backgroundImage = backgroundChange("#8c238c8b", "#084960d7")
        document.getElementById("p").style.color = "black"
        para.innerText = "Makes me happy.";
    }
    else if (event.key === ' ' && clicks === 71) {
        document.body.style.backgroundImage = `url("colors.jpg")`
        document.getElementById("p").style.color = "white"
        para.innerText = "Not only that, but I look at the colors and get amazed by how nature can be so beatiful.";
    }
    else if (event.key === ' ' && clicks === 72) {
        document.body.style.backgroundImage = backgroundChange("#8c238c8b", "#084960d7")
        document.getElementById("p").style.color = "black"
        para.innerText = "And how simple life can be.";
    }
    else if (event.key === ' ' && clicks === 73) {
        changeBackground()
        para.innerText = "It's a cozy feeling.";
    }
    else if (event.key === ' ' && clicks === 74) {
        changeBackground()
        para.innerText = "Anyway, I know I've talked too much.";
    }
    else if (event.key === ' ' && clicks === 75) {
        changeBackground()
        para.insertAdjacentElement("afterend", link)
        para.innerText = "And I know they aren't the best picture someone can take, or the most aesthetic ones. But they're mine. And they're good enough. Hope you like them.";
    }
}, false)


