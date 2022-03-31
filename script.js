/******nav-bar form-control*****/
let form = document.querySelector('form'),
    inputForm = document.querySelector('.form-control'),
    inputDots = document.querySelector('.form__dots'),
    inputBtn = document.querySelector('.input__btn')

form.addEventListener('click', function() {
    inputForm.classList.add('active')
    inputDots.classList.add('active')
    inputBtn.classList.add('active')
})

/****************instagram story list**********/

let select = document.querySelector('.form-select'),
    iconArrow = document.querySelector('.fa-sort-down')

select.addEventListener('click', function() {
    iconArrow.classList.toggle('active')
})


/****************switch mode************/
const switchMode = document.querySelector('.switch__theme')

switchMode.addEventListener('click', function(e) {
    e.preventDefault();

    switchMode.classList.toggle('active');
})


/****menu sliding******/

let asideMenuLink1 = document.querySelector('.aside__menu-link1'),
    asideMenuLink2 = document.querySelector('.aside__menu-link2'),
    asideMenuLink3 = document.querySelector('.aside__menu-link3'),
    asideMenuLink4 = document.querySelector('.aside__menu-link4'),
    asideMenuLink5 = document.querySelector('.aside__menu-link5'),
    asideMenuLink6 = document.querySelector('.aside__menu-link6'),
    asideMenuLink7 = document.querySelector('.aside__menu-link7'),
    asideMenuLink8 = document.querySelector('.aside__menu-link8'),
    selectedTab = document.querySelector('.selected-tab')

asideMenuLink1.addEventListener('click', function(e) {
    e.preventDefault();

    selectedTab.style.cssText = `
    transform: translateY(0px);
  `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(0);
    `
            //     document.querySelector('.row').style.cssText = `
            // grid-template-columns: 297px;
            // `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(0);
    `
    }
})

asideMenuLink2.addEventListener('click', function(e) {
    e.preventDefault();
    selectedTab.style.cssText = `
        transform: translateY(71px);
        `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(77px);
    `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(65px);
    `
    }
})

asideMenuLink3.addEventListener('click', function(e) {
    e.preventDefault()

    selectedTab.style.cssText = `
        transform: translateY(142px);
        `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(160px);
    `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(135px);
    `
    }
})
asideMenuLink4.addEventListener('click', function(e) {
    e.preventDefault()

    selectedTab.style.cssText = `
        transform: translateY(220px);
        `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(240px);
    `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(200px);
    `
    }
})
asideMenuLink5.addEventListener('click', function(e) {
    e.preventDefault()

    selectedTab.style.cssText = `
        transform: translateY(290px);
        `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(320px);
    `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(270px);
    `
    }
})
asideMenuLink6.addEventListener('click', function(e) {
    e.preventDefault()

    selectedTab.style.cssText = `
        transform: translateY(365px);
        `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(400px);
    `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(335px);
    `
    }
})
asideMenuLink7.addEventListener('click', function(e) {
    e.preventDefault()

    selectedTab.style.cssText = `
        transform: translateY(435px);
        `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(480px);
    `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(400px);
    `
    }
})
asideMenuLink8.addEventListener('click', function(e) {
    e.preventDefault()

    selectedTab.style.cssText = `
        transform: translateY(516px);
        `
    if (document.documentElement.clientWidth < 905) {
        selectedTab.style.cssText = `
    transform: translateX(560px);
    `
    }
    if (document.documentElement.clientWidth < 521) {
        selectedTab.style.cssText = `
    transform: translateX(470px);
    `
    }
})

/********menu button********/

let arrow = document.querySelector('.arrow-collapse')

arrow.addEventListener('click', function(e) {
    e.preventDefault();

    arrow.style.cssText = `
    display: none;
     `

    // document.querySelector('.row').style.cssText = `
    //          grid-template-columns: 84px 0 95%;
    //         `


})

/*****nav menu*****/

let nav = document.querySelectorAll('.nav-pills .nav-link');

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function() {

        // document.querySelector('.row').style.cssText = `
        //                          grid-template-columns: 84px 355px 74%;
        //                     `
        // if (document.documentElement.clientWidth < 905) {
        //     document.querySelector('.row').style.cssText = `
        //             grid-template-columns: 300px 600px;
        //             `
        // }

        document.querySelector('.arrow-collapse').style.cssText = `
       display: block;
          `

    })
}

const burgerMenu = document.querySelector('.navbar-toggler'),
    navMenu = document.querySelector('.nav__menu');

burgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active')
})