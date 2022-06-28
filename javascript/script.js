const tl = gsap.timeline();

tl.from(".letter",{duration:1,opacity:0,stagger:0.25,});
tl.to(".letter",{duration:0.5,y:"20%",opacity:0,stagger});

// tl.to(".material-icons",{opacity:1,})

// tl.to(".material-icons",{duration:.6,y:5,ease:"circ.in",repeat:-1,yoyo:true})


// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } 
//       else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }