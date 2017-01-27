var object= {
  name: 'Vinay',
  address: {
    state: 'Illinois'
  }
};

//Access Object Data
var myname = object.name;
console.log(myname);

//Change Object Data
object.address.state = 'Indiana';

//Log the Document Object

//Create a paragraph tag
var paragraph = document.createElement('P');
//Add text to paragraph
paragraph.textContent = 'The DOM is the bomb';
//Add text to body
document.body.appendChild(paragraph);

//Create DIV Element
//takes an element type
function fullScreen(element){
  var newElement = document.createElement(element);
  //Set Height of Element
  newElement.style.height = '100vh';
  //Append Element to DOM
  document.body.appendChild(newElement);
  return newElement;//we created the element and now need to pass it on to the event listener
}

function input(inputType, DOMElement, callback){
  DOMElement.addEventListener(inputType, function(event) {

    var x = event.clientX;
    var y = event.clientY;
    callback(DOMElement, x, y);

  });
}

function output(element, x, y){
  element.textContent = x + ' , '  + y;
    element.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
}

input('click', fullScreen('DIV'), output)

  //parenthesis take in arguments

//Add Event Listener to Element
//=============================
//Lesson 5 Create a Hex Clock Part 1
function time(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
 //we need to have 2 digits per hour, minute, second
  var arr = [hours, minutes, seconds].map(function(num) {//gives us callback function
    return num < 10 ? '0' + num: String(num);//ternary operator, checks if num < 10.
  });
    hours = arr[0];
    minutes = arr[1];
    seconds = arr[2];

    return hours + minutes + seconds;
}

console.log(time());


//Lesson 6 Create Hex Clock Part 2
function output(time) {
  var color = '#' + time;//converting time into a hex color
  document.body.bgColor = color;
  document.body.textContent = color;
}

function startClick(){


}

function stopClick() {
  document.body

}

function init() {
    var tick = setInterval(function() {output(time());}, 1000);
}

init();//call the initialize function
