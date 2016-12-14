//function calls
window.onload = function () { 
	var message = Cookies.get('my_id') ||"Id is not set!";
	console.log("Id: "+ message);
	swal(message); 
};

// document.onreadystatechange = function () {
//   if (document.readyState == "interactive") {
//     swal("Here's a message!");
//   }
// }

// window.setTimeout(function() {
// 	console.log("Set timeout called");
// 	var my_team_id = Cookies.get('my_team_id') ||"team id not set";
// 	console.log("Team id "+ my_team_id);
// 	//alert(my_team_id);
// 	//swal("Hello world!");
// }, 3000);