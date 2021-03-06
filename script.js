(function($) {
    var error = false;
    var persons= new Array();

    $("#btn").click(function(event){
        var fName = $("#fName").val();
        if(fName.trim().length<2){
            $("#errfname").html("Invalid first name");
            error = true;
        }
        else {
            $("#errfname").html("");
        }

        var lName = $("#lName").val();
        if(lName.trim().length<2){
            $("#errlname").html("Invalid last name");
            error = true;
        }
        else {
            $("#errlname").html("");
        }

        $("#fName").keyup(function(){
            var fName = $("#fName").val();
            if(fName.trim().length>1){
                $("#errfname").html("");
            }
        });
        $("#lName").keyup(function(){
            var lName = $("#lName").val();
            if(lName.trim().length>1){
                $("#errlname").html("");
            }
        });


        (function compareDate(){

            var setDate = new Object();
            setDate.date = $("#compareDate").val();

            var date = new Date();
            var month = (date.getMonth()+1);
            if (month < 10){
                var val = date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+date.getDate();
            }
            else{
                var val = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            }

            if(setDate.date > val){
                $("#errDate").html("Invalid birth date");
                error = true;
            }
            else {
                $("#errDate").html("");
            }

            $("#compareDate").keyup(function(){
                var cDate = $(this).val();
                if(cDate < val){
                    $("#errDate").html("");
                }
                else 
                    $("#errDate").html("Invalid birth date");
            });

            $("#compareDate").change(function(){
                var cDate = $(this).val();
                if(cDate < val)
                    $("#errDate").html("");
                else
                    $("#errDate").html("Invalid birth date");
            });
        
        })();

        if(error === false){
            function data(){
                var person = new Object();
                person.fname = $("#fName").val();
                person.lname = $("#lName").val();
                person.date = $("#compareDate").val();
                person.gender = $("input[name='gender']:checked").val();
                console.log(person);
                persons.push(person);
                printTable();
            };
            data();

            function printTable(){
                var selectedGender = getSelectedGender();
                var arr=new Array();
                persons.forEach(function(obj){
                    if(selectedGender=='m' && obj.gender==true){
                        arr.push(obj);
                    }
                    if(selectedGender=='f' && obj.gender==false){
                        arr.push(obj);
                    }
                    if(selectedGender=='a'){
                        arr.push(obj);
                    }
                });
                }


                if(persons.length>0){
                    var divTable=$('.table');
                    divTable.empty();
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
                    line.append(col3);
                    line.append(col3);
                    line.append(col4);
                    line.append(col5);
                    table.append(line);
                    divTable.append(table);
                }
                //for(i=0;i<persons.size();i++)();
                persons.forEach(function(obj){
                    var line=$("<tr/>");
                     var col1=$("<td/>");
                    $(col1).append(obj.firstname);
                    var line=$("<tr/>");
                     var col2=$("<td/>");
                    $(col2).append(obj.lastname);
                    var line=$("<tr/>");
                     var col3=$("<td/>");
                    $(col3).append(obj.dob);
                    var line=$("<tr/>");
                     var col4=$("<td/>");
                    $(col4).append(obj.gender);
                    line.append(col1);
                    line.append(col3);
                    line.append(col3);
                    line.append(col4);
                    table.append(line);

                })

            }

            function getSelectedGender(){
                var value = $("#getSelectedGender").val();
                return value;

            }
        }
        error = false;

    });

    var wdth = $(".getSizeFromInput").css("width");
    $(".setSize").css({"width" : wdth});

})(jQuery);