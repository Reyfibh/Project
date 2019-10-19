
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  /*var btnPrev=document.querySelector('.reviews__prev');
  var btnNext=document.querySelector('.reviews__next');
  var content=document.querySelectorAll('.reviews .reviews__list blockquote');
  var togglesContainer=document.querySelector('.slider__toggles');
  var btnToggles=togglesContainer.querySelectorAll('.slider__toggle');
  var i=0;
  btnPrev.onclick=function() {
  	content[i].style.display='none';
  	i--;
  	if(i<0) {
  		i=content.length-1;
  	}
  	content[i].style.display='block';
  };
  btnNext.onclick=function() {
  	content[i].style.display='none';
  	i++;
  	if(i>=content.length) {
  		i=0;
  	}
  	content[i].style.display='block';
  };
  for (i = 0; i < btnToggles.length; i++) {
  btnToggles[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/

var slideIndex = 1;
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slider__item');
  var toggles = document.getElementsByClassName('slider__toggle');
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; 
  }
  for (i = 0; i < toggles.length; i++) {
      toggles[i].className = toggles[i].className.replace(' active', "");
  }
  slides[slideIndex-1].style.display = 'flex'; 
  toggles[slideIndex-1].className +=' active';
}
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
/*
 
// Адаптивная карта google
function initialize () {     
  var myLatlng = new google.maps.LatLng(59.936352, 30.32109700000001);
  var myOptions = {
    zoom: 15,
    center: myLatlng
  };
  var mapPlace = new google.maps.Map(document.getElementById("map"), myOptions);
  var pointer = "img/target.png";
  var beachMarker = new google.maps.Marker({
    position: myLatlng,
    map: mapPlace,
    icon: pointer
  });
}
window.addEventListener("load", initialize);
window.addEventListener("resize", initialize);
*/

var popupOk=document.querySelector(".pop-up-ok");
var popupError=document.querySelector(".pop-up-error");
var formCompetition=document.querySelector(".form-competition");
var closeOk=popupOk.querySelector(".pop-up-ok--btn");
var closeError=popupError.querySelector(".pop-up-error--btn");
var surname=document.querySelector("[name=surname]");
var name=document.querySelector("[name=name]");
var email=document.querySelector("[name=email]");
var overlay=document.querySelector(".overlay");

formCompetition.addEventListener("submit", function(event) {
    if(surname.value && name.value && email.value) {
      event.preventDefault();
      popupError.classList.add("pop-up-error--show");
      overlay.classList.add("overlay--active");
    }
  });
closeError.addEventListener("click", function(event) {
    event.preventDefault();
    popupError.classList.remove("pop-up-error--show");
    overlay.classList.remove("overlay--active");
  });


window.addEventListener("keydown", function(event){
    if (event.keyCode === 27 ) {
        event.preventDefault();
        if (popupError.classList.contains("pop-up-error--show")) {
            popupError.classList.remove("pop-up-error--show");
            overlay.classList.remove("overlay--active");
        }
    }
});

formCompetition.addEventListener("submit", function(event) {
    surname.value,name.value,email.value&&(event.preventDefault(),
    popupError.classList.remove("pop-up-error--show"),
    popupOk.classList.add("pop-up-ok--show"),
    overlay.classList.add("overlay--active"))
  });
closeOk.addEventListener("click", function(event) {
    event.preventDefault();
    popupOk.classList.remove("pop-up-ok--show");
    overlay.classList.remove("overlay--active");
  });
window.addEventListener("keydown", function(event){
    if (event.keyCode === 27 ) {
        event.preventDefault();
        if (popupOk.classList.contains("pop-up-ok--show")) {
            popupOk.classList.remove("pop-up-ok--show");
            overlay.classList.remove("overlay--active");
        }
    }
});
overlay.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("overlay--active");
    popupOk.classList.remove("pop-up-ok--show");
    popupError.classList.remove("pop-up-error--show");
  });
    



  var crop=document.querySelector(".icon-crop");
  var fill=document.querySelector(".icon-fill");
  var contrast=document.querySelector(".icon-contrast");
  var cropRange=document.querySelector(".upload__range--crop");
  var fillRange=document.querySelector(".upload__range--fill");
  var contrastRange=document.querySelector(".upload__range--contrast");

  crop.addEventListener("click", function(event) {
    if (crop.classList.contains("upload__icon--active")) {
        crop.classList.remove("upload__icon--active");
        cropRange.classList.remove("upload__range--active");
      }
      else {
        event.preventDefault();
        crop.classList.add("upload__icon--active");
        fill.classList.remove("upload__icon--active");
        contrast.classList.remove("upload__icon--active");
        cropRange.classList.add("upload__range--active");
        fillRange.classList.remove("upload__range--active");
        contrastRange.classList.remove("upload__range--active");
      }
  });
  fill.addEventListener("click", function(event) { 
    if (fill.classList.contains("upload__icon--active")) {
      fill.classList.remove("upload__icon--active");
      fillRange.classList.remove("upload__icon--active");
    }
    else {
      event.preventDefault();
      fill.classList.add("upload__icon--active");
      crop.classList.remove("upload__icon--active");
      contrast.classList.remove("upload__icon--active");
      fillRange.classList.add("upload__range--active");
      cropRange.classList.remove("upload__range--active");
      contrastRange.classList.remove("upload__range--active");
    }
  });
  contrast.addEventListener("click", function(event) {
    if (contrast.classList.contains("upload__icon--active")) {
      contrast.classList.remove("upload__icon--active"),
      contrastRange.classList.remove("upload__range--active");
    }
    else {
      event.preventDefault();
      contrast.classList.add("upload__icon--active");
      crop.classList.remove("upload__icon--active");
      fill.classList.remove("upload__icon--active");
      contrastRange.classList.add("upload__range--active");
      cropRange.classList.remove("upload__range--active");
      fillRange.classList.remove("upload__range--active");
    }
  });
  
    
  
