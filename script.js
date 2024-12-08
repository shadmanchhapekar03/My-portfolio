let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(
                links =>{
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
                }
            )
        }
    })
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let dataApi = [
    {
        img: "/Images/Electric Vehicle.png",
        name: "Dashboard",
        desc: "Electric Vehicle",
        links: "/Projects/dashboard.html",
        tar: "_blank"
    },
    {
        img: "/Images/port 2.jpg",
        name: "Web Design",
        desc: "E-commerce Website Design",
        links: "https://www.example.com/",
        tar: "_blank"
    },
    {
        img: "/Images/port 5.jpg",
        name: "Wood UI",
        desc: "E-commerce Wood UI Design",
        links: "https://www.example.com/",
        tar: "_blank"
    },
];

// Selecting the portfolio content container
let portfolioContent = document.querySelector(".portfolio-content");

// Loop through the dataApi and create portfolio items
dataApi.forEach((data) => {
    // Create the outer row div
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    // Create the image element
    let img = document.createElement("img");
    img.src = data.img;
    img.alt = data.name;

    // Create the main-row div
    let mainRowDiv = document.createElement("div");
    mainRowDiv.classList.add("main-row");

    // Create the row-text div and add the title
    let rowTextDiv = document.createElement("div");
    rowTextDiv.classList.add("row-text");
    let title = document.createElement("h5");
    title.innerHTML = data.name;
    rowTextDiv.appendChild(title);

    // Create the row-icon div and add the GitHub icon
    let rowIconDiv = document.createElement("div");
    rowIconDiv.classList.add("row-icon");
    let icon = document.createElement("i");
    icon.classList.add("bx", "bxl-github");
    rowIconDiv.appendChild(icon);

    // Append row-text and row-icon to the main-row
    mainRowDiv.appendChild(rowTextDiv);
    mainRowDiv.appendChild(rowIconDiv);

    // Create the description h4 element
    let desc = document.createElement("h4");
    desc.innerHTML = data.desc;

    // Create the link h5 element with the "Visit Now" link
    let linkWrapper = document.createElement("h5");
    let link = document.createElement("a");
    link.href = data.links;
    link.target = data.tar;
    link.classList.add("link");
    link.innerHTML = "View Project ➔";
    linkWrapper.appendChild(link);

    // Append all elements to the row div
    rowDiv.appendChild(img);
    rowDiv.appendChild(mainRowDiv);
    rowDiv.appendChild(desc);
    rowDiv.appendChild(linkWrapper);

    // Append the row div to the portfolio content container
    portfolioContent.appendChild(rowDiv);
});

function showCertificate() {
    document.getElementById('certificateOverlay').style.display = 'flex';
}

function closeCertificate() {
    document.getElementById('certificateOverlay').style.display = 'none';
}