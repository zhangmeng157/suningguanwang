//轮播图
{
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagebox li");
    let banner=document.querySelector("#banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;//鼠标离开接着展示
        }
    });
    // window.setInterval();自动执行  在几秒内自动执行  单位毫秒
    var n = 0;
    function move() {
        n++;
        // n=n%5;
        if (n === imgs.length) {
            n = 0;
        }//判断超出范围
        if(n<0){
            n=imgs.length-1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    };
    let t=setInterval(move, 2000);
    banner.onmouseenter=function () {
        //清除自动
        clearInterval(t);
    };
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    };//鼠标离开开始时间函数
    next.onclick=function () {
        move();
    };
    prev.onclick=function () {
        n-=2;
        move();
    }
}
//搜索
{
    let sousuo=document.querySelector(".search");
    let leftbar=document.querySelector(".leftbar");
    window.onscroll=function () {
        let st = document.documentElement.scrollTop;
        if (st > 720) {
            sousuo.style.display = "block";
        } else {
            sousuo.style.display = "none";
        }
        if (st >2500) {
            leftbar.style.display = "block";
        } else {
            leftbar.style.display = "none";
        }
    }
}
//top
{
    let totop=document.querySelector(".totop");
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=100;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25)
    };
}
//侧导航
{
    let labels=document.querySelectorAll(".banner_nav1,.banner_nav2");
    let content=document.querySelectorAll(".menu-content");
    let obj=content[0];
    labels.forEach(function (ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            content[index].style.display="block";
            obj=content[index];
        };
        ele.onmouseleave=function(){
            content[index].style.display="none";
        }
    })
}
//leftbar
{
    let tips=document.querySelectorAll(".list-menu");
    let containers=document.querySelectorAll(".item1,.item2,.item3,.guess");
    tips.forEach(function (ele,index) {
        ele.onclick=function () {
            let ot=containers[index].offsetTop-50;
            let now=document.documentElement.scrollTop;
            let time=0;
            let speed=(ot-document.documentElement.scrollTop)/10;
            let t=setInterval(function () {
                time+=25;
                now+=speed;
                if(time===200){
                    clearInterval(t);
                }
                document.documentElement.scrollTop=now;
            },25)
        }
    });
    window.addEventListener("scroll",function(){
        let st=document.documentElement.scrollTop;
        for(let i=0;i<containers.length;i++){
            if(st>containers[i].offsetTop-50){
                for(let i=0;i<tips.length;i++){
                    tips.classList.remove("active");
                }
                tips.classList.add("active");
            }
        }
    })
}