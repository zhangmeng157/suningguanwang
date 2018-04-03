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
    }
    let t=setInterval(move, 2000);
    banner.onmouseenter=function () {
        //清除自动
        clearInterval(t);
    };
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    };//鼠标离开开始时间函数
    let flag=true;
    next.onclick=function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    prev.onclick=function () {
        if (flag) {
            flag = false;
            n-=2;
            move();
        }
    };
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    });
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
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25)
    };
    let top=document.querySelector(".top");
    top.onclick=function () {
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
    let flag=true;
    tips.forEach(function (ele,index) {
        ele.onclick=function () {
            flag=false;
            let ot=containers[index].offsetTop-50;
            let now=document.documentElement.scrollTop;
            let time=0;
            let speed=(ot-now)/8;
            let t=setInterval(function () {
                time+=25;
                now+=speed;
                flag=true;
                if(time===200){
                    clearInterval(t);
                }
                document.documentElement.scrollTop=now;
            },25)
        }
    });
    window.addEventListener("scroll",function(){
        if(flag) {
            let st = document.documentElement.scrollTop;
            for (let i = 0; i < containers.length; i++) {
                if (st > containers[i].offsetTop - 100) {
                    for (let i = 0; i < tips.length; i++) {
                        tips[i].classList.remove("active1");
                    }
                    tips[i].classList.add("active1");
                }
            }
        }
    });
}
//顶部选项卡
{
    let items=document.querySelectorAll(".move-t");
    let content=document.querySelectorAll(".head-content-tan");
    let obj=content[0];
    items.forEach(function (ele,index){
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
//排行榜
{
        let prev=document.querySelector(".paihang-btn1");
        let next=document.querySelector(".paihang-btn2");
        let inner=document.querySelector(".paihang-inner");
        let contents=document.querySelectorAll(".paihang-bottom");
        let pages=document.querySelectorAll(".page");
        let n=0;
        // let n=1;
        let obj=pages[n];
        next.onclick=function () {
                n++;
                if(n===contents.length){
                    n=contents.length-1;
                    return;
                }
                inner.style.marginLeft=n* -390+"px";
                pages[n].classList.add("active2");
                pages[n-1].classList.remove("active2");
                obj=pages[n];
            };
        prev.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=n* -390+"px";
            pages[n].classList.add("active2");
            pages[n+1].classList.remove("active2");
            obj=pages[n];
        };

        // let flag=true;
        // next.onclick=function(){
        //     if(flag){
        //         flag=false;
        //         n++;
        //         inner.style.transition="all 1s";
        //         inner.style.marginLeft=-390*n+"px";
        //         pages[n-1].classList.add("active2");
        //         pages[n-2].classList.remove("active2");
        //         obj=pages[n];
        //     }
        // };
        // prev.onclick=function(){
        //     if(flag){
        //         flag=false;
        //         n--;
        //         inner.style.transition="all 1s";
        //         inner.style.marginLeft=-390*n+"px";
        //         pages[n].classList.add("active2");
        //         pages[n+1].classList.remove("active2");
        //         obj=pages[n];
        //     }
        // };
        // inner.addEventListener("transitionend",function(){
        //     flag=true;
        //     if(n===4){
        //         inner.style.transition="none";
        //         inner.style.marginLeft="-390px";
        //         n=1;
        //     }
        //     if(n===0){
        //         inner.style.transition="none";
        //         inner.style.marginLeft="-1170px";
        //         n=3;
        //     }
        // });
        pages.forEach(function (ele,index) {
            ele.onclick=function () {
                obj.classList.remove("active2");
                ele.classList.add("active2");
                obj=ele;
                inner.style.marginLeft=index*-390+"px";
                n=index;
            }
        });
}
//关注
{
    let inner=document.querySelector(".banner_zhong_inner");
    let contents=document.querySelectorAll(".banner_zhong a");
    let box=document.querySelector(".banner_zhong");
    let n=1;
    let t=setInterval(move,3000);
    function move(){
        n++;
        inner.style.transition="all 1s";
        inner.style.marginTop=n*-116+"px";
    }
    inner.addEventListener("transitionend",function(){
        if(n===3){
            inner.style.transition="none";
            inner.style.marginTop="-116px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginTop="-348px";
            n=2;
        }
    })
    box.onmouseenter=function () {
        clearInterval(t);
    };
    box.onmouseleave=function () {
        t=setInterval(move,3000);
    };
}

//大聚惠
// {
//         const prev=document.querySelector(".dahuiju-btn1");
//         const next=document.querySelector(".dahuiju-btn2");
//         const inner=document.querySelector(".dajuhui-inner");
//         let n=1;
//         let flag=true;
//         next.onclick=function(){
//             if(flag){
//                 flag=false;
//                 n++;
//                 inner.style.transition="all 2s";
//                 inner.style.marginLeft=-1000*n+"px";
//             }
//         };
//         prev.onclick=function(){
//             if(flag){
//                 flag=false;
//                 n--;
//                 inner.style.transition="all 2s";
//                 inner.style.marginLeft=-1000*n+"px";
//             }
//         };
//         inner.addEventListener("transitionend",function(){
//             flag=true;
//             if(n===4){
//                 inner.style.transition="none";
//                 inner.style.marginLeft="-1000px";
//                 n=1;
//             }
//             if(n===0){
//                 inner.style.transition="none";
//                 inner.style.marginLeft="-3000px";
//                 n=3;
//             }
//         })
// }

//视频
{
    const prev=document.querySelector(".shipin-btn1");
    const next=document.querySelector(".shipin-btn2");
    const inner=document.querySelector(".shipin-inner");
    let n=0;
    next.onclick=function(){
        n++;
        if(n===2){
            n=1;
        }
        inner.style.marginLeft=-390*n+"px";
    };
    prev.onclick=function(){
        n--;
        if(n===-1){
            n=0;
        }
        inner.style.marginLeft=-390*n+"px";
    };
    const page = document.querySelectorAll(".zhanshi_img");
    const pic = document.querySelectorAll(".shipin-img img");
    page.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i<page.length; i++) {
                pic[i].classList.remove("active4");
            }
            pic[index].classList.add("active4");
        }
    })
}
//二维码
{
    const img = document.querySelectorAll(".item1-image");
    const tanchu = document.querySelectorAll(".pop");
    img.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            tanchu[index].style.display="block";
        };
        ele.onmouseleave=function(){
            tanchu[index].style.display="none";
        }
    });
}
//右侧导航
{
    let item=document.querySelectorAll(".icon1");
    let tan=document.querySelectorAll(".tan");
    let obj=tan[0];
    item.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            tan[index].style.display="block";
            obj=tan[index];
            tan[index].classList.add("disable");
        };
        ele.onmouseleave=function(){
            tan[index].style.display="none";
            tan[index].classList.remove("disable");
        }
    })
}
//乐拼购
{
    let prev=document.querySelector(".item3-btn-left");
    let next=document.querySelector(".item3-btn-right");
    let inner=document.querySelector(".item3_bottom_inner");
    let n=1;
    let flag=true;
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n* -590+"px";
        }
    };
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n* -590+"px";
        }
    };
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-590px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1770px";
            n=3;
        }
    })
}
//大聚惠jquery
{
let inner=$(".dajuhui-inner");
    $(".dajuhui_bottom1").hover(function(){
        $(".dahuiju-btn1",".dahuiju-btn2").fadeIn(500)
    },
    	function(){
           $(".dahuiju-btn1",".dahuiju-btn2").fadeOut(500)
       });
    $(".dajuhui_bottom1")
        .mouseenter(function(){
            $(".dahuiju-btn1,.dahuiju-btn2").fadeIn(500);
        })
        .mouseleave(function(){
            $(".dahuiju-btn1,.dahuiju-btn2").fadeOut(500);
        });
    let n=1;
    let flag=true;
    $(".dahuiju-btn2").click(function() {
        if(flag){
            flag=false;
            n++;
            inner.animate({marginLeft: -n * 1000}, 1000, function () {
                flag=true;
                if (n === 4) {
                    inner.css("marginLeft", -1000);
                    n = 1;
                }
            });
        }
    });
    $(".dahuiju-btn1").click(function(){
        if(flag){
            flag=false;
            n--;
            inner.animate({marginLeft:-n*1000},1000,function(){
                flag=true;
                if(n===0){
                    inner.css("marginLeft", -3000);
                    n=3;
                }
            });
        }
    });
}