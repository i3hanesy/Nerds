var contact=document.querySelector(".button-contact-area"),popup=document.querySelector(".modal"),close=popup.querySelector(".modal-close");contact.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")});