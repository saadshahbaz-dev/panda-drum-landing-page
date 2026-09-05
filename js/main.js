(function () {
    const scroller = document.getElementById('compareScroller');
    const thumb = document.getElementById('scrollThumb');

    if (!scroller || !thumb) return;

    function updateThumb() {
        const { scrollLeft, scrollWidth, clientWidth } = scroller;
        if (scrollWidth <= clientWidth) {
        thumb.style.width = '100%';
        thumb.style.left = '0%';
        return;
        }
        const thumbWidthPercent = (clientWidth / scrollWidth) * 100;
        const maxThumbLeftPercent = 100 - thumbWidthPercent;
        const scrollPercent = scrollLeft / (scrollWidth - clientWidth);

        thumb.style.width = thumbWidthPercent + '%';
        thumb.style.left = (scrollPercent * maxThumbLeftPercent) + '%';
    }

    scroller.addEventListener('scroll', updateThumb, { passive: true });
    window.addEventListener('resize', updateThumb);
    updateThumb();
})();

/* =========================================================
   Feature Sections — data-driven render
   Each object below is one numbered "feature" block on the
   page. To add/edit/reorder a section, only touch this array —
   the markup, classes and left/right alternation are generated
   automatically so the HTML/CSS never has to be hand-duplicated.
   ========================================================= */

const FEATURES = [
    {
        number: 1,
        title: "Water physically reacts to sound",
        descriptionHTML: `Play a note next to a bowl of water and <span>watch the surface move into patterns.</span> This isn't a trick - it's called <span>cymatics</span>, and you can film it in your own kitchen.`,
        video: "GIF1.mp4",
        icon: "drop.png",
        iconWidth: 72,
        iconHeight: 97,
        iconAlt: "Water drop",
        metaText: "Science you can test at home",
    },

    {
        number: 2,
        title: "Your child is about 70% water",
        descriptionHTML: `So sound doesn't just reach their ears. It <span>reaches all of them.</span> Which is why the right frequency has a <span>calming effect</span> you can see - and the wrong noise does the opposite.`,
        video: "GIF2.mp4",
        icon: "frequency.png",
        iconWidth: 91,
        iconHeight: 108,
        iconAlt: "Sound frequency",
        metaText: "Why the right frequency matters",
    },

    {
        number: 3,
        title: "Meltdowns are an input problem",
        descriptionHTML: `<span>Beeping toys, cartoons, tablets, notifications</span> - every hour pours stimulation in, and nothing takes it out. By dinner the tank is full. That's not a naughty kid. <span>That's a full kid.</span>`,
        video: "GIF3.mp4",
        icon: "battery.png",
        iconWidth: 15,
        iconHeight: 26,
        iconAlt: "Battery",
        metaText: `Stop the daily "tank" overflow`,
    },

    {
        number: 4,
        title: "Calming, easy-to-play 432 Hz frequencies help with regulation",
        descriptionHTML: `Your child taps out <span>sweet, calming melodies</span> on their own, and following those notes gives their busy mind one gentle thing to hold onto. <span>The music settles them -</span> and the fact that they're making it is what keeps them there.`,
        video: "GIF4.mp4",
        icon: "smile-face.png",
        iconWidth: 22,
        iconHeight: 22,
        iconAlt: "Smiling face",
        metaText: "Giving their mind a gentle anchor",
    },

    {
        number: 5,
        title: "The Panda Drum is tuned by hand to exactly 432 Hz",
        descriptionHTML: `<span>Handcrafted steel,</span> every note tuned to the frequency believed to sync with the <span>natural vibration of the Earth -</span> the same one you hear in <span>birdsong</span> and <span>ocean waves.</span> It's the one thing in your child's room that subtracts noise instead of adding it.`,
        video: "GIF5.mp4",
        icon: "hand.png",
        iconWidth: 20,
        iconHeight: 28,
        iconAlt: "Hand",
        metaText: "Subtracting noise, adding peace",
    },

    {
        number: 6,
        title: "There's no wrong note",
        descriptionHTML: `Every note <span>sounds beautiful</span> with every other note. The notes are numbered, the songbook shows the way - kids play real songs on day one. <span>No lessons, no talent, no frustration.</span>`,
        video: "GIF6.mp4",
        icon: "music.png",
        iconWidth: 18,
        iconHeight: 18,
        iconAlt: "Music notes",
        metaText: "Play real songs on day one",
    },

    {
        number: 7,
        title: "They actually come back to it",
        descriptionHTML: `The part parents don't expect: <span>it doesn't</span> get dropped in a week like <span>every other toy.</span> Kids <span>take it to their room,</span> out to the garden, and reach for it on their own - because to them it isn't a <span>"calming tool."</span> It's theirs.`,
        video: "GIF7.mp4",
        icon: "puzzle.png",
        iconWidth: 22,
        iconHeight: 22,
        iconAlt: "Puzzle piece",
        metaText: "A toy they won't drop in a week",
    },

    {
        number: 8,
        title: "You don't have to take anyone's word for it",
        descriptionHTML: `<span>Try it for 30 days</span> in your own house. If the after-school hour doesn't feel different, <span>send it back.</span>`,
        video: "GIF8.mp4",
        icon: "calender-clock.png",
        iconWidth: 22,
        iconHeight: 22,
        iconAlt: "Calendar and clock",
        metaText: "Try it for 30 days, risk-free",
    },

    {
        number: 9,
        title: "You're covered for a 30-day trial",
        descriptionHTML: `Every drum comes with a <span>30-day happiness guarantee</span> - love it or your <span>money back.</span> The only risk is another month of full-tank dinnertimes.`,
        video: "GIF9.mp4",
        icon: "sheild-tick.png",
        iconWidth: 20,
        iconHeight: 23,
        iconAlt: "Shield with check mark",
        metaText: "Love it or your money back",
    },
];

/* Look features up by number instead of array position, since the
   <section> shells for 1-5 and 6-9 live in two separate places in
   the HTML (see index.html) rather than one block. */
const FEATURES_BY_NUMBER = Object.fromEntries(
    FEATURES.map((feature) => [feature.number, feature])
);

function featureInnerHTML({ number, title, descriptionHTML, video, icon, iconWidth, iconHeight, iconAlt, metaText }) {
    const isReverse = number % 2 === 0;
    const featureClass = isReverse ? "feature feature--reverse" : "feature";
    const paddingClass = isReverse ? "feature-padding-right" : "feature-padding-left";

    return `
        <div class="container">
            <div class="${featureClass}">

                <div class="feature-media">
                    <video autoplay muted loop playsinline preload="metadata">
                        <source src="./assets/videos/${video}" type="video/mp4">
                    </video>
                </div>

                <div class="feature-content ${paddingClass}">

                    <div class="feature-heading">
                        <span class="feature-number">${number}</span>
                        <h2 class="feature-title">${title}</h2>
                    </div>

                    <p class="feature-description">${descriptionHTML}</p>

                    <div class="feature-meta">
                        <div class="feature-meta-icon">
                            <img src="./assets/images/${icon}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
                        </div>
                        <span>${metaText}</span>
                    </div>
                </div>

            </div>
        </div>`;
}

/* Fills in every already-present <section class="feature-section"
   data-feature="N"> shell, wherever it happens to sit in the page.
   The shell keeps its own position in the DOM (so it doesn't matter
   that 1-5 and 6-9 are in different places) - this only sets what's
   inside it, and picks odd/even styling from the number itself. */
(function renderAllFeatures() {
    const shells = document.querySelectorAll(".feature-section[data-feature]");
    shells.forEach((shell) => {
        const number = Number(shell.dataset.feature);
        const data = FEATURES_BY_NUMBER[number];
        if (!data) return;
        shell.innerHTML = featureInnerHTML(data);
    });
})();