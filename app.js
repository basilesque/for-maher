changeBackground();

const para = document.getElementById("p");
const link = document.createElement("button");
link.innerText = "The Album";
link.addEventListener("click", function () {
    window.open('album.html', '_blank');
    return false;
});
let clicks = 0;
function backgroundChange(color1, color2) {
    return `linear-gradient(to right, ${color1}, ${color2})`;
};
function randomRGBA() {
    let redValue = (Math.floor(Math.random() * 256));
    let greenValue = (Math.floor(Math.random() * 256));
    let blueValue = (Math.floor(Math.random() * 256));
    return `rgba(${redValue}, ${greenValue}, ${blueValue}, ${0.50})`;
};
function gradient() {
    return `linear-gradient(to right, ${randomRGBA()}, ${randomRGBA()})`;
};
function changeBackground() {
    return document.body.style.background = gradient();
};
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        clicks++;
        switch (clicks) {
            case 1:
                changeBackground();
                para.innerText = "First of all, hope you and the pets are doing well.";
                break;
            case 2:
                changeBackground();
                para.innerText = "I was planning to send you a happy birthday message,";
                break;
            case 3:
                changeBackground();
                para.innerText = "But I thought…";
                break;
            case 4:
                changeBackground();
                para.innerText = "Why not make it more interactive,";
                break;
            case 5:
                changeBackground();
                para.innerText = "more thought out,";
                break;
            case 6:
                changeBackground();
                para.innerText = "more sweet,";
                break;
            case 7:
                changeBackground();
                para.innerText = "and more personal?";
                break;
            case 8:
                changeBackground();
                para.innerText = "That’s why I coded this lil’ website for you! :)";
                break;
            case 9:
                changeBackground()
                para.innerText = "(Hope I am not fucking up your sleep right now though lol)";
                break;
            case 10:
                changeBackground()
                para.innerText = "I wanna start by saying how awesome of a person you are.";
                break;
            case 11:
                changeBackground()
                para.innerText = "It’s literally crazy.";
                break;
            case 12:
                changeBackground()
                para.innerText = "You are understanding.";
                break;
            case 13:
                changeBackground()
                para.innerText = "You are smart.";
                break;
            case 14:
                changeBackground()
                para.innerText = "You try to improve yourself and your life.";
                break;
            case 15:
                changeBackground()
                para.innerText = "I’ve never seen you give into anger or lash out.";
                break;
            case 16:
                changeBackground()
                para.innerText = "You are very funny.";
                break;
            case 17:
                changeBackground()
                para.innerText = "You are kind.";
                break;
            case 18:
                changeBackground()
                para.innerText = "And many more.";
                break;
            case 19:
                changeBackground()
                para.innerText = "You are just so awesome all around.";
                break;
            case 20:
                changeBackground()
                para.innerText = "Thank you for letting me know you this well.";
                break;
            case 21:
                changeBackground()
                para.innerText = "And now, you’re 20!";
                break;
            case 22:
                changeBackground()
                para.innerText = "No longer a teenager.";
                break;
            case 23:
                changeBackground()
                para.innerText = "If you’d ask me, I would tell you being 19 and being 20 has no big differences that I could tell yet.";
                break;
            case 24:
                changeBackground()
                para.innerText = "You are just the old you with a different number.";
                break;
            case 25:
                changeBackground()
                para.innerText = "Thinking about this now, I guess this applies to any other age too lol";
                break;
            case 26:
                changeBackground()
                para.innerText = "But you should seriously let me know if you notice any changes.";
                break;
            case 27:
                changeBackground()
                para.innerText = "For scientific purposes of course.";
                break;
            case 28:
                changeBackground()
                para.innerText = "With all that out of the way,,,";
                break;
            case 29:
                document.body.style.background = backgroundChange("#aa282e80", "#e016ce80")
                document.getElementById("p").style.fontSize = "3em"
                para.innerText = "HAPPY BIRTHDAY MAHER!! <3";
                break;
            case 30:
                changeBackground()
                document.getElementById("p").style.fontSize = "2em"
                para.innerText = "I hope this new age brings you personal growth, dreams that come true, happiness and health.";
                break;
            case 31:
                para.innerText = "Only wish you the best :)";
                break;
            case 32:
                changeBackground()
                para.innerText = "Well, that’s about it for the birthday celebrations and good wishes.";
                break;
            case 33:
                changeBackground()
                para.innerText = "Please always know that I think and care about you no matter what happens Maher.";
                break;
            case 34:
                changeBackground()
                para.innerText = "I’m here for you. And I will always be.";
                break;
            case 35:
                changeBackground()
                para.innerText = "Hope to talk to you soon.";
                break;
            case 36:
                changeBackground()
                para.innerText = "- Reyhan.";
                break;
            case 37:
                changeBackground()
                para.innerText = ".";
                break;
            case 38:
                changeBackground()
                para.innerText = "The birthday message is over sir, stop pressing space.";
                break;
            case 39:
                changeBackground()
                para.innerText = "Uhhh, hello??? I said stop pressing space?? Are these texts not being shown or something?!!";
                break;
            case 40:
                changeBackground()
                para.innerText = "Seriously. Go away.";
                break;
            case 41:
                changeBackground()
                para.innerText = "Why would you keep pressing space, when I said stop!";
                break;
            case 42:
                changeBackground()
                para.innerText = "You don't give up, do you?";
                break;
            case 43:
                changeBackground()
                para.innerText = "Oh, I see what’s happening here now.";
                break;
            case 44:
                changeBackground()
                para.innerText = "You’re expecting an easter egg or something?";
                break;
            case 45:
                changeBackground()
                para.innerText = "As if I would do that…";
                break;
            case 46:
                changeBackground()
                para.innerText = "As if this is a video game…";
                break;
            case 47:
                changeBackground()
                para.innerText = "As if I would take the time to write the lines and the code for that haha…";
                break;
            case 48:
                changeBackground()
                para.innerText = "Imagine…";
                break;
            case 49:
                changeBackground()
                para.innerText = "Well, as you see, that proves that it doesn’t exist.";
                break;
            case 50:
                changeBackground()
                para.innerText = "So, on your way now!";
                break;
            case 51:
                changeBackground()
                para.innerText = "Oh, you're stubborn. Alright, let’s try other methods.";
                break;
            case 52:
                para.innerText = "";
                document.body.style.backgroundImage = `url("pickle1.webp")`
                break;
            case 53:
                changeBackground()
                para.innerText = "No? You’re still here?";
                break;
            case 54:
                changeBackground()
                para.innerText = "I for sure thought that would work. Let’s try something else.";
                break;
            case 55:
                changeBackground()
                para.innerText = "What about this?";
                break;
            case 56:
                para.innerText = "";
                document.body.style.backgroundImage = `url("pickle2.jpg")`
                break;
            case 57:
                changeBackground()
                para.innerText = "You like it? It had mixed vegetables, yummm 😋";
                break;
            case 58:
                changeBackground()
                para.innerText = "Oooo, look, they even have watermelon ones!!";
                break;
            case 59:
                para.innerText = "";
                document.body.style.backgroundImage = `url("pickle3.webp")`
                break;
            case 60:
                changeBackground()
                para.innerText = "You're still here? *sigh* Okay, okay… Fine… I will let you see the secrets.";
                break;
            case 61:
                changeBackground()
                para.innerText = "I know it's not the most thought-out or the most expensive birthday present ever.";
                break;
            case 62:
                changeBackground()
                para.innerText = "Which, doesn't have to be.";
                break;
            case 63:
                changeBackground()
                para.innerText = "But I wanted to share you the album which I've been keeping the photos of the sky that I take once in a while.";
                break;
            case 64:
                changeBackground()
                para.innerText = "I will give you the link in a second, but before that, I want you to know why is this even a present.";
                break;
            case 65:
                changeBackground()
                para.innerText = "Whenever I look at the sky";
                break;
            case 66:
                changeBackground()
                para.innerText = "I think of you";
                break;
            case 67:
                document.body.style.backgroundImage = `url("sky.jpg")`
                para.innerText = "I think about how we are under the same sky,";
                break;
            case 68:
                document.body.style.backgroundImage = `url("sun.jpg")`
                para.innerText = "under the same sun,";
                break;
            case 69:
                document.body.style.backgroundImage = `url("moon.jpg")`
                document.getElementById("p").style.color = "white"
                para.innerText = "under the same moon.";
                break;
            case 70:
                changeBackground()
                document.getElementById("p").style.color = "rgba(50, 25, 15, 0.864)"
                para.innerText = "Makes me happy.";
                break;
            case 71:
                document.body.style.backgroundImage = `url("colors.jpg")`
                document.getElementById("p").style.color = "white"
                para.innerText = "Not only that, but I look at the colors and get amazed by how nature can be so beatiful.";
                break;
            case 72:
                changeBackground()
                document.getElementById("p").style.color = "rgba(50, 25, 15, 0.864)"
                para.innerText = "And how simple life can be.";
                break;
            case 73:
                changeBackground()
                para.innerText = "It's a cozy feeling.";
                break;
            case 74:
                changeBackground()
                para.innerText = "Anyway, I know I've talked too much.";
                break;
            case 75:
                changeBackground()
                para.insertAdjacentElement("afterend", link)
                para.innerText = "And I know they aren't the best picture someone can take, or the most aesthetic ones. But they're mine. And they're good enough. Hope you like them.";
                break;
        }
    }
}, false);