const nav = document.getElementById("nav");
const main = document.getElementById("main");
const header = document.getElementById("header");
const projects = document.getElementById("projects");
const aboutMe = document.getElementById("about-me");
const skills = document.getElementById("skills");
const contactMe = document.getElementById("contact-me");

const toggleNav = () => {
    if (main.scrollTop > header.scrollHeight / 2) {
        nav.style.backgroundColor = "#333";
    }
    else {
        nav.style.backgroundColor = "rgba(0, 0, 0, .2)";
    }
    console.log(main.scrollTop);
}

const changeHeaderBkGd = () => {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    hour += (minutes / 60)

    if ((hour >= 5.5 && hour <= 8.5) || (hour >= 16.5 && hour <= 19.5)) {
        //sunset
        header.style.backgroundImage = "url('./src/media/VI_Evening.jpg')";
    }
    else if (hour >= 8.5 && hour <= 16.5) {
        //day
        header.style.backgroundImage = "url('./src/media/VI_Day.jpg')";
    }
    else {
        //night
        header.style.backgroundImage = "url('./src/media/VI_Night.jpg')";
    }
}

const toTop = () => {
    main.scrollTo(0, 0);
}

main.addEventListener("scroll", toggleNav);
changeHeaderBkGd();

