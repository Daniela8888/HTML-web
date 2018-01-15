
    $(document).ready(function($){
	var error=false;
	var persons= new Array();

	$("#btnOk").click(function(event) {
		var fname=$("#fname").val();
		if(fname.trim().length<2) {
			$("#errfname").html("Invalid first name");
			error=true;
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


	function printTable(){
		if(persons.length>0){
			var divTable=$('.table');
			var table=$("<table/>");
			var line=$("<tr/>");
			var col1=$("<th/>");
			$(col1).append('First name');
			var col2=$("<th/>");
			$(col2).append('Last name');
			var col3=$("<th/>");
			$(col3).append('Date of birth');
			var col4=$("<th/>");
			$(col4).append('Gender');
			var col5=$("<th/>");
			$(col5).append('Delete');
			line.append(col1);
			line.append(col2);
			line.append(col3);
			line.append(col4);
			line.append(col5);
			table.append(line);
			divTable.append(table);

		}
	}
