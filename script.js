
var totalCost = 16.99;
//var sizeOfParty = process.argv[2];
//var averageCost = totalCost/sizeOfParty;
//console.log ("$" + averageCost);
//console.log (typeof averageCost);


var x = 3, y = 2.5, z = "3";
var result = x > y;
var answer = x + z;
console.log(answer);
console.log(typeof answer);
console.log (result);
console.log (typeof result);
console.log (typeof y);
console.log (typeof z);
console.log (typeof console);

/* Code goes here

var dog = {
	name: "Charlie",
	breed: "Mix",
	weight: 12,
	color: "Brown"
};

var dogWeight = dog.weight;
//alert(dogWeight);

dog.disposition = "wonderful"
var disp = dog.disposition;
//alert (disp)

var newArray = []
newArray [1] = 1
newArray [2] = 2
newArray [3] = 3
//alert (newArray)

var myArray = [1, "hello", true, false]
var myThirdArray = myArray[2]
//alert (myThirdArray)

var myArrayLength = myArray.length 
//alert (myArrayLength)

function range (max){
	var retVal = []
	for (var i = 0; i < max; i++)
	{
		retVal.push (i * 2)
	}

	return retVal
}
var iArray = range (7)
for (var i=0; i < iArray.length; i++){
	//alert (iArray [i])
}

var string1 = "I'm now a professional at"
var string2 = ' developing websites and mobile apps. My zip code is 33160-0125'
var string3 = string1 + string2
var stringArray = string3.split(" ")
//alert (stringArray)

var indexOfProfessional = string3.indexOf('professional')
var indexOfMobile = string3.indexOf('mobile')
var stringRange = string3.slice(indexOfProfessional, indexOfMobile)
//alert (stringRange)

var offSetSearch = string3.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/)
alert (offSetSearch)




/*
var constant = 32;

function celsiusToFarenheit (temperature) {
	var farenheitTemp = temperature * 9 / 5 + constant;
	return farenheitTemp;
}

output.innerHTML = celsiusToFarenheit(100);

function func1(num, exp) {
	if (exp === 0){
		return 1;
	}
  return num * func1(num, exp-1);
}

function nonRecursiveFunc(num, exp){
	var retVal = 1;
	for (var i = 0; i < exp; i++)
	{
		reVal *=num;
	}
	return retVal;
}

var answer = nonRecursiveFunc(2,10);
output.innerHTML = answer;
/*
var myFirstName = "Osarumwense";
var myLastName = "Ogbebor";
var myFullName = ("This is" + " " + myFirstName + " " + myLastName + "\'s" + " " + "codes");
alert (myFullName)

var z = add (3,5);

function add (x,y) {
	return x + y;
}

//var sum = add (5,9);
// sum2 = add (3,9);
//alert (sum)
output.innerHTML = z;


/*
var age = Number(prompt("What is your age? ", "Please enter the number of your age"));

var string = "";
for (var counter = 1; counter < age; counter+= 1)
{
	string += "Happy Birthday \n";
	if (counter % 7 == 0)
		break;
}

var x = 5;
var y = x < 10 ? x : 10;



var isFemale = true;
var isOld = true;
var isOldAndFemale = isFemale && isOld;
alert (isOldAndFemale);



var animal = "dog";
switch (animal)
{
	case "cat":
		alert ("meow");
		break;
	case "dog":
		alert ("woof");
		break;
	case "horse":
		alert ("whinny");
		break;
	default:
		alert ("Unknown animal!");
		break;
}




alert (string);

if (age < 40) {

	alert ("You\'re so young");
}
else  if (age == 40)
	{
		alert ("Hey, you're 40 years old!");
	}

else {

	alert ("You're over 40 years old, don\'t worry you\'re young at heart")
}
*/
