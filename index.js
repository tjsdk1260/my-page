//메뉴클릭시 스크롤 위치 이동
const menu = document.querySelectorAll('.menu-item'),
    contents = document.querySelectorAll('section'),
    homeTop = contents[0].offsetTop,
    aboutTop = contents[1].offsetTop,
    portfolioTop = contents[2].offsetTop,
    contactTop = contents[3].offsetTop;

menu[0].addEventListener('click',()=>{
    window.scroll({
        top:homeTop,
        behavior:'smooth'
    })
});

menu[1].addEventListener('click',()=>{
    window.scroll({
        top:aboutTop,
        behavior:'smooth'
    })
});

menu[2].addEventListener('click',()=>{
    window.scroll({
        top:portfolioTop,
        behavior:'smooth'
    })
});

menu[3].addEventListener('click',()=>{
    window.scroll({
        top:contactTop,
        behavior:'smooth'
    })
});

for(let i=0; i<menu.length;i++){
    menu[i].addEventListener('click',()=>{
       
    });
};
