// attach the js file to key elements 
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('#score');

// set a function to randomize the 3x3 holes array 
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    
    //   store answer as index of holes array 
    return holes[idx];
    }

function peep() {
    
    // create a hole element that passes through the randomHole function
    const hole = randomHole(holes);
    
    // use classlist method to add mole to randomly selected hole element
    hole.classList.add('mole');

    // create function to move mole from hole element after 1 sec 
    setTimeout(
    () => {hole.classList.remove('mole');}, 
    1000);
}

// create a function (arrow) that will loop over each hole element in the holes array 
holes.forEach(hole => {
    
    // add click event listener to each hole
    hole.addEventListener('click', () => {
    
        // add a condition to check if the mole is present in the clicked hole
        if (hole.classList.contains('mole')) {
    
            // when hole is clicked event listener triggers a function to increase score by 1
            score.textContent = `Score: ${parseInt(score.textContent.split(': ')[1]) + 1}`;
    
            // removes the mole class from the hole thats clicked
            hole.classList.remove('mole');

            // moved curly bracket here otherwise game will randomly stop
            }
            // put peep function to randomly place mole in a hole 
            peep();
        
    });
});

// set the peep to auto start when page runs
peep();