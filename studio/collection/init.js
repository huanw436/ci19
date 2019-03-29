document.onclick = function(){
	var blackcircle = document.getElementById('blackcircle')
	var blackstrip = document.getElementById('blackstrip')
	if ((blackcircle.style.display == 'block')||(blackstrip.style.display == 'none'))
		blackcircle.style.display = 'none';
		// blackstrip.style.display = 'none';
	else
		blackcircle.style.display = 'block'; 
}
// document.onclick = function(){
// 	var blackstrip = document.getElementById('blackstrip')
// 	if (blackstrip.style.display == 'block')
// 		blackstrip.style.display = 'none';
// 	else
// 		blackstrip.style.display = 'block'; 
// }