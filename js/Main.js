let a = document.querySelector(".subscribe");

let input = document.querySelector(".input_subscribe").addEventListener("click", function(){
	a.classList.add("active");

	a.addEventListener('click', () =>{
		if (a.classList.contains("active")) {
			a.classList.remove("active");			
		}
	});
});

