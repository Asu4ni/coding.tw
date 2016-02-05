"use strict";
var easyItems=document.getElementsByClassName("rsEasy");
var normItems=document.getElementsByClassName("rsNorm");
var chalItems=document.getElementsByClassName("rsChal");
var cagBtns=[document.getElementById("rcAll"),document.getElementById("rcEasy"),document.getElementById("rcNorm"),document.getElementById("rcChal")]
var mode=0;
for(var i=easyItems.length-1;i>=0;--i)easyItems[i].children[1].style.display="none";
for(var i=normItems.length-1;i>=0;--i)normItems[i].children[1].style.display="none";
for(var i=chalItems.length-1;i>=0;--i)chalItems[i].children[1].style.display="none";
function cagStyle(oldMode){
	cagBtns[oldMode].className ="";
	cagBtns[mode].className ="nowCag";
}
function allClick(){
	if(mode==2||mode==3)for(var i=easyItems.length-1;i>=0;--i)easyItems[i].style.display="inline-block";
	if(mode==1||mode==3)for(var i=normItems.length-1;i>=0;--i)normItems[i].style.display="inline-block";
	if(mode==1||mode==2)for(var i=chalItems.length-1;i>=0;--i)chalItems[i].style.display="inline-block";
	var t=mode;mode=0;cagStyle(t);
}
function easyClick(){
	if(mode==2||mode==3)for(var i=easyItems.length-1;i>=0;--i)easyItems[i].style.display="inline-block";
	if(mode==0||mode==2)for(var i=normItems.length-1;i>=0;--i)normItems[i].style.display="none";
	if(mode==0||mode==3)for(var i=chalItems.length-1;i>=0;--i)chalItems[i].style.display="none";
	var t=mode;mode=1;cagStyle(t);
}
function normClick(){
	if(mode==0||mode==1)for(var i=easyItems.length-1;i>=0;--i)easyItems[i].style.display="none";
	if(mode==1||mode==3)for(var i=normItems.length-1;i>=0;--i)normItems[i].style.display="inline-block";
	if(mode==0||mode==3)for(var i=chalItems.length-1;i>=0;--i)chalItems[i].style.display="none";
	var t=mode;mode=2;cagStyle(t);
}
function chalClick(){
	if(mode==0||mode==1)for(var i=easyItems.length-1;i>=0;--i)easyItems[i].style.display="none";
	if(mode==0||mode==2)for(var i=normItems.length-1;i>=0;--i)normItems[i].style.display="none";
	if(mode==1||mode==2)for(var i=chalItems.length-1;i>=0;--i)chalItems[i].style.display="inline-block";
	var t=mode;mode=3;cagStyle(t);
}
function itemClick(item){
	if(item.children[1].style.display=="inherit")item.children[1].style.display="none";
	else item.children[1].style.display="inherit";
}