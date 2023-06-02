window.addEventListener("DOMContentLoaded", function (){

    //=======================================
    /*тут модальное окно, оно закрывается только принажатии на крестик, а не на любое место кроме окна, обращалась я не по ID, а, универсальным поиском, по классам (всё равно у меня объектов с такими классами по одному). Ну и назвала переменные я как мне удобнее*/

    const window = document.querySelector(".modal");
	const button = document.querySelector(".modal-open__button");
	const closeButton = document.querySelector(".modal__close");

	button.addEventListener("click", function () {
		window.classList.add("modal-active");
		closeButton.addEventListener("click", closeModal);

		function closeModal() {
			window.classList.remove("modal-active");
			closeButton.removeEventListener("click", closeModal);
		}
	});

    //=======================================
    /*это слайдеры*/

    const img = document.querySelector('.slider__image');
    const dots = document.querySelectorAll('.slider__dot');
    const imgArr = ['./img/slider1.png','./img/slider2.png','./img/slider3.png','./img/slider4.png'];
    let currentIndex = 0;

    function changeIndex(ind) {
        currentIndex = ind;
        slide(currentIndex);
    }
    function nextIndex(direction){
        currentIndex +=direction;
        if(currentIndex >= imgArr.length){
            currentIndex = 0;
        } else if (currentIndex<0) {
            currentIndex = imgArr.length - 1;
        }
        slide(currentIndex);
    }
    function slide(index){
        img.style.display = 'none';
        setTimeout(()=>{
            img.style.display = 'block';
        }, 0);
        img.src = imgArr[index];
        updateDots(index);
    }
    function updateDots(index) {
        for (let dot of dots) {
            dot.classList.remove('activ');
        }
        dots[index].classList.add('activ');
    }
    
    const btnLeft = document.querySelector('.slider__nav-left');
    const btnRight = document.querySelector('.slider__nav-right');
    
    btnLeft.addEventListener('click', ()=>{
        nextIndex(-1)
    });
    btnRight.addEventListener('click', ()=>{
        nextIndex(1)
    });

    //========================================
    /*аккордион так же со своими переменными, а ещё я немного не успеваю с анимацией, но вроде итак красиво появляются, поэтому эту часть я исключила, а ещё у меня могут одновременно быть открыты несколько аккордионов*/

    const accordion = () => {
		const buttons = document.querySelectorAll(".accordion__head");
		buttons.forEach((button) => {
			button.addEventListener("click", function () {
				if (!this.classList.contains("active-acc")) {
					this.classList.add("active-acc", "active-style");
				} else
                    this.classList.remove("active-acc", "active-style");
			});
		});
	};
	accordion();

    //========================================
    /*надеюсь так можно было, в бургер-меню я поменяла довольно многое, по крайней мере теперь работает не через toggle, а просто add/remove, но зато иконка бургер-меню меняется на крестик при открытии*/

    const icon = document.querySelector(".header__icon");
    const close = document.querySelector(".header__close");
	const popup = document.querySelector(".popup");
	const menu = document.querySelector(".menu").cloneNode(1);
	
	icon.addEventListener("click", iconOpen);

	function iconOpen(e) {
		popup.classList.add('open');
        icon.classList.add('active');
        close.classList.add('actived');
		fillPopup();
	}
    
    close.addEventListener("click", iconClose);

	function iconClose(e) {
		popup.classList.remove('open');
        icon.classList.remove('active');
        close.classList.remove('actived');
	}
    
	function fillPopup() {
		popup.appendChild(menu);
	}

    //========================================
    /*тут табы через data-tab-name*/
    'use strict';

    let tab = function(){
        let tabNav = document.querySelectorAll(".Tabs__tab"),
            tabCont = document.querySelectorAll(".Tabs__block"),
            tabName;

        tabNav.forEach(item =>{
            item.addEventListener('click', selectTab)
        });

        function selectTab(){
            tabNav.forEach(item =>{
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName){
            tabCont.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('is-active') :
                item.classList.remove ('is-active');
            });
        };
    };
    tab();

});