function startJourney() {
    const music = document.getElementById("bgMusic");

    music.play().catch(err => {
        console.error(err);
    });

    document.getElementById("childhood").scrollIntoView({
        behavior: "smooth"
    });
}