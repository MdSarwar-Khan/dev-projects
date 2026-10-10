const state = {
    trialStarted: false,
    aboutExpanded: false,
    giftRedeemed: false,
    visitedRoutes: new Set(),
};

const ABOUT_SHORT =
    "With over 100,000 movies and TV shows to choose from, there\u2019s always something great to watch on myTunes.";

const ABOUT_FULL =
    "With over 100,000 movies and TV shows to choose from, there\u2019s always something great to watch on myTunes " +
    "and if you watch on Orange TV 4K, you\u2019ll be able to enjoy a tremendous selection of your favorite content " +
    "in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you\u2019ve been waiting to see " +
    "\u2014 anytime, anywhere.";

const ROUTES = {

    home: {
        title: "Overview",
        render() {
            return `
                <section class="hero-section route-view" id="hero">
                    <div class="container">
                        <h1>my Tunes</h1>
                        <h3>Your music, movies, and TV shows take center stage.</h3>
                        <p>
                            myTunes is the best way to organize and enjoy the music, movies, and TV shows you
                            already have &mdash; and shop for the ones you want. Enjoy all the entertainment
                            myTunes has to offer on your Mac and PC.
                        </p>
                        <p style="font-size:14px; opacity:0.8;">
                            ${state.trialStarted ? "You're currently on a free trial. Enjoy the music!" : ""}
                        </p>
                    </div>
                </section>
            `;
        },
    },

    music: {
        title: "Music",
        render() {
            return `
                <section class="music-section route-view" id="music">
                    <div class="container">
                        <h2><span><i class="fa-solid fa-music" aria-hidden="true"></i></span> Music</h2>
                        <h4>
                            Stream over 45 million songs, ad-free. Or download albums and tracks to listen to
                            offline. All the music in your personal myTunes library &mdash; no matter where it
                            came from &mdash; lives right alongside the Orange Music catalog. Start your free
                            three-month trial with no commitment, and cancel anytime.
                        </h4>
                        <button class="primary" id="trial-btn" aria-live="polite">
                            ${state.trialStarted ? "Trial Started!" : "Start your Trial Now"}
                        </button>
                        <p>Orange Music is available in myTunes, and for iOS and Android devices.</p>
                        <div class="ipad">
                            <img src="p5_img/ipad-iphone.png" alt="ipad and iphone showing the myTunes music app">
                        </div>
                    </div>
                </section>
            `;
        },
        afterRender() {
            const trialButton = document.getElementById("trial-btn");
            if (!trialButton) return;
            trialButton.addEventListener("click", () => {
                state.trialStarted = true;
                trialButton.textContent = "Trial Started!";
                alert("Welcome to myTunes! Your free trial has started.");
            });
        },
    },

    movies: {
        title: "Movies & TV",
        render() {
            return `
                <section class="about-music route-view" id="movies">
                    <div class="container">
                        <h2>The movie and TV collection you always wished for. Granted.</h2>
                        <p id="about-text">${state.aboutExpanded ? ABOUT_FULL : ABOUT_SHORT}</p>
                        <button class="secondary" id="read-more-btn" aria-live="polite">
                            ${state.aboutExpanded ? "Read Less" : "Read More"}
                        </button>
                        <div class="mac">
                            <img src="p5_img/mac.png" alt="macbook showing the myTunes movies and TV app">
                        </div>
                    </div>
                </section>
            `;
        },
        afterRender() {
            const readMoreButton = document.getElementById("read-more-btn");
            const aboutText = document.getElementById("about-text");
            if (!readMoreButton || !aboutText) return;
            readMoreButton.addEventListener("click", () => {
                state.aboutExpanded = !state.aboutExpanded;
                aboutText.textContent = state.aboutExpanded ? ABOUT_FULL : ABOUT_SHORT;
                readMoreButton.textContent = state.aboutExpanded ? "Read Less" : "Read More";
            });
        },
    },

    video: {
        title: "Video",
        render() {
            return `
                <section class="video-section route-view" id="video">
                    <div class="container">
                        <h2>ENJOY YOUR VIDEOS</h2>
                        <h3>A world of entertainment. Available wherever you are.</h3>
                        <p>
                            Stream, download, and pick up right where you left off across every device you own.
                            Your watchlist, your shows, your pace &mdash; myTunes keeps everything in sync so a
                            new episode is never more than a click away.
                        </p>
                    </div>
                </section>
            `;
        },
    },

    gifts: {
        title: "Gift Cards",
        render() {
            return `
                <section class="gift route-view" id="gifts">
                    <div class="container">
                        <img src="p5_img/gift_card.png" alt="myTunes gift card">
                    </div>
                    <div class="gift-content">
                        <h2>Gift Cards</h2>
                        <p>
                            Give the gift of music, movies, and TV. myTunes gift cards can be redeemed for
                            anything in the store &mdash; songs, albums, movies, or a subscription top-up &mdash;
                            and never expire.
                        </p>
                        <p>Already have an Orange MyTunes Music Gift Card?</p>
                        <hr>
                        <div>
                            <button class="secondary" id="redeem-btn">
                                ${state.giftRedeemed ? "Redeemed \u2713" : "Redeem"}
                            </button>
                        </div>
                    </div>
                </section>
            `;
        },
        afterRender() {
            const redeemButton = document.getElementById("redeem-btn");
            if (!redeemButton) return;
            redeemButton.addEventListener("click", () => {
                const code = prompt("Enter your gift card code:");
                if (code === null) return;
                if (code.trim() === "") {
                    alert("Please enter a gift card code.");
                    return;
                }
                state.giftRedeemed = true;
                redeemButton.textContent = "Redeemed \u2713";
                alert("Gift card redeemed successfully!");
            });
        },
    },

    notfound: {
        title: "Page Not Found",
        render(path) {
            return `
                <section class="not-found route-view">
                    <div>
                        <h1>404</h1>
                        <p>We couldn't find "${path}" in myTunes.</p>
                        <a href="#/home" class="primary" style="display:inline-block; padding:10px 16px; margin-top:10px;">
                            Back to Overview
                        </a>
                    </div>
                </section>
            `;
        },
    },
};
