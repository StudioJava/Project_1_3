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

database.push(new Person("Mike","LeBlancb,","Tower-1"));
console.log(database);

function addUser(){
	let firstName = document.getElementById("inputUserName").value;
	let lastName = document.getElementById("inputUserEmail").value;
	let password = document.getElementById("inputUserPassword").value;
	database.push(new Person(firstName,lastName,password));
	console.log(database);
	window.open("logIn.html");
	clear();
}

//_____________
function clear(){
	document.getElementById("inputUserName").value = "";
	document.getElementById("inputUserEmail").value = "";
	document.getElementById("inputUserPassword").value = "";
}