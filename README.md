
***Purpose***

This is a project that generates a password to meets the requirements of the criteria given to us. 

Code should have the following functionality:
1. Button prompting user to generate password
2. User asked to select required password criteria (
    min 8 char, Uppercase, losercase, numeric, and/or Special Char
)
3. Generated password displayed on page
##########   User Notes   ************

Files in Directory:
README.md
index.html
script.js
style.css

********** Developer Notes ***********

**PsudeoCode**

1) use getElementbyID, create variables to store html values
2) addEventListener on submit button and store resposes
3) Use innerText to change password inside EventLitsener
4) Create Function to build array of desired charcode values
5) Create Our charcode refrense arrays
6) Create a function that takes in User responses
6) Use If statements to check variable values;
	create array to store random chars
	randomchar var useing Math.floor and Math.random
	push random char to new array
	repeate for checked boxes
7) Use for loop to loop though lowercase charcodes;
	repeate using same method from If 
8) use concat to joint he array into a string
9) return password and link to step 3 to show on display

*** Functionaltiy ***

This code is good to generate a password between 1-50 characters
Need to add error if User Selects more boxes than number of characters
One Needed improvement is to allow user to ask for desired number of each type of character
The styling sheet was provided for this excerise and due to time restrains further build on the markup
Could use some more color?

***DEVELOPER***
BENI MAHAT


***DATE CREATED***
9/24/2020







