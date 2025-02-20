
    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    setInterval(changeText, 3000);


   
/* education section */
const items = document.querySelectorAll('.timeline-item');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        items.forEach(item => {
            observer.observe(item);
        });
/* active menu section */

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    
    // Loop through all sections to find which section is currently in view
    for (let i = len - 1; i >= 0; i--) {
        if (window.scrollY + 97 >= section[i].offsetTop) {
            menuLi.forEach(sec => sec.classList.remove("active"));
            menuLi[i].classList.add("active");
            break;
        }
    }
}

activeMenu();
window.addEventListener("scroll", activeMenu);

/* /* sticky nav bar section */

const header=document.querySelectorAll("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
}) 

/* /* toggle icon nav bar section */

/* let menuIcons = document.querySelectorAll("menu-icon");
let navLists = document.querySelectorAll(".navlist");

menuIcons.forEach(menuIcon => {
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navLists.forEach(navList => {
            navList.classList.toggle("open");
        });
    });
});
 */
/*  parallax section */


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-items");
            } else {
                entry.target.classList.remove("show-items");
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in the viewport
    });

    const scrollScale = document.querySelectorAll(".scroll-scale");
    scrollScale.forEach((el) => observer.observe(el));

    const scrollBottom = document.querySelectorAll(".scroll-bottom");
    scrollBottom.forEach((el) => observer.observe(el));

    const scrollTop = document.querySelectorAll(".scroll-top");
    scrollTop.forEach((el) => observer.observe(el));
});


    

    
    


    