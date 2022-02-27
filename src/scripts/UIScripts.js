const nav = document.getElementById("nav");
const main = document.getElementById("main");
const header = document.getElementById("header");
const projects = document.getElementById("projects");
const aboutMe = document.getElementById("about-me");
const skills = document.getElementById("skills");
const contactMe = document.getElementById("contact-me");

const toggleNav = () => {
    if (main.scrollTop > header.scrollHeight / 2) {
        nav.style.backgroundColor = "white";
        nav.style.borderBottom = "solid black";
        nav.children[0].style.color = "black";
        nav.children[0].style.border = "solid black";
        [...nav.children[1].children].forEach(e => e.style.color = "black");
    }
    else {
        nav.style.backgroundColor = "rgba(0,0,0,0)";
        nav.style.borderBottom = "none";
        nav.children[0].style.color = "white";
        nav.children[0].style.border = "solid white";
        [...nav.children[1].children].forEach(e => e.style.color = "white");
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

const timeContainer = document.getElementById("seconds");
const firstDay = "8-30-2018";
const firstDayDate = new Date(firstDay);
const numFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - firstDayDate.getTime()) / 1000);

    timeContainer.innerText = numFormatter.format(diff);
}, 1000);

main.addEventListener("scroll", toggleNav);
changeHeaderBkGd();

