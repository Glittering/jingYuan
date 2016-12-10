/**
 * Created by zhao on 16-12-1.
 */

//			window.onscroll = function () {
//				console.log(document.body.scrollTop);
//            }
window.onload = function () {

//			    获取元素
    var botl = document.getElementById("button");
    var botr = document.getElementById("button_r");
    var arrIMG = document.getElementsByTagName("img");
    var arrLi = document.getElementsByTagName("li");
    var nowTop = 0;
    var scrollHeight = 0;


				// 获取网页滚动条位置
				window.onscroll = function () {
				    function timerDown(begin, beginUp, end,endUp) {

                        var oTimeD =0;
				        // 下行范围begin---begin+40
                        if(nowTop>begin && nowTop<begin+40) {
                            // document.body.scrollTop = 624;
                             oTimeD = setInterval(function () {
                                if (nowTop<beginUp-55){
                                    document.body.scrollTop++;
                                }else if(nowTop>=beginUp-55 && nowTop<=beginUp){
                                    document.body.scrollTop=beginUp+1;
                                }else if(nowTop>=beginUp && nowTop<end) {
                                    document.body.scrollTop++;
                                }
                                else if (nowTop>=end){
                                    clearInterval(oTimeD);
                                    document.body.scrollTop=end;
                                }
                            },1.5);
                        };
                        // if (nowTop >= end){
                        //     console.log(oTimeD);
                        //     clearInterval(oTimeD)
                        // }

                        // 上行范围beginUp-40---beginUp
                        if(nowTop>beginUp-40 && nowTop<beginUp) {
                            // document.body.scrollTop = 624;
                            var oTimeU = setInterval(function () {
                                if (nowTop>begin+55){
                                    document.body.scrollTop--;
                                }else if(nowTop<=begin+55 && nowTop>=begin){
                                    document.body.scrollTop=begin-1;
                                }else if(nowTop>endUp && nowTop<begin) {
                                    document.body.scrollTop--;
                                }
                                else if (nowTop<=endUp){
                                    clearInterval(oTimeU);
                                    document.body.scrollTop=endUp;
                                }
                            },1.5);
                        }
                        // if(nowTop<=endUp){
                        //     clearInterval(oTimeU)
                        // }
                    }
                   nowTop = document.body.scrollTop;
                   scrollHeight = document.body.scrollHeight;
                   console.log(nowTop);
                   console.log(document.body.scrollHeight);
                    timerDown(100,500,624,0);
                    timerDown(680,1160,1252,624);
                    timerDown(1320,1770,1881,1252);
                    timerDown(2000,2410,2508,1881);
                    timerDown(2600,3000,3140,2508);
               };

//				当前图
    var nowIndex = 1;

//				初始化网页
    arrIMG[nowIndex].style.display = "inline-block";
    arrLi[nowIndex + 3].style.background = "rgba(207,5,11,0.8)";
    arrLi[nowIndex + 3].style.color = "white";

//				右按钮
    botr.onmouseup = function () {
        nowIndex++;
        if (nowIndex > 4) nowIndex = 1;
        for (var i = 1; i < 5; i++) {
            arrIMG[i].style.display = "none";
            arrLi[i + 3].style.background = "rgba(178,178,178,0.8)";
            arrLi[i + 3].style.color = "rgba(64,64,64,0.8)";
        }
        arrIMG[nowIndex].style.display = "inline-block";
        arrLi[nowIndex + 3].style.background = "rgba(207,5,11,0.8)";
        arrLi[nowIndex + 3].style.color = "white";
    };

//				左按钮
    botl.onmouseup = function () {
        nowIndex--;
        if (nowIndex < 1) nowIndex = 4;
        for (var i = 1; i < 5; i++) {
            arrIMG[i].style.display = "none";
            arrLi[i + 3].style.background = "rgba(178,178,178,0.8)";
            arrLi[i + 3].style.color = "rgba(64,64,64,0.8)";
        }
        arrIMG[nowIndex].style.display = "inline-block";
        arrLi[nowIndex + 3].style.background = "rgba(207,5,11,0.8)";
        arrLi[nowIndex + 3].style.color = "white";
    };

//				4个按钮
    for (var i = 1; i < 5; i++) {
        arrLi[i + 3].index = i;
        arrLi[i + 3].onmouseover = function () {
            for (var i = 1; i < 5; i++) {
                arrIMG[i].style.display = "none";
                arrLi[i + 3].style.background = "rgba(178,178,178,0.8)";
                arrLi[i + 3].style.color = "rgba(64,64,64,0.8)";
            }
            arrIMG[this.index].style.display = "inline-block";
            arrLi[this.index + 3].style.background = "rgba(207,5,11,0.8)";
            arrLi[this.index + 3].style.color = "white";
            nowIndex = this.index;
        }
    }

//				自动轮播
    setInterval(function () {
        nowIndex++;
        if (nowIndex > 4) nowIndex = 1;
        for (var i = 1; i < 5; i++) {
            arrIMG[i].style.display = "none";
            arrLi[i + 3].style.background = "rgba(178,178,178,0.8)";
            arrLi[i + 3].style.color = "rgba(64,64,64,0.8)";
        }
        arrIMG[nowIndex].style.display = "inline-block";
        arrLi[nowIndex + 3].style.background = "rgba(207,5,11,0.8)";
        arrLi[nowIndex + 3].style.color = "white";
    }, 3500);
}