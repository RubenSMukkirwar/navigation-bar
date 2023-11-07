const newSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) =>{
           if(link.style.animation){
            link.style.animation = '';
           }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 1.5}s`;
            console.log(link.style.animation);
            console.log(index/5 + 1.5);
           }
            
        });

        burger.classList.toggle('toggle');
    });
    
}

newSlide();