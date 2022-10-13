const signUpButton = document.getElementById('signUp1');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if(signInButton){ 
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
}
if(signUpButton){ 
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
}

(document).ready(() => {
	let typingElement = $('.typing');
  
	typingElement.on('click', (e) => {
	  typingElement.removeClass('animate');
	  setTimeout(() => typingElement.addClass('animate'), 1);
	})
  });



