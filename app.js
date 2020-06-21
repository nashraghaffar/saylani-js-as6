                                        
                                        
                                        
                                        //chapter21-25



// TASK 01

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname= firstname+" "+lastname;
// alert("Welcome"+" "+fullname);


// TASK 02

// var mobile = prompt("Enter your favourite mobile phone model:");
// var los = mobile.length;
// document.write("My favourite mobile phone is:"+" "+mobile);
// document.write("<br> Length of string:"+" "+los);


// TASK 03

// var word = "Pakistani";
// document.write("String:"+" "+word);
// document.write("<br> The position of n is:"+" "+word.indexOf("n"));


// TASK 04

// var a = "Hello World";
// document.write("String:"+" "+a);
// document.write("<br> Last index of l is:"+" "+a.lastIndexOf("l"));


// TASK 05

// var word = "Pakistani";
// document.write("String:"+" "+word);
// document.write("<br>Character at index 3:"+" "+ word[3]);


// TASK 06

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname = firstname.concat(lastname);
// alert("Welcome"+" "+fullname);


// TASK 07

// var city = "Hyderabad";
// var rep = city.replace("Hyder", "Islam");
// document.write("City:"+" " +city);
// document.write("<br> After replacement:"+" " + rep);


//TASK 08

// var text = "Ali and Sami are best friends. They play cricket and football together"
// var rep =text.replace(/and/g, "&");
// document.write(rep);


//TASK 09

// var numstr ="472";
// document.write("Value : "+ numstr+"<br>"+"type : ");
// document.write(typeof numstr);
// var numint =Number(numstr);
// document.write("<br>Value : "+ numint+"<br>"+"type : ");
// document.write(typeof numint);


//TASK 10

// var inp = prompt("Enter lowercase input:");
// document.write("User input : "+inp);
// var casechange =inp.toUpperCase();
// document.write("<br> Upper case : "+casechange);


//TASK 11

// var inp = prompt("enter lowercase input");
// document.write("User input : "+inp+"<br>");
// var a= inp.slice(0,1);
// var a = a.toUpperCase();
// //document.write(a);
// var inp =inp.slice(1,inp.length);
// var b= a.concat(inp);
// document.write("<br>Titel case : "+b);



//TASK 12
 
// var num =35.36;
// document.write("Number : "+num)
// var str =num.toString()
// var c =str.replace(".","");
// document.write("<br> Result  : "+c)



//TASK 13

// var name = prompt("Enter your name:");
// for (var i = 0; i < name.length; i++) {
// 	a = name.charAt(i)
// 	a=a.charCodeAt(0)
// 	if (a ==33 || a==44 || a==46 || a==64){
// 		alert("Enter a valid username !");
// 	}
// }



//TASK 14

// var items=["cake","apple pie","cookie","chips","patties"]
// document.write(items+"<br>")
// var order = prompt("Welcome to our bakery !! What do you want to order sir/ma'am ?? ")
// order=order.toLowerCase()
// function find(order){
// 	for (var i =0 ; i< items.length; i++){
// 	if (items[i]==order) {
// 		document.write(items[i]+" item is <strong>avaliable</strong> at index "+i+" in our bakery")
// 		return;
// 	}
// }
// document.write("we are sorry "+order+" is <strong>not avaliable</strong> in our bakery")
// }
// find(order)



//TASK 15

// var a = prompt("Enter Password<br>");
// pswrdcheck(a);
// function pswrdcheck(a){
// 	var b= a.slice(0,1)
// 	b=b.charCodeAt(0)
// 	var c = a.length
// 	var cont = 1
// 	str =false;
// 	int =false;
// 	if (b >= 48 && b<=57) {
// 		document.write("Password can not begin with a number<br>Please Enter a valid password");
// 		return;
// 	}
// 	else if (c<6){
// 		document.write("Password is short<br>Please Enter a valid password");
// 		return;
// 	}
// 	for (var i = 1; i < a.length; i++){
// 		var d =a.charAt(i)
// 		if (d >= 48 && d<=57) {
// 			int = true;
// 		}
// 		if (d>= 65 && d <=90 || d>=97 || d<=122 ) {
// 			str = true
// 		}
// 	}
// 	if (!str && !int) {
// 		document.write("Password must contain Alphabet and Number both<br>Please Enter a valid password")
// 		return
// 	}
// }



//TASK 16

// var university ="University of Karachi";
// var str = []
// var str =university.split('');
// for (var i = 0; i < str.length; i++) {
// 	document.write(str[i]+"<br>")
// }


//TASK 17

// var a = prompt("Enter input");
// document.write("User Input: "+a)
// var b= a.charAt(a.length-1)
// document.write("<br>last Character of input : "+b)


//TASK 18

// var a ="the quick brown fox jumps over the lazy dog"
// document.write("there are "+a.match(/the/g).length+" occurences of word the")








                                            // //chapter 26 -30



//TASK 01

// var a =+prompt("Enter an number")
// document.write("number : "+a)
// document.write("<br>round off value : "+Math.round(a));
// document.write("<br>floor value : "+Math.floor(a));
// document.write("<br>ceil value : "+Math.ceil(a));

 

//TASK 02

// var a =+prompt("Enter an number")
// document.write("number : "+a)
// document.write("<br>round off value : "+Math.round(a));
// document.write("<br>floor value : "+Math.floor(a));
// document.write("<br>ceil value : "+Math.ceil(a));



//TASK 03

// var a = +prompt("Enter negative number")
// var b = Math.abs(a)
// document.write("The absolute value of "+a+" is " +b)



//TASK 04

// var x = Math.floor((Math.random() * 7) + 1);
// document.write("random dice value : "+x)


//TASK 05

// var a = Math.floor((Math.random() * 2) + 1);
// if (a==2){
// 	document.write(a+"<br>random coin value : Heads")
// }
// else{
// 	document.write(a+"<br>random coin value : Tails")
// }


// //TASK  06

// var a = Math.floor((Math.random() * 100) + 1);
// document.write("random number between 1 and 100 : "+a)



// //TASK 08

// var a = Math.floor((Math.random() * 10) + 1);
// var b =prompt("Input a number")
// if (a==b){
// 	document.write("Congragulation  you gess the same number")
// }











                                                        // //chapter 31-34


// //TASK 01

// var a = new Date();
// document.write(a)


// //TASK 02

// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current Month : "+arr[b])



// //TASK 03

// var a = new Date();
// var b =a.getDay()
// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// alert("today is "+arr[b]);


// //TASK 04

// var a = new Date()
// var d = a.getDay()
// if (d==0 || d==6){
// 	alert("It’s Fun day")
// }


// //TASK 05

// var a = new Date();
// var b = a.getDate();
// if (b<16){
// 	alert("First fifteen days of the month")
// }
// else{
// 	alert("Last days of the month")
// }


// //TASK 06

// var a = new Date()
// document.write("Current Date : "+a)
// var b= a.getTime()
// document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
// var min = b/(1000*3600)
// document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)


// //TASK 07

// var a = new Date()
// b=a.getHours()
// if (b < 12){
// 	alert("Its AM")
// }
// else{
// 	alert("It's PM")
// }


// //TASK 08

// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)


// //TASK 09

// var a = new Date("Jun 18, 2015")
// b=a.getTime()
// var today = new Date()
// var tomili = today.getTime()
// var d = tomili-b
// d=d/(1000*3600*24)
// //d=Math.round(d)
// document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")


// //TASK 10

//  var start = new Date("Jan 01, 2015")
//  var startsec = start.getTime()
//  var end = new Date("Dec 05, 2015")
//  var endsec = end.getTime()
//  document.write("On reference date "+end+"<br>")
//  var dif = endsec-startsec;
//  document.write(dif/(1000*60)+" seconds had passed since begining of 2015")


// //TASK 11

// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getHours()
// var d = new Date();
// a=ab-1
// d.setHours(a)
// document.write("1 hour ago, it was "+d)


// //TASK 12

// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getFullYear()
// var d = new Date();
// a=ab-100
// d.setFullYear(a)
// document.write("100 year back, it was "+d)


// //TASK 13

// var age = prompt("enter your age")
// var a = new Date()
// var year = a.getFullYear()
// document.write("Your age is "+age)
// dif=year-age
// document.write("<br>Your birth year is "+dif)


// //TASK 14

// var name ="XYZ";
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = arr[b]
// var unit = 410
// var chrg = 16
// var net = unit*chrg
// var late =350
// var gross =net +late
// document.write("<h1>K-Electric Bill </h1>")
// document.write("<br>Customer Name  "+name)
// document.write("<br> Current Month "+month)
// document.write("<br>  Number of units "+unit)
// document.write("<br> Charges per unit "+chrg+"<br>")
// document.write("<br>Net Amount Payable (within Due Date) "+net)
// document.write("<br>Late Payment Surcharge  "+late)
// document.write("<br>Gross Amount Payable (after Due Date)  "+gross)









                                                    // //chapter 35-38


// //TASK 01

// function dateandtime(){
// 	var a = new Date()
// 	alert(a)
// }
// dateandtime()


// //TASK 02

// var a = prompt("Enter your First Name")
// var b = prompt("Enter your last Name")
// Name(a,b)
//  function Name(a,b){
//  	document.write("Hello "+a+" "+b)
//  }
 


//  //TASK 03

//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// document.write(Add(a,b))
//  function Add(a,b){
//  	return a+b;
//  }
 


//  //TASK 04

//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// var c = prompt("Enter Character")
// document.write(Calculator(a,b,c))
// function Calculator(a,b,c){
// 	if (c=="+") {
// 		return a+b
// 	}
// 	else if (c=="-") {
// 		return a-b
// 	}
// 	else if (c=="/") {
// 		return a/b
// 	}
// 	else if (c=="%") {
// 		return a%b
// 	}
// }



// //TASK 05

//  var a = +prompt("Enter number")
// Square(a)
//  function Square(a){
//  	document.write(Math.pow(a,2))
//  }
 

// //TASK 06
//  var a = +prompt("Enter number")
//  document.write(Factorial(a))
//  function Factorial(n) { 
//             if (n === 0) {  
//                 return 1;  
//             } 
//             else {  
//                 return n * Factorial( n - 1 );  
//             } 
//  }
 


//  //TASK 07

//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// Counting(a,b)
// function Counting(a,b){
// 	for (var i = a; i <= b; i++){
// 		document.write(i+"<br>")
// 	}
// }


// //TASK 08

// function hypotenuse(a, b) {
//                function square(x) { return x*x; }
//                return Math.sqrt(square(a) + square(b));
// }
// document.write(hypotenuse(1,2))


// //TASK 09

// var a = +prompt("Enter width")
// var b = +prompt("Enter height")
// function CalculatesArea(w,h){
// 	document.write("<br>Area of Rectangle : "+(w*h))
// }
// CalculatesArea(a,b)
// CalculatesArea(8,4)


// //TASK 10

// function palindrome(str){
// 	var splitString = str.split("");
// 	var reverseArray = splitString.reverse();
// 	var joinArray = reverseArray.join("");
// 	if (str == joinArray){
// 		document.write("String is palindrome")
// 	}
// 	else{
// 		document.write("String is not palindrome")
// 	}
// }
// palindrome("mad")
// palindrome("madam")


// //TASK 11

// var a ="the quick brown fox";
// UppperCase(a);
// function UppperCase(str){
// 	document.write("Example String : " +str+"<br>")
// 	x=str.slice(0,1)
// 	y=x.toUpperCase()
// 	var sttr= str.split('')
// 	for (var i = 0; i < sttr.length; i++) {
// 		if (sttr[i] == ' '){
// 			j=i+1
// 			k=sttr[j].toUpperCase()
// 			sttr[j]=k
// 		}
// 	}
// 	sttr[0]=y
// 	var abc =sttr.join("")
// 	document.write("Expected Output : "+abc)
// }


// //TASK 12

// var a="Web Development Tutorial"
// LongestWord(a)
// function LongestWord(str){
// 	var ar =str.split('')
// 	var b =1
// 	var arr=[0]
// 	var word=[]
// 	var count =[]
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i] == ' ') {
// 			arr[b]=i
// 			b+=1
// 		}
// 	}
// 	arr[b]=ar.length
// 	b=0
// 	//document.write(arr)
// 	for (var i = 0; i < arr.length-1; i++) {
// 		j=i+1
// 		word[b]=str.slice(arr[i],arr[j])
// 		b=b+1
// 	}
// 	b=0
// 	//document.write("<br>"+word)
// 	for (var i = 0; i < word.length; i++) {
// 		if (b ==0){
// 		count[b]=word[b].length
// 		b=b+1
// 	}
// 	else{
// 		count[b]=word[b].length-1
// 		b=b+1
// 	}
// 	}
// 	//document.write("<br>"+count)
// 	var max =Math.max(...count)
// 	//document.write(" <br>"+max)
// 	var ind =count.indexOf(max)
// 	document.write("EXAMPLE STRING : "+str)
// 	document.write("<br>EXPECTED OUTPUT : "+word[ind])
// }


// //TASK 13

// function Occurrences(a,b){
// 	a=a.toLowerCase()
// 	var ar= a.split('')
// 	var count =0
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i]==b) {
// 			count+=1
// 		}
// 	}
// 	document.write("Occurrences of letter "+b+" is : "+count)
// }
// Occurrences("JSResourceS.com","o")


// //TASK 14

// function calcCircumference(r){
// 	var a = Math.PI
// 	var circum = 2*a*r
// 	document.write("The circumference is : "+circum+"<br>")
// }
// function calcArea(r){
// 	var a = Math.PI
// 	ra =Math.pow(r,2)
// 	var area =a*ra
// 	document.write("The area is : "+area)
// }
// calcCircumference(2)
// calcArea(2)
// 