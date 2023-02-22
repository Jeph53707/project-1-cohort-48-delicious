//Pseudo Code for button color change when clicked and comment submission 

//User sees the comment board form on blog.html page 
//User clicks the submit button after they fill out form 
//Website will generate/display their information that was entered in each of the inputs (total of 4, with 2 being mandatory)

//1.Save the values for the DOM
//query the DOM for form element class (which in this case is leaveComment and save it)
const commentForm = document.querySelector('.leaveComment');
console.log(commentForm);

//query the DOM for the two input classes and save it 
const userInput = document.querySelectorAll('.upper', '.lower');
console.log(userInput);

const commentButton = document.querySelector('.commentButton');
console.log(commentButton);


//2.Add a Submit Event Listener to the form element (the event and the callback function)
commentForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    console.log(event);
    console.log('Form has been submitted');

    const userComment = [];

    for(i = 0; i < userInput.length; i++); {
        console.log(userInput[i]);
        
    
    }
    console.log(userComment);
    
    // .trim();
    




//Remove default refresh form behavior


//3.If the user submits a Comment then (check if the 4 inputs are empty)
if (userComment !=="" ) {
    const h3element = documentCreateElement('h3');
}
///IF not empty, add an h3 and p that contains the yourName ID and p for yourComments ID
///append the h3 and p to the div 

///Else have the console/browser alert the user to submit a comment 


})





