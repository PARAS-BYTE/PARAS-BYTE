function hel() {
    window.location.href = "https://www.naai.in/contact-us"
}

let hel1 = () => {
    window.location.href = "https://www.naai.in/form";
}

let hel2 = () => {
    window.location.href = "https://naai.page.link/jTpt";
}

let hel3 = () => {
    window.location.href = "https://www.naai.in/salon-onboarding";
}
let zo = () =>{
    window.location.href = "https://www.naai.in/form";
}


// loaction code


const track = document.querySelector(".carousel-track");
const logos = document.querySelectorAll(".logo");
const totalLogos = logos.length;
let currentIndex = 0;

function moveLogos() {
    // Remove the first image and append it to the end to create a continuous effect
    track.appendChild(track.firstElementChild);
    track.style.transition = 'none'; // Remove transition temporarily for seamless movement

    // Recalculate the position of the carousel after the image is moved
    track.style.transform = `translateX(0%)`;
    
    // Reset the transition for next animation
    setTimeout(() => {
        track.style.transition = 'transform 1s ease-in-out';
    }, 50); // Ensure the transition is reset after the image has been moved

    // Increment the index to track the number of images visible
    currentIndex++;
    if (currentIndex >= totalLogos) {
        currentIndex = 0;
    }
}

// Slide logos every 2 seconds
setInterval(moveLogos, 3000);

let sos = ()=>{
    window.location.href="https://www.naai.in/privacy-policy";
}
