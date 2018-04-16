var str = "Hello world, welcome to the universe.";
var n = str.match(/worl234D/i);

if (n){
    document.getElementById("demo").innerHTML = 'Found';
} else {
    document.getElementById("demo").innerHTML = 'Not found';
}

