# _Mr. Roboger's Neighborhood_

#### _This project utilizes all of the concepts we have learned thus far in Epicodus, and includes - HTML/CSS/Bootstrap/JavaScript/and JQuery. The goal is to allow the user to enter a numerical input and receive an output response._

#### By _**David Cole**_

## Description

_The purpose of this project is to solidify concepts of looping and modifying arrays. In addition, previous concepts drawn from past sections are utilized in order to meet the project requirements. This user will be prompted to enter a numerical value which will be manipulated in the form of an array. The business logic of the scripts.js file will handle parsing through the array and making necessary changes in order to output an appropriate message to the user._

## Specs

* Spec: The program continues to prompt the user for input in the even they enter a non-numerical character
  * Input: "Dav"
  * Output: "Please enter a valid numerical input"
* Spec: The program returns a range of numbers from 0 to the users inputted number
  * Input: "4"
  * Output: "0, 1, 2, 3, 4"
* Spec: The program replaces ALL instances of the number 1 with "Beep!"
  * Input: "11"
  * Output: "Beep!, Beep!"
* Spec: The program replaces ALL instances of the number 2 with "Boop"
  * Input: "22"
  * Output: "Boop, Boop"
* Spec: The program replaces ALL instances of the number 3 with "Won't you be my neighbor?"
  * Input: "33"
  * Output: "Won't you be my neighbor?, Won't you be my neighbor?"
* Spec: The change to number 3 will take precedence over the changes to 1 & 2. Those changes will be ignored.
  * Input: "123"
  * Output: "Won't you be my neighbor?"
* Spec: The change to Number 2 will take precedence over the changes to 1
  * Input: "12"
  * Output: "Boop"
* Spec: The user is able to enter a new number and see new results over and over.
  * Input: "5"
  * Output: "'0', 'Beep!', 'Boop', 'Won't you be my neighbor', '4', '5'"/(refresh page to allow the user to input a new number.)

## Setup/Installation Requirements

* _In your web browser, navigate to [dcole505 mr-robogers repository](https://github.com/dcole505/mr-robogers)_
* _In terminal, type '$ git clone https://github.com/dcole505/mr-robogers.git' To clone the project from GitHub onto your local machine_
* _Navigate to the file folder that contains the GitHub repository you've cloned._
* _Right click on the .HTML file and open it in your web browser to view_
* _or_
* _Open the file in the IDE of your choice to make changes to the file._

## Known Bugs

__

## Support and contact details

_For bugs or other issues please contact: David Cole - davidtcole@yahoo.com_

## Technologies Used

_This project was created using HTML/CSS/Bootstrap/JavaScript/JQuery and GitHub._

### License

Copyright <2020> <David Cole>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.