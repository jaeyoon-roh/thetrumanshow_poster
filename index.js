$(document).ready(function(){
    setTimeout(function(){ showPic() },1000);
});

function showPic(){

    var imgArray=new Array(); 
    imgArray[0]="pic01.png"; 
    imgArray[1]="pic02.png"; 
    imgArray[2]="pic03.png"; 
    imgArray[3]="pic04.png";
    imgArray[4]="pic05.png";
    imgArray[5]="pic06.png";
    imgArray[6]="pic07.png";
    imgArray[7]="pic08.png";
    imgArray[8]="pic09.png";

    var imgNum = Math.round(Math.random() * 8);
    $(".pic01").attr("src",imgArray[imgNum]);
    $(".pic02").attr("src",imgArray[imgNum]);
    $(".pic03").attr("src",imgArray[imgNum]);
    $(".pic04").attr("src",imgArray[imgNum]);
    $(".pic05").attr("src",imgArray[imgNum]);
    $(".pic06").attr("src",imgArray[imgNum]);
    $(".pic07").attr("src",imgArray[imgNum]);

    setTimeout(function(){ showPic() },2000);
} 