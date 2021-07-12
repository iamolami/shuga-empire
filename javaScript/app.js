//Move Box & dots with prev and nextbutton
var slideIndex = 1;
function showSlides(n) {
    const slides = document.getElementsByClassName("shopping_box");
    const dots = document.getElementsByClassName("shopping_dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 500 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.header_wrapper-01, .header_wrapper-02,
            .features__box, .shopping_container,
            .collection_box, .U-primary_box,
            .shop_box, .testimony_box,
            .footer_box, .testimony_btn`,
                    {
    interval: 200
})

// =============== Toggle Show Menu =====================
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const navMenu = document.getElementById(navId);

    if(toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navMenu.classList.toggle('show_menu')
        })
    }
}
showMenu('nav_toggle', 'nav_bar')

/*=========== Remove Show menu ========== */
const nav_link = document.querySelectorAll('.menu_link')
function linkAction () {
    const nav = document.getElementById('nav_bar')
    nav.classList.remove('show_menu')
}

nav_link.forEach(n => n.addEventListener('click', linkAction));


//Move Box & Dots Automatically
/*(
    function() {
    //Creating a store to keep the elememts and create an initilization
        class slideIndex {
            constructor(element) {
                this.el = document.querySelector(element);
                //initilization
                this.init();
            }
            //Creating SlideShow Prototyp
            init() {
                //Storing the parent div "shop_wraapper"
                this.wrapper = this.el.getElementsByClassName('shopWrapper');
                this.slides = this.el.getElementsByClassName('shopImg');
                this.next = this.el.querySelector('.nextSlide');
                this.previous = this.el.querySelector('.previousSlide');

                this.index = 0;
                this.total = this.slides.length;
                this.timer = null;

                //Create a function to init the action and stop when mouseover & start when mouseout
                this.action();
                this.stopStart();
            }
            //Creating SlideShow Prototyp
            //Determining the movement of box or img
            _slideTo(slide) {
                const currentslide = this.slides[slide];
                currentslide.style.display = 'block';
                var i;

                for (i = 0; i < this.slides.length; i++) {
                    const slide = this.slides[i];
                    if (slide !== currentslide) {
                        slide.style.display = 'none';
                    }
                }
            }
            //Creating SlideShow Prototyp
            //Setting the motion of the image or Box (setTimeOut)
            action() {
                const self = this;
                self.timer = setInterval(function () {
                    self.index++;
                    if (self.index == self.length) {
                        self.index = 0;
                    }

                    self._slideTo(self.index);
                }, 3000);
            }
            //Creating SlideShow Prototyp
            //stop when mouseover & start when mouseout
            stopStart() {
                const self = this;
                self.el.addEventListener('mouseover', function () {
                    clearInterval(self.timer);
                    self.timer = null;
                }, false);

                self.el.addEventListener('mouseout', function () {
                    self.action();
                }, false);
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
        });
    })();*/

