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

