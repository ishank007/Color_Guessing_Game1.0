var color=['rgb(25, 200, 230)', 'rgb(55, 20, 255)', 'rgb(25, 250, 0)','rgb(255, 255, 180)','rgb(255, 0, 255)','rgb(255, 255, 0)'];
var square=document.querySelectorAll('.square');
var display=document.querySelector('#colorDis');
var message=document.querySelector('#message');
var number=6;
var color=randomcolor(number);
var hcolor=document.querySelector('h1');
var resetbutton=document.querySelector('#reset');
var easybtn=document.querySelector('#easy');
var hardbtn=document.querySelector('#hard');

var pickedcolor=fun3();
easybtn.addEventListener('click',function(){
	
	easybtn.classList.add('selected');
	hardbtn.classList.remove('selected');
	//generate random colors of 6
	number=3;
	color=randomcolor(number);

	//picking a new color to find 
	pickedcolor=fun3();
	//displaying new color rgb for user
	display.textContent=pickedcolor;
	//making square of that color;
	for(var i=0;i<square.length;i++){
		if(color[i]){
		square[i].style.background=color[i];
		}
		else{
			square[i].style.display='none';
		}
	}
	message.textContent='';
	//chnagin h1 to black after click of newcolors
	hcolor.style.background='steeleblue';


});
hardbtn.addEventListener('click',function(){
	hardbtn.classList.add('selected');
	easybtn.classList.remove('selected');
	number=6;
	color=randomcolor(number);
	//picking a new color to find 
	pickedcolor=fun3();
	//displaying new color rgb for user
	display.textContent=pickedcolor;
	//making square of that color;
	for(var i=0;i<square.length;i++){
		
		square[i].style.background=color[i];
		square[i].style.display='block';
	}
	message.textContent='';
	//chnagin h1 to black after click of newcolors
	hcolor.style.background='steeleblue';

});
function fun3(){
	return color[Math.floor(Math.random()*color.length)];
}
display.textContent = pickedcolor;
for(var i=0;i<square.length;i++){
	square[i].style.background=color[i];
	square[i].addEventListener('click',fun1);
}
function fun1(){
	var clickedcolor=this.style.background;
	if(clickedcolor===pickedcolor){
		message.textContent="Correct!";
		changecolor(clickedcolor);
		hcolor.style.background=clickedcolor;
		resetbutton.textContent='Play Again?';
	}
	else{
		this.style.background='#232323';
		message.textContent="Try Again";
	}
}
function changecolor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.background=color;	
	}
}

function randomcolor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(generatecolor());
	}
	return arr;
}
function generatecolor(){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		'rgb(25, 200, 230)'
		var x="rgb("+r+", "+g+","+" "+b+")";
		return x;

}
resetbutton.addEventListener('click',funres);
function funres(){
	//generate random colors of 6
	color=randomcolor(number);
	//picking a new color to find 
	pickedcolor=fun3();
	//displaying new color rgb for user
	display.textContent=pickedcolor;
	//making square of that color;
	for(var i=0;i<square.length;i++){
	square[i].style.background=color[i];
	}
	//chnagin h1 to black after click of newcolors
	hcolor.style.background='steeleblue';
	message.textContent='';


}
