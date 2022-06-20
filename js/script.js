$(document).ready(function(){
//슬라이드
    $(function(){
        $('#banner').bxSlider({
            auto:true,
            autoHover:true,
        });
    })

//토글메뉴
    const toggleBtn = document.querySelector('#toggle');
    const menu = document.querySelector('#LNB ul');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });


    // let maintext = document.querySelector("#scroll_img")

    // window.addEventListener('scroll',function(){
    //     let value = window.scrollY;

    //     if(value > 300){
    //         maintext.animation = "disappear 1s ease-out forwards";
    //     }else{
    //         maintext.animation = "slide 3s ease-out";
    //     }
    // })

});

