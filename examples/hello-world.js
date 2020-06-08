//On an external .js file, this is how the code will look:

alert("Hello, World!");

//If using the external .js file, within the body of the html, you must include:
<script src="hello-world.js"></script>

//On an html file with the JavaScript in the code, it will be within <script></script> brackets:


<body>

  <h1>Hello, World!</h1>

  <script>
    alert("Hello, World!");
  </script>

</body>

//This particular next section relates to lesson 13 of javascript.md (else if statements)

var myAge = 26;  //the particular output of the code will depend on what the value of the variable myAge is.

if (myAge > 27) //the code takes the value of the variable and first compares it to the if statement. 
{
  document.write("you are over 27!"); //if the value matches the critera, it will write what is in quotes here.
}
else if (myAge > 20) //if the value of the variable does not match the first statement, it moves to the next else statement.
{
  document.write("you are over 20!"); //the process is repeated for as often as the value of the variable does not match.
}
else if(myAge > 10)
{
  document.write("you are over 10!");
}
else{
  document.write("you are not over 10!"); //until eventually the value finds an if else statement it matches with.
}

//the lone else in this case shows that any other value that does not match the first 3 qualifiers, will result in the output "you are not over 10!".

//Logical Operators
  //&&, 'and'

var myAge = 25;

if (myAge >= 18 && myAge <= 30) //the variable's value must be both over 18 and less than 30
{
  document.write("You can come!"); //In this case, the age is 25, which means they can come.
}
else //If the value of myAge were 18 or younger or 30 and over, the program would print "You can't come!"
{
  document.write("You can't come!");
}

  //||, 'or'

var myAge = 35;

if (myAge < 18 || myAge > 30)
{
  document.write("You can't come!");
}
else{
  document.write("You can come!");
}