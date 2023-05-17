let mid = document.querySelector(".middle")
let main = document.querySelector("main")
let apps = document.querySelector(".apps")
let container2 = document.querySelector(".container2")
let topdiv = document.querySelector(".top")

let container2Top = container2.offsetTop;
let appsMaxScroll = apps.scrollTop;
let currentPosition = 0
let gotMax = false;
// main.scrollTo(0,apps.offsetTop)
let ps = 0;
let cs = 0;
let uwList = false;
let dwList = false;
main.addEventListener("scroll",async ()=>{
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
    
    cs = main.scrollTop;
    if((cs>container2Top)){
        if((cs - ps > 0)){
            if(uwList){
                return;
            }
            if( (apps.scrollTop < appsMaxScroll) && (gotMax)){
                apps.scrollBy(0,cs - ps)
                uwList = true;
                uwList = await new Promise((reslove,reject)=>{
                    setTimeout(() => {
                        reslove(false)
                    }, 500);
                })
            }
            if (!gotMax){
                apps.scrollBy(0,cs - ps)
                uwList = true;
                uwList = await new Promise((reslove,reject)=>{
                    setTimeout(() => {
                        reslove(false)
                    }, 500);
                })
                if(appsMaxScroll == apps.scrollTop){
                    gotMax = true;
                    // console.log("mashallah");
                }
                else{
                    appsMaxScroll = apps.scrollTop;
                }
            }
        }
        
    }
    if((cs - ps < 0)){
        if(dwList){
            return;
        }
        if (apps.scrollTop>0){
            apps.scrollBy(0,cs-ps)
            dwList = true;
            dwList = await new Promise((reslove,reject)=>{
                setTimeout(() => {
                    reslove(false)
                }, 500);
            })
            // console.log("subhanallah");
        }
    }

    ps = cs;
})

apps.style.scrollBehavior = "smooth";