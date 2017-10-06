var friends = ["John", "Dave", "Becky", "Ryan", "Steph"];
var line = line
for(var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    for (var j = 99; j > 0; j--) {
        if (j > 1) {
        console.log(" " +j + " lines of code in the file, " + j + " lines of code ; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file"); 
        }
        else if (j <= 1) {
            console.log(j + " lines of code in the file, " + j + " lines of code ; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " line of code in the file"); 
       }
   else {
        console.log(j + " line of code in the file, " + j + " line of code ; " + friends[i] + " strikes one out, clears it all out, " + " no lines of code in the file"); 
   }
}
}



