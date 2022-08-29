const tl = gsap.timeline();

tl.from(".letter",{duration:1,opacity:0,stagger:0.25,});
tl.to(".letter",{duration:0.5,y:"20%",opacity:0,stagger});

const tlSid=gsap.timeline();
tlSid.from("")


function validEnvoie(){
   let userFirstName=document.getElementById("userFirstName").value;
   let userLastName=document.getElementById("userName").value;
   const retourValid=document.getElementById("retourUser");
   
   retourValid.innerHTML="Bonjour"+userFirstName+" "+userLastName+"Votre demande a bien été envoyé";
//    retourValid.classList.add("")
}