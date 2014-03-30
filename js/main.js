


//var w1s1;
//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");
    

	var dataSet = document.querySelectorAll(".data-set");

	for ( var i = 0; i < dataSet.length; i++) {
		dataSet[i].addEventListener('click', function() {
			console.log(this.getAttribute('set'));			
			if (this.style.background != 'red') 
				this.style.background = 'red';
			else
				this.style.background = '#FAFAFA';
		});
	}
    
    

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
};
// window.onload can work without <body onload="">
window.onload = init;
