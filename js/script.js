/**
 * Conditionals_wacky Created by Phirom Yim on 4/17/14.
 */
/* //Using Conditionals and Logical Operators to find out
the best times to call my sister who is on a work trip
in Switzerland from where I live in Buffalo, New York*/

//Create a variable to determine the time difference in both countries
var timeDiff = 6;
//input user prompt of time in using 1-24 scale
var est = Number(prompt("What time is it in Buffalo, NY in military time?"));
//create variable to equal switzerland time
//Eastern Standard Time plus 6 hours is equal to what time it is in Switzerland
var switz = est + timeDiff;
//create variable to set earliest time that a call can be made from NY
var earliestTime = 9;
//create variable to set latest time that a call can be made from NY
var latestTime = 24;
//if both conditions are true print to console
if(switz < latestTime && switz > earliestTime ){
    console.log("Call your sister, she's up!");
    //code performed if true
    alert ("Call your sister, she's up!");
    //create alert if code is true
}else{
    console.log("Don't even think about picking up that phone, she's sleeping!");
    //code performed if false
    alert ("Don't even think about picking up that phone, she's sleeping!")
}
//