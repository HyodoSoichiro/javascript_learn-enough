function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImg = document.querySelector("#gallery-photo img");
	let imgInfo = document.querySelector("#gallery-info > .description");
	let imgTitle = document.querySelector("#gallery-info > .title");
	// alert(mainImg);


  thumbnails.forEach(function(el) {
  	// set the Image
  	el.addEventListener("click", function() {
  		let newImgUrl = el.dataset.largeVersion;
  		mainImg.setAttribute("src", newImgUrl);
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

