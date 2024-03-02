const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


//fecha o menu quando você clica em um item de menu
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

//voltar ao topo da pagina
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//carrosel
const initslider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const materialSymbolsRounded = document.querySelectorAll(".slider-wrapper .material-symbols-rounded");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth; 

    
        materialSymbolsRounded.forEach(button => {
        button.addEventListener("click", () => {
         const direction = button.id === "prev-slide" ? -1 : 1;
         const scrollAmount = imageList.clientWidth * direction;
         imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    
        const handleMaterialSymbolsRounded = () => {
        materialSymbolsRounded[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        materialSymbolsRounded[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
        }
        
     const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
     }

     imageList.addEventListener("scroll", () => {
        handleMaterialSymbolsRounded();
        updateScrollThumbPosition();
    });
}

window.addEventListener("load", initslider);


//animate scroll terateupas

const intersectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
})
const elements = document.querySelectorAll(".animate")

elements.forEach(el => intersectObserver.observe(el))
