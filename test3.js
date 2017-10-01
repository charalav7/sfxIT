//Test 2
//Create an array with objects
var list = [{
    number: "710121-1234",
    swedish: "P",
    english: "P"
}, {
    number: "720122-2345",
    swedish: "F",
    english: "F"
}, {
    number: "730123-3456",
    swedish: "P",
    english: "P"
}, {
    number: "810124-4567",
    swedish: "P",
    english: "F"
}, {
    number: "820125-5678",
    swedish: "F",
    english: "F"
}, {
    number: "830126-6789",
    swedish: "F",
    english: "F"
}, {
    number: "840127-7890",
    swedish: "P",
    english: "P"
}, ];

//document.write('Write: ' + list[0].number);

//Task 1
document.write('<b>The student that have either passed english or swedish are:</b><br>');
for (var i = 0; i < list.length; i++) {
    if (list[i].swedish === "P" || list[i].english === "P") {
        document.write(list[i].number + '<br>');
    }
}

//Task 2
document.write('<br><b>The student that have passed both english and swedish are:</b><br>');
for (var i = 0; i < list.length; i++) {
    if (list[i].swedish === "P" && list[i].english === "P") {
        document.write(list[i].number + '<br>');
    }
}

//Task 3
document.write('<br><b>The student that have failed are:</b><br>');
for (var i = 0; i < list.length; i++) {
    if (list[i].swedish === "F" && list[i].english === "F") {
        document.write(list[i].number + '<br>');
    }
}

//extra task (include all the tasks in 1 iteration)
var orPass = new Array();
var andPass = new Array();
var notPass = new Array();
for (var i = 0; i < list.length; i++) {
    if (list[i].swedish === "P" || list[i].english === "P") {
        orPass.push(list[i].number); //add to the array with push
        if (list[i].swedish === "P" && list[i].english === "P") {
            andPass.push(list[i].number);
        }
    } 
     else {
        notPass.push(list[i].number);
    }
}
document.write('<br><b>One of two passed:</b><br>')
for (var i = 0; i < orPass.length; i++) {
    document.write(orPass[i] + '<br>');
}
document.write('<br><b>Both passed:</b><br>')
for (var i = 0; i < andPass.length; i++) {
    document.write(andPass[i] + '<br>');
}
document.write('<br><b>Failed:</b><br>')
for (var i = 0; i < notPass.length; i++) {
    document.write(notPass[i] + '<br>');
}
