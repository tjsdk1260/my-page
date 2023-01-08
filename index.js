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
//about 스크롤 애니메이션

let windowHeight = window.innerHeight;//윈도우 높이
let aboutWrap = document.querySelector('.about').offsetTop;//about top 값
let items = document.querySelector('.about-wrap');//애니메이션 대상


window.addEventListener('scroll',function(){
    let value = window.scrollY; //스크롤 값
    let absoluteAbout = value + aboutWrap; //about의 절대좌표 값
    console.log(absoluteAbout,windowHeight);
    if(absoluteAbout - windowHeight > 0){
        items.style.animation = 'about 2s ease-in';
    }
});
//back to top 
let goTop = document.querySelector('.go-top');
goTop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});