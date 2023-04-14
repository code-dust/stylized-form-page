let regLoginForm = document.querySelectorAll(".reg_login-form");
let toggleBtnStyle = document.querySelector(".toggle-btn-style");
let logInTab = document.querySelector(".login_tab");
let signUpTab = document.querySelector(".signup_tab");
let wrap = document.querySelector(".wrap");
toggleBtnStyle.style.width = logInTab.clientWidth+"px";
logInTab.addEventListener('click',(event) => {
	 toggleBtnStyle.style.width = logInTab.clientWidth+"px";
     wrap.style.transition ='all 0.45s linear';
	 wrap.style.transform = `translateX(0%)`;
	 toggleBtnStyle.style.transition ='all 0.45s linear';
	 toggleBtnStyle.style.transform = `translateX(0%)`;
	 
		  
	
});

signUpTab.addEventListener('click',(event) => {
	 toggleBtnStyle.style.width = signUpTab.clientWidth+"px";
     wrap.style.transition ='all 0.45s linear';
	 wrap.style.transform = `translateX(-50%)`;
	 toggleBtnStyle.style.transition ='all 0.45s linear';
	 toggleBtnStyle.style.transform = `translateX(${logInTab.clientWidth}px)`;
	
});



//SIGNUP FORM
const signupForm = document.getElementById('signup-form');
const newUsername = document.getElementById('new-username');
const newEmail = document.getElementById('new-email');
const newPassword1 = document.getElementById('new-password1');
const newPassword2 = document.getElementById('new-password2');

signupForm.addEventListener('submit',(e)=>{
	e.preventDefault();
	checkSignupInput();
});


function checkSignupInput(){
	 const newUsernameValue = newUsername.value.trim();
	 const newEmailValue = newEmail.value.trim();
	 const newPassword1Value = newPassword1.value.trim();
	 const newPassword2Value = newPassword2.value.trim();
	
	 if(newUsernameValue === ''){
	   setErrorFor(newUsername, 'Username cannot be blank'); 
	 }
	 else{
	   setSuccessFor(newUsername);	 
	 }
	
	
	 if(newEmailValue === ''){
	   setErrorFor(newEmail, 'Email cannot be blank'); 
	 }
	 else if(!isEmail(newEmailValue)){
	   setErrorFor(newEmail, 'Email is not valid'); 
	 }
	 else{
	   setSuccessFor(newEmail);	 
	 }
	
	
	 if(newPassword1Value === ''){
	   setErrorFor(newPassword1, 'Password cannot be blank'); 
	 }
	 else{
	   setSuccessFor(newPassword1);	 
	 }
	
	
	 if(newPassword2Value === ''){
	   setErrorFor(newPassword2, 'Password cannot be blank'); 
	 }
	 else if(newPassword1Value !== newPassword2Value){
	   setErrorFor(newPassword2, 'Passwords do not match'); 
	 }
	 else{
	   setSuccessFor(newPassword2);	 
	 }

}







//LOGIN FORM
const logInForm = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');


logInForm.addEventListener('submit',(e)=>{
	e.preventDefault();
	checkLoginInput();
});


function checkLoginInput(){
	 const usernameValue = username.value.trim();
	 const passwordValue = password.value.trim();
	 
	
	 if(usernameValue === ''){
	   setErrorFor(username, 'Username cannot be blank'); 
	 }
	 else{
	   setSuccessFor(username);	 
	 }
	
	
	 if(passwordValue === ''){
	   setErrorFor(password, 'Password cannot be blank'); 
	 }
	 else{
	   setSuccessFor(password);	 
	 }
	
	
}



//Functions
function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	
	small.innerText = message;
	formControl.className = 'form-control error';
}

function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


function isEmail(email){
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}


















