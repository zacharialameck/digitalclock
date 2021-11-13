var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
function(){
	d = new Date();
	second = d.getSecond(); 
	minute = d.getMunite();
     hour = d.getHour();
     document.getElementById("second").style.transform ="rotate(" + second +"deg)";


}, 100 
	);
