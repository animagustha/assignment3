//accepts an array of numbers as an argument and returns their average.
var avgValue = function(numvalues) {
    var avg = 0,
        i, sum = 0;
    var arrlen = numvalues.length;
    for (i = 0; i < arrlen; i++) {
        sum += numvalues[i];
    }
    avg = sum / arrlen;
    document.write(avg);
};

//accepts an array of numbers as an argument and returns the largest number in the array.
var largest = function(numvalues) {
    var temp = 0,
        i;
    var arrlen = numvalues.length;
    for (i = 0; i < arrlen; i++) {
        if (temp < numvalues[i]) {
            temp = numvalues[i];
        }
    }
    document.write(temp);
};

//function that accepts an array of numbers and returns true if it contains at least one even number, false otherwise.
var evenOrOdd = function(numvalues) {
    var count = 0,
        i, bool = true;
    var arrlen = numvalues.length;
    for (i = 0; i < arrlen; i++) {
        if (numvalues[i] % 2 === 0) {
            count++;
        }
    }
    if (count > 0) {
        document.write(bool);
    } else {
        bool = false;
        document.write(bool);
    }
};

//function that accepts an array of numbers and returns true if every number is even, false otherwise.
var allEven = function(numvalues) {
    var count = 0,i, bool = true;
    var arrlen = numvalues.length;
    for (i = 0; i < arrlen; i++) {
        if (numvalues[i] % 2 === 0) {
            count++;
        }
    }
    if (count == arrlen) {
        document.write(bool);
    } else {
        bool = false;
        document.write(bool);
    }
};

//accepts two arguments—an array of strings and a string—and returns true if the string is contained in the array, false otherwise..
var arrayContains = function(heystack, needle) {
    var count = 0,i, bool = true;
    var arrlen = heystack.length;
    for (i = 0; i < arrlen; i++) {
        if (heystack[i] == needle) {
            count++;
        }
    }
    if (count > 0) {
        document.write(bool);
    } else {
        bool = false;
        document.write(bool);
    }
};

//function that is similar to the previous one, but returns true only if the array contains the given string at least twice
var arrayContainsTwo = function(heystack, needle) {
    var count = 0,i, bool = true;
    var arrlen = heystack.length;
    for (i = 0; i < arrlen; i++) {
        if (heystack[i] == needle) {
            count++;
        }
    }
    if (count > 1) {
        document.write(bool + "\(Array Contains Atleast 2 Times\)");
    } else {
        bool = false;
        document.write(bool + "\(Array Contains Atleast 2 Times\)");
    }
};

//function that is similar to the previous one, but returns true only if the array contains the given string three times
var arrayContainsThree = function(heystack, needle) {
    var count = 0,i, bool = true;
    var arrlen = heystack.length;
    for (i = 0; i < arrlen; i++) {
        if (heystack[i] == needle) {
            count++;
        }
    }
    if (count > 2) {
        document.write(bool + "\(Array Contains Atleast 3 Times\)");
    } else {
        bool = false;
        document.write(bool + "\(Array Contains Atleast 3 Times\)");
    }
};

//function that is similar to the previous one, but returns true only if the array contains the given string 'n' times
var arrayContainsNTimes = function(heystack, needle, num) {
    var count = 0,
        i, bool = true;
    var arrlen = heystack.length;
    for (i = 0; i < arrlen; i++) {
        if (heystack[i] == needle) {
            count++;
        }
    }
    if (count >= num) {
        document.write(bool + "\(Array Contains Atleast N Times\)");
    } else {
        bool = false;
        document.write(bool + "\(Array Contains Atleast N Times\)");
    }
};
//Largest Number using underscore.js
var largestUScore = function (numvalues) {
var temp = 0,i;
temp=_.max(numvalues);
document.write(temp);
return(temp);
};

//Contains Even Number underscore.js
var evenOrOddUScore = function (numvalues) {
var bool=true;
bool=_.some(numvalues,function(num,index,originalList){return num%2==0;});
document.write(bool);
};

//Contains all Even Number underscore.js
var allEvenUScore = function (numvalues) {
var bool=true;
bool=_.every(numvalues,function(num,index,originalList){return num%2==0;});
document.write(bool);
};
