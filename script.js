var x = 0;
function promjena(){
	var images = ["2.png","3.png","4.png","5.png","6.png","7.png","8.png","1.png"];
		document.getElementById("mjesec").src = images[x];
		x++;
		if (x > 7) {
			x = 0;
        }       
}