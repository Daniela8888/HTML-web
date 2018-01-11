$(document).ready(function(){
	$("#btnOk").click(function(event) {
		var error=false;
		var fname=$("#fname").val();
		if(fname.trim().length<2) {
			$("#errfname").html("Invalid first name");
			eroor=true;
		}
		var lname=$("#lname").val();
		if(lname.trim().length<2){
			console.log("menej ako 2");
			$("#errlname").html("Invalid last name");
			error=true;
		}
		var bday=new Date($("#birthday").val());
		console.log(bday);
	}
}



    
function changeBirthday()
{
var birthdate=document.getElementById("brith").value; 
var bd = new Date(birthdate);
var day = bd.getDate();
var month = bd.getMonth()+1;
var year = bd.getFullYear();

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

var age= yyyy-year;
if(month>mm)
    document.getElementById("vys").value=age-1;
else if(month<mm) 
    document.getElementById("vys").value=age;
else if(month==mm)
    {
        if(day>=dd)
        document.getElementById("vys").value=age-1;
        else
        document.getElementById("vys").value=age;
    }
if(age<=0)
    {
document.getElementById("firsterr").innerHTML='You havent been born yet!';
     
    }
else{
 document.getElementById("firsterr").innerHTML="";   
}

var age;
if(currMonth>month)
  age = currYear-year+1; 


    
}