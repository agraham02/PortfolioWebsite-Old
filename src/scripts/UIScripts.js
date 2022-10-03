const nav = document.getElementById("mainNav");
const main = document.getElementById("main");
const header = document.getElementById("header");
const projects = document.getElementById("projects");
const aboutMe = document.getElementById("about-me");
const skills = document.getElementById("skills");
const contactMe = document.getElementById("contact-me");
const mobileNavOverlay = document.getElementById("mobileOverlay");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const skillsHeaders = document.getElementsByClassName("skills-header");
let navIsOpen = false;

for (let i = 0; i < skillsHeaders.length; i++) {
    const skillHeader = skillsHeaders[i];
    skillHeader.addEventListener("click", () => {
        let content = skillHeader.nextElementSibling;
        // for (let j = 0; j < skillsHeaders.length; j++) {
        //     skillsHeaders[j].classList.remove("active");
        //     let c = skillsHeaders[j].nextElementSibling;
        //     if (c !== content) {
        //         c.style.display = "none";
        //         c.style.maxHeight = null;
        //     }
        // }
        skillHeader.classList.toggle("active");
        // console.log(content.style.display);
        if (content.style.display === "block") {
            // console.log("hey");
            content.style.maxHeight = null;
            content.style.display = "none";
        } else {
            content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

const toggleNav = () => {
    if (main.scrollTop > header.scrollHeight / 2) {
        nav.style.backgroundColor = "white";
        nav.style.borderBottom = "solid black";
        [...hamburgerIcon.children].forEach(
            (b) => (b.style.backgroundColor = "black")
        );
        nav.children[0].style.color = "black";
        nav.children[0].style.border = "solid black";
        [...nav.children[1].children].forEach((e) => (e.style.color = "black"));
    } else {
        nav.style.backgroundColor = "rgba(0,0,0,0)";
        [...hamburgerIcon.children].forEach(
            (b) => (b.style.backgroundColor = "white")
        );
        nav.style.borderBottom = "none";
        nav.children[0].style.color = "white";
        nav.children[0].style.border = "solid white";
        [...nav.children[1].children].forEach((e) => (e.style.color = "white"));
    }
    // console.log(main.scrollTop);
};

const changeHeaderBkGd = () => {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    hour += minutes / 60;

    if ((hour >= 5.5 && hour <= 8.5) || (hour >= 16.5 && hour <= 19.5)) {
        //sunset
        header.style.backgroundImage = "url('./src/media/VI_Evening.jpg')";
    } else if (hour >= 8.5 && hour <= 16.5) {
        //day
        header.style.backgroundImage = "url('./src/media/VI_Day.jpg')";
    } else {
        //night
        header.style.backgroundImage = "url('./src/media/VI_Night.jpg')";
    }
};

const toggleHamburgerIcon = () => {
    if (navIsOpen) {
        hamburgerIcon.classList.add("change");
    } else {
        hamburgerIcon.classList.remove("change");
    }
};

const openNav = () => {
    mobileNavOverlay.style.width = "100%";
    navIsOpen = true;
    toggleHamburgerIcon();
};

const closeNav = () => {
    mobileNavOverlay.style.width = "0%";
    navIsOpen = false;
    toggleHamburgerIcon();
};

const toggleMobileNav = () => {
    if (navIsOpen) {
        closeNav();
    } else {
        openNav();
    }
};

const toTop = () => {
    main.scrollTo(0, 0);
};

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
