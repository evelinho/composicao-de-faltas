/*Definindo métodos*/
const scroll = function() {
    const header = document.querySelector('header');

    document.addEventListener('scroll', ()=> {
        if (scrollY > 50) {
            header.classList.add('onScroll');
        } else {
            header.classList.remove('onScroll');
        }
    });
}

const slideMove = function() {
    const home = document.getElementById('home');
    const btns = document.querySelectorAll('#home .btn-slider .btn');
    let currentIndex = 0;
    let slideInterval;

    const changeSlide = (index) => {
        btns.forEach(b => b.classList.remove('active'));
        btns[index].classList.add('active');
        home.style.backgroundImage = `url('./storage/img/background-desktop-${index}.jpg')`;
    };
    const startAutoSlide = () => {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % btns.length;
            changeSlide(currentIndex);
        }, 4000);
    };
    btns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            clearInterval(slideInterval);
            currentIndex = index;
            changeSlide(currentIndex);
        });
    });

    startAutoSlide();
};

const catalogoSlider = function() {
    const slider = document.querySelector('#catalogo .list-slide-movies');
    const slides = document.querySelectorAll('.slider');
    const prevSlide = document.getElementById('prev-slide');
    const nextSlide = document.getElementById('next-slide');
    let slideCurrent = 0;
    let width = slides[0].offsetWidth;

    const runSliderCatalogo = function(next) {
        let slideNumber = 2;
        let gap = 64;

        if (next && slideCurrent < ((slides.length / slideNumber))) {
            slideCurrent += 2;
        }
        if (!next && slideCurrent >= 2) {
            slideCurrent = slideCurrent - 2;
            console.log(`${slideCurrent} = ${slideCurrent} - ${2}`);
        }
        console.log(slideCurrent);
        slider.style.cssText = `transform: translateX(-${((width + gap)*slideCurrent)}px);`;
    }

    prevSlide.addEventListener('click', function() {
        runSliderCatalogo(false);
    })
    nextSlide.addEventListener('click', function() {
        runSliderCatalogo(true);
    })
}
const faq = function() {
    
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                question.classList.remove('active');
                answer.classList.remove('open');
            } else {
                document.querySelectorAll('.faq-answer').forEach(answer => {
                    answer.style.maxHeight = null;
                    answer.classList.remove('open');
                });
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });

                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.classList.add('active');
                answer.classList.add('open');
            }
        });
    });
}


/*Executando*/
scroll();
slideMove();
catalogoSlider();
faq();