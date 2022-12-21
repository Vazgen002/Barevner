// let myCircle = document.getElementById('kapikik');

// window.addEventListener('load', () =>{
//  	myCircle.style.position = 'absolute';
//  	myCircle.style.left = '150px';
//  	myCircle.style.top = '150px';
// });

// window.addEventListener('keyup', (event) => {
//  switch (event.key) {
//  	case 'ArrowLeft':
//  		myCircle.style.left = parseInt(myCircle.style.left) - 10 + 'px';
//  		break;
//  	case 'ArrowRight':
//  		myCircle.style.left = parseInt(myCircle.style.left) + 10 + 'px';
//  		break;
//  	case 'ArrowUp':
//  		myCircle.style.top = parseInt(myCircle.style.top) - 10 + 'px';
//  		break;
//  	case 'ArrowDown':
//  		myCircle.style.top = parseInt(myCircle.style.top) + 10 + 'px';
//  		break;
//  	default:
//  		alert("Միայն ստեղնաշարով");
//     }
// });


document.onkeydown=function (e) {
    var kapikl=document.getElementById('kapikik').offsetLeft;
    var kapikt=document.getElementById('kapikik').offsetTop;

    var banan1l=document.getElementById('ban1').offsetLeft;
    var banan1t=document.getElementById('ban1').offsetTop;

    var banan2l=document.getElementById('ban2').offsetLeft;
    var banan2t=document.getElementById('ban2').offsetTop;

    var banan3l=document.getElementById('ban3').offsetLeft;
    var banan3t=document.getElementById('ban3').offsetTop;

    var banan4l=document.getElementById('ban4').offsetLeft;
    var banan4t=document.getElementById('ban4').offsetTop;

    var banan5l=document.getElementById('ban5').offsetLeft;
    var banan5t=document.getElementById('ban5').offsetTop;

    var banan6l=document.getElementById('ban6').offsetLeft;
    var banan6t=document.getElementById('ban6').offsetTop;

    var banan7l=document.getElementById('ban7').offsetLeft;
    var banan7t=document.getElementById('ban7').offsetTop;




    if (e.keyCode==38) {
        kapikt=kapikt-10;
        document.getElementById('kapikik').style.top=kapikt+'px'
    }
    if (e.keyCode==37) {
        kapikl=kapikl-10;
        document.getElementById('kapikik').style.left=kapikl +'px'
    }
    if (e.keyCode==39) {
        kapikl=kapikl+10
        document.getElementById('kapikik').style.left=kapikl+'px'
    }
    if (e.keyCode==40) {
        kapikt=kapikt +10
        document.getElementById('kapikik').style.top=kapikt +'px'
    }
    if (kapikt+100>banan1t && kapikt< banan1t+100 &&kapikl +100>banan1l &&kapikl < banan1l+100) {
        document.getElementById('ban1').classList.add('kapikik')
    }
    if (kapikt+100>banan2t && kapikt< banan2t+100 &&kapikl +100>banan2l &&kapikl < banan2l+100) {
        document.getElementById('ban2').classList.add('kapikik')
    }
    if (kapikt+100>banan3t && kapikt< banan3t+100 &&kapikl +100>banan3l &&kapikl < banan3l+100) {
        document.getElementById('ban3').classList.add('kapikik')
    }
    if (kapikt+100>banan4t && kapikt< banan4t+100 &&kapikl +100>banan4l &&kapikl < banan4l+100) {
        document.getElementById('ban4').classList.add('kapikik')
    }
    if (kapikt+100>banan5t && kapikt< banan5t+100 &&kapikl +100>banan5l &&kapikl < banan5l+100) {
        document.getElementById('ban5').classList.add('kapikik')
    }
    if (kapikt+100>banan6t && kapikt< banan6t+100 &&kapikl +100>banan6l &&kapikl < banan6l+100) {
        document.getElementById('ban6').classList.add('kapikik')
    }

    if (kapikt+100>banan7t && kapikt< banan7t+100 &&kapikl +100>banan7l &&kapikl < banan7l+100) {
        document.getElementById('ban7').classList.add('kapikik')
    }

    var cl =document.getElementsByClassName('rr').length*5
    document.getElementById('time').innerHTML=cl
    if(cl==30){
        document.getElementById('win').style.opacity=1;
        clearInterval(stop);
    }

}