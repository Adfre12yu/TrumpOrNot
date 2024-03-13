import data from "./quotes.js";
let realBtn = document.getElementById("real");
let aiBtn = document.getElementById("ai");
let main = document.getElementById("main");
let i = 0;
let numCor = 0;
let clickable = true;

function render(tweet) {
    if (i != 24) {
        main.innerHTML = `
    <div id="tweetbox" class="white">
                    <div id="profile">
                        <img src="images/trump.jpg" alt="#" class="pfp" />
                        <p class="username">Donald J. Trump</p>
                        <p class="tag">@realDonaldTrump</p>
                        <p class="count"> ${i + 1}/24</p>
                    </div>
                    <p id="tweet">
                        ${Object.keys(data)[i]}
                    </p>
                    <div id="interactions">
                        <p id="likes">${Math.round(
                            Math.random() * 5000
                        )} <i class="fa-regular fa-heart"></i></p>
                        <p id="comments">${Math.round(
                            Math.random() * 500
                        )} <i class="fa-regular fa-comment"></i></p>
                        <p id="retweets">${Math.round(
                            Math.random() * 3500
                        )} <i class="fa-solid fa-retweet"></i></p>
                    </div>
                </div>
    `;
        i++;
        clickable = true;
    } else {
        document.getElementById("mm").innerHTML = `<h2 class="final">Congratulations!</h2>
            <h2 class="final">Your guesses were correct ${Math.round(
                (numCor / 24) * 100
            )}% of the time!</h2>
            <a
            class="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Can you beat my score of ${numCor}/23 tweets? Play at adfre12yu.github.io/TrumpOrNot"
        >
            <i class="fa-brands fa-twitter"></i> Tweet</a
        >
            `;
    }
}

function check(guess) {
    if (guess == data[Object.keys(data)[i - 1]]) {
        numCor++;
        setTimeout(() => {
            document.getElementById("tweetbox").classList.add("green");
        }, 500);
        setTimeout(render, 1500);
    } else {
        setTimeout(() => {
            document.getElementById("tweetbox").classList.add("red");
        }, 500);
        setTimeout(render, 1500);
    }
}

aiBtn.addEventListener("click", () => {
    if (clickable) {
        document.getElementById(
            "tweetbox"
        ).innerHTML += `<img src="images/ai.png" alt="" class="label" />`;
        clickable = false;
        check("ai");
    }
});

realBtn.addEventListener("click", () => {
    if (clickable) {
        document.getElementById(
            "tweetbox"
        ).innerHTML += `<img src="images/real.png" alt="" class="label" />`;
        clickable = false;
        check("real");
    }
});

render();
