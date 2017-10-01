//TEST 1

//Task 1
var list = [['Senior software Engineer', 77600], ['Network Engineer', 51600], ['Systems Administrator', 38000], ['Software Engineer', 57600], ['Project Manager', 62300], ['IT Consultant', 45300]];

document.write('<b>Average Salary for Industry (IT)</b>' + '<br><br>'); //display the title of the array
document.write(list); //a direct way for displaying an array in JavaScript
document.write('<br>'); 

var sum = 0; //initialize a sum counter

for (var i=0; i<list.length; i++){
    //a second way of displaying an array with better visualization for the user 
    document.write('<br>' + list[i][0] + ', ' + list[i][1] + ' kr');
    sum += list[i][1]; //increase the sum counter with the corresponding wages
}

var avg = sum / list.length; //calculate average wages by dividing with the list's length
document.write('<br><br><b>Average: </b>' + avg + 'kr' + '<br><br>');


//Task 2
var copylist = list.slice(); //a copy of the list to not affect the initial list
copylist.sort(sortFunction); //call sortFunction
document.write('<br><b>Sorted by wages:</b>');
for (var i=0; i<list.length; i++){
    document.write('<br>' + copylist[i][0] + ', ' + copylist[i][1] + ' kr'); //not needed to display
}

//a function that returns 0, -1, 1 for the correspondig sorting according to the value of wages
function sortFunction(a,b){
    if (a[1]===b[1]){
        return 0;
    }
    else{
        return (a[1]<b[1])?1:-1;
    }
}

//Task 3
document.write('<br><br><b>Jobs with more than 50000 kr earnings:</b>')
for (var i=0; i<list.length; i++){
    if (list[i][1]>50000){
        document.write('<br>' + list[i][0]); //display only those jobs that earn more than 50000kr
    }
}