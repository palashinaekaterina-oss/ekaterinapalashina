// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }
});


// ===============================
// Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");

const reveal = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    section.classList.add("hidden");

    reveal.observe(section);

});


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".numbers h2");

const animateCounter=(counter,target)=>{

let current=0;

const increment=target/120;

const update=()=>{

current+=increment;

if(current<target){

counter.innerText=Math.floor(current)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

counters.forEach(counter=>{

const value=counter.innerText.replace("+","");

if(!isNaN(value)){

animateCounter(counter,Number(value));

}

});

observer.disconnect();

}

});

});

observer.observe(document.querySelector(".numbers"));


// ===============================
// Gallery Lightbox
// ===============================

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img=document.createElement("img");

img.src=image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


// ===============================
// Active Navigation
// ===============================

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section").forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/* Reveal animation */

.hidden{
opacity:0;
transform:translateY(50px);
transition:1s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

/* Active menu */

nav a.active{
color:#C6A15B;
}

/* Lightbox */

#lightbox{
position:fixed;
inset:0;
background:rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
padding:30px;
}

#lightbox.active{
display:flex;
}

#lightbox img{
max-width:90%;
max-height:90%;
border-radius:20px;
}
