/*
1. Обработать курсор --
2. Стартовая анимация --
3. Анимация фона --
4. Анимация текста --
5. Анимация фона справа --
6. Анимация шейпов --
7. Файл глобальных настроек --
8. Результирующий файл с запуском скролла --
*/

const init = () => {

    // Прелоад
    window.onload = function () {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader-animation');

        setTimeout(() => {
            preloader.classList.remove('preloader-animation');
            preloader.classList.add('preloader-hidden');
        }, 3000);

        setTimeout(() => {
            startAnimation();
            preloader.classList.add('preloader-none');
        }, 3200);
    };

    // Функции с функциями для анимации блоков
    const showNextSlide = () => {
        bgSlides('down')
        imagesSlides('down');
        shapesSlides('down');
        textSlides('down');
    }

    const showPrevSlide = () => {
        bgSlides('up');
        imagesSlides('up');
        shapesSlides('up');
        textSlides('up');
    }

    // Обработчик события на колесо мыши, 
    // в это помогает инпут, который является переключателем
    if (window.innerWidth > 768) {
        window.addEventListener('wheel', (e) => {
            let delta = -e.deltaY;

            if (delta > 0) {
                if (helperInput.value == '1') {
                    console.log('scroll up');
                    helperInput.value = 0;
                    showPrevSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 2000);
                }
            } else {
                if (helperInput.value == '1') {
                    console.log('scroll down');
                    helperInput.value = 0;
                    showNextSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 2000);
                }
            }
        });

    } else {
        document.addEventListener('swiped-left', () => {
            showNextSlide();
        })
        document.addEventListener('swiped-right', () => {
            showPrevSlide();
        })
    }
}

init();