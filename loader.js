document.addEventListener("DOMContentLoaded", function() 
{
    const counter3 = document.querySelector(".counter-3");

    for(let i = 0; i < 2; i++) {
        for (let j = 0; j <10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = 
        (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut" ,
        });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
    top: "-150px",
    stagger: {
        amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut",
});

gsap.from(".loader-1", {
    width: 0,
    duration: 6,
    ease: "power2.in0ut",
});

gsap.from(".loader-2", {
    width: 0,
    delay: 1.9,
    duration: 2,
    ease: "power2.in0ut",
});

gsap.to(".loader", {
    background: 'none',
    delay: 6,
    duration:0.1,
});

    gsap.to(".name", {
        opacity: 1,
        duration: 1,
        delay:6,
        left: "50%",
        y: -80,
        ease: "power4.inOut",
        stagger: { amount: 0.1, }
});

gsap.to(".loader-1", {
    rotation: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
});

gsap.to(".loader-2", {
    x: -75,
    y: 75,
    duration:0.5,
},
"<"
);

gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay:7,
    ease: "power2.inOut"
});

gsap.to(".loader", {
    rotation: 45,
    y: 500,
    x: 2000,
    duration:1,
    delay:7,
    ease: "power2.inOut",
    onComplete: showName,
});

gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut"
});

    function showName() {
        gsap.to(".name", {
            // opacity: 0,
            duration: 1,
            left:"50%",
            y:-80,
            paddingTop:'300px',
            ease: "power4.inOut",
            stagger: {amount: 0.1,}
        });
};

gsap.fromTo(".container", 
  {
    // Starting values
    opacity: 0,
    x: -100
  },
  {
    // Ending values and additional properties
    opacity: 1,
    x: 0,
    duration: 1, // Animation duration in seconds
    ease: "power2.out" // Easing function
  }
);