const tl = gsap.timeline();

tl.from(".letter",{duration:1,opacity:0,stagger:0.25,});
tl.to(".letter",{duration:0.5,y:"20%",opacity:0,stagger});

tl.to(".material-icons",{opacity:1,})

// tl.to(".material-icons",{duration:.6,y:5,ease:"circ.in",repeat:-1,yoyo:true})