let mid = document.querySelector(".middle")
let main = document.querySelector("main")
let apps = document.querySelector(".apps")

let currentPosition = 0
// main.scrollTo(0,apps.offsetTop)
let p1 = 0;
let p2 = 0;
main.addEventListener("scroll",()=>{
    // text slide in --------
    if(main.scrollTop > (mid.offsetTop - window.innerHeight/1.4)){
        mid.classList.add("active")
    }
    else{
        mid.classList.remove("active")
    }

    // auto scroll-------
    // if(main.scrollTop == 0){
    //     currentPosition = 0
    // }
    // p2 = main.scrollTop;
    
    // if(( main.scrollTop != 0 )&&(main.scrollTop < apps.offsetTop)&&(main.scrollTop > currentPosition)){
    //     main.scrollTo(0,apps.offsetTop)
    //     console.log(currentPosition);
    //     currentPosition = apps.offsetTop
    // }
    // if((main.scrollTop < apps.offsetTop)&&(main.scrollTop < currentPosition)){
    //     main.scrollTo(0,0);
    //     console.log(currentPosition);
    //     currentPosition = 0;
    // }
    // if(( main.scrollTop != 0 )&&(main.scrollTop < apps.offsetTop)&&(p2-p1 > 0)){
    //     main.scrollTo(0,apps.offsetTop)
    //     console.log(currentPosition);
    //     currentPosition = apps.offsetTop
    // }
    // if((main.scrollTop < apps.offsetTop)&&(p2-p1 < 0)){
    //     main.scrollTo(0,0);
    //     console.log(currentPosition);
    //     currentPosition = 0;
    // }
    // p1 = p2;
})

