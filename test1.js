var list = [['Lars', 42], ['Sara', 16], ['Tomas', 36], ['Martin', 27], ['Lena', 35], ['Bo', 28], ['Hanna', 42], ['Jan', 59], ['Pelle', 41]];
var list2 = list.slice(); //a copy of the list

//document.write(list[0][0]);
var sum = 0;

//1 (finding average)
for (var i=0; i<list.length; i++){
    sum += list[i][1];
}
var avg = sum / list.length;
document.write('Average: ' + avg + '<br><br>');

//2 (print only if age > 25)
document.write('People aged > 25: <br>');
for (var i=0; i<list.length; i++){
    if (list[i][1]>25) {
        document.write(list[i][0] + '<br>');
    }
}

//3 (print the reversed sorted list)
//one way
/*list.sort();
list.reverse();
for (var i=0; i<list.length; i++){
    document.write('<br>' + list[i][0] + ', ' + list[i][1]);
}*/

//other way
list.sort(sortFunction);
document.write('<br>Reversed sorted by name:');
for (var i=0; i<list.length; i++){
    document.write('<br>' + list[i][0] + ', ' + list[i][1]);
}

function sortFunction(a,b){
    if (a[0]===b[0]){
        return 0;
    }
    else{
        return (a[0]<b[0])?1:-1;
    }
}

//4 (finding max age)
var maxValues = listMax(list2);
document.write('<br><br>' + 'Max value: ' + maxValues[0] + ', Position of max: ' + maxValues[1]);

function listMax(arr){
    var max = arr[0][1];
    var pos = 0;
    for (var i = 1; i<arr.length; i++){
        if (arr[i][1]>max){
            max = arr[i][1];
            pos = i;
        }
    }
    return [max,pos];
}

