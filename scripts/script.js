function handleOnFocus(x){
	x.style.backgroundColor="yellow";
}
function handleOnBlur(x){
	x.style.backgroundColor="white";

}



var username = document.getElementById('username');
var password = document.getElementById('password');

var username_error = document.getElementById('username_error');
var password_error = document.getElementById('password_error');


function validated(){	

	if(username.value == "" && password.value == ""){
        username_error.style.color="red"
        password_error.style.color="red"
		username_error.style.display = "block";
		password_error.style.display = "block";
		
		return false;
	}

	else if (username.value == "") {
        username_error.style.color="red"
		username_error.style.display = "block";
		password_error.style.display = "none";

		return false;
	}
	else if (password.value == "") {
		password_error.style.color="red"
		password_error.style.display = "block";
		username_error.style.display = "none";
		
		return false;
	}else{
		return true;
	}

}

/* ................................................................................ */

var urname = document.getElementById('urname');
var email = document.getElementById('email');
var topic = document.getElementById('topic');
var subject = document.getElementById('subject');
var feedback = document.getElementById('feedback');

var urname_error = document.getElementById('urname_error');
var email_error = document.getElementById('email_error');
var topic_error = document.getElementById('topic_error');
var subject_error = document.getElementById('subject_error');
var feedback_error = document.getElementById('feedback_error');
var nodigit_error = document.getElementById('nodigit_error');
var emailreg_error = document.getElementById('emailreg_error');



var i = [0, 0, 0, 0, 0];

function handleOnKeyup(){
	var reg=/[0-9]/gi;
if(urname.value.match(reg)){
 nodigit_error.style.color="red"
		nodigit_error.style.display = "block";
				return "0";
}else{
nodigit_error.style.display = "none";
	return "1";
			
}		
}

function emailValidated(){
var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(email.value.match(regex)){
 emailreg_error.style.display = "none";
	return "1";
			
}else{
	emailreg_error.style.color="red"
		emailreg_error.style.display = "block";
				return "0";

}
	}

function validatedFeedback(){
	
	if(urname.value ==""){

        urname_error.style.color="red"
		urname_error.style.display = "block";
		i[0]=1;
		
	}else{
		urname_error.style.display = "none";
			i[0]=0;
	}




	if(email.value ==""){

        email_error.style.color="red"
		email_error.style.display = "block";
		i[1]=1;
		
	}


	else {
		email_error.style.display = "none";
		i[1]=0;

}

		if(topic.value =="Please select a topic..."){

        topic_error.style.color="red"
		topic_error.style.display = "block";
			i[2]=1;
		
	}else{
		topic_error.style.display = "none";
		i[2]=0;
	}




	if(subject.value ==""){

        subject_error.style.color="red"
		subject_error.style.display = "block";
			i[3]=1;
		
	}else{
		subject_error.style.display = "none";
		i[3]=0;
	}



	if(feedback.value ==""){

        feedback_error.style.color="red"
		feedback_error.style.display = "block";
			i[4]=1;
		
	}else{
		feedback_error.style.display = "none";
		i[4]=0;
	}
	


for (index = 0; index < i.length; index++){
	if(i[index] > 0){
		return "0";
	}
}
				


return "1";
		

}



function validatedFeedbackAll(){

var a=validatedFeedback();
var b=handleOnKeyup();
var c=emailValidated();
if(a == "0" || b == "0" ||c == "0"){
	return false;
}else{
	return true;
}
}

