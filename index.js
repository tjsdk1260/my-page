//메뉴클릭시 스크롤 위치 이동
const menu = document.querySelectorAll('.tabs>input'),
    contents = document.querySelectorAll('section'),
    homeTop = contents[0].offsetTop,
    aboutTop = contents[1].offsetTop,
    portfolioTop = contents[2].offsetTop,
    contactTop = document.querySelector('.contact').offsetTop;
console.log(contactTop);
menu[0].addEventListener('change',()=>{
    window.scroll({
        top:homeTop,
        behavior:'smooth'
    })
});
menu[1].addEventListener('change',()=>{
    window.scroll({
        top:aboutTop,
        behavior:'smooth'
    })
});
menu[2].addEventListener('change',()=>{
    window.scroll({
        top:portfolioTop,
        behavior:'smooth'
    })
});
menu[3].addEventListener('change',()=>{
    window.scroll({
        top:contactTop,
        behavior:'smooth'
    })
});
