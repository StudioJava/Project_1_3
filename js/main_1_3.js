// JavaScript Document
/*Database*/
let database = [];
function Person(first,last,passWord){
	this.firstName = first;
	this.lastName = last;
	this.password = passWord;
	this.fullName = function(){
		return this.firstName = " " + this.lastName;
	};
}

//database.push(new Person("Mike","LeBlancb,","Tower-1"));
//console.log(database);

function addUser(){
	let firstName = document.getElementById("inputUserName").value;
	let lastName = document.getElementById("inputUserEmail").value;
	let password = document.getElementById("inputUserPassword").value;
	database.push(new Person(firstName,lastName,password));
	document.getElementById("section-1").style.display = "none";
	animation();
	//showSection();
	
	console.log(database);
	//window.open("logIn.html");
	clear();
}

//_____________
function clear(){
	document.getElementById("inputUserName").value = "";
	document.getElementById("inputUserName2").value = "";
	document.getElementById("inputUserEmail").value = "";
	document.getElementById("inputUserPassword").value = "";
	document.getElementById("inputUserPassword2").value = ""
}

//------------ SHOW PAGE
var x;
function animation(){
	x = setTimeout(showSection,1000);
}
function showSection (){
	//document.getElementById("section-1").style.display = "none";
	//document.getElementById("section-2").style.display = "block";
	document.getElementById("section-3").style.display = "block";
	document.getElementById("body").style.backgroundColor = "#923B98";
}
//animation();
//_____________>>>>>>>>>>>>
// Checking credentials

function checkCredentials(){
	let userName = document.getElementById("inputUserName2").value;
	let userPassword = document.getElementById("inputUserPassword2").value;
	if(userName === database[0].firstName && userPassword === database[0].password){
		document.getElementById("displayMessage").innerHTML = "it Matched the records!!!";
		//alert("it Matched the records!!!");
	}else{
		//alert("Credential did not match records!!!");
		document.getElementById("displayMessage").innerHTML = "Your information not matching our records!!!";
	}
clear();
}