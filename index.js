
var nam = prompt("Enter you name");
alert("Hello "+ nam);

  // document.write("<font align=center size=20  color=green> Did you satisfy with our results </font></br></br>");

var roll = prompt("Enter your roll number");
var mt = +prompt("Enter your math numbers");
var eco = +prompt("Enter your economic numbers");
var eg = +prompt("Enter your english numbers");
var urd = +prompt("Enter your urdu numbers");
var cg = +prompt("Enter your geography numbers");
var total = (500);
var obt =(mt + eco + eg + urd + cg );
console.log(obt);

var perc = (obt/total)*100;

var grade;

     if( perc >= 0 && perc <= 100){

     if (perc >= 80 ) {
         grade="Grade : A+";
     } else if (perc >= 70) {
        grade="Grade : A";
     } else if (perc >= 60) {
        grade="Grade : B";
     } else if (perc >= 50) {
        grade="Grade : C";
     } else if (perc >= 40) {
        grade="Grade : D";
     }
    
     else {
        grade="Fail";
     }

 }else{
     alert(" invalid data check marks again");
    document.write("invalid data"); }
   

document.write('<table border = "1" width=600 align=center><tr><th>Name : </th>+<th>Roll no:</th><th>Percentage: </th><th>Grade: </th><th>Obtain: </th></tr>'+'<tr><td>'+nam+'</td>'+'<td>'+roll+'</td>'+'<td>'+perc+'</td>'+ '<td>'+grade +'</td>'+'<td>'+obt+'</td></tr></table>');
                                                                                                                                                               





    
     