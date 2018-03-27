var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

// console will log undefined in this case
// variable declarations get hoisted to the top of the function scope
// code gets interpreted like this

var text = 'outside';
function logIt(){
    var text;
    console.log(text);
    text = 'inside';
};
logIt();

// in this case text is just a variable declaration so if you try to console log it, it will be undefined