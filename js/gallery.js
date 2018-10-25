function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImg = document.querySelector("#gallery-photo img");
	let imgInfo = document.querySelector("#gallery-info > .description");
	let imgTitle = document.querySelector("#gallery-info > .title");
	// alert(mainImg);


  thumbnails.forEach(function(el) {
  	let largeVersion = new Image();
  	largeVersion.src = el.dataset.largeVersion;

  	// set the Image
  	el.addEventListener("click", function() {
  		// Preload large images.
	    mainImg.setAttribute("src", largeVersion.src);

  		let currentClass = "current";

  		//move .current
  		document.querySelector(".current").classList.remove(currentClass);
  		el.parentNode.classList.add(currentClass);

  		//add title and description
  		let imgDescription = el.dataset.description;
  		let imgInfoTitle = el.dataset.title;
  		imgInfo.innerHTML = imgDescription;
  		imgTitle.innerHTML = imgInfoTitle;

  	});

  });
}

