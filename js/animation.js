let intro = document.querySelector('.intro');
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener('DOMContentLoaded', ()=>{ //will trigger following events once the DOM content is loaded

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{//selects each index number
            setTimeout(()=>{
                span.classList.add('active');//adds the active class to utilize the set css
            }, (idx + 1) * 400)//adds delay to each element
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active'); //removes the active class
                    span.classList.add('fade');//adds the fade class
                }, (idx + 1) * 50)
            })
        },2000);// sets the time (2 seconds)

        setTimeout(()=>{
            intro.style.top = '-100vh';//unveils the site under the logo
        }, 2300)
    })
})