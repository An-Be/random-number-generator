//get all elements needed
const number = document.querySelector('.card-ouput');
const button = document.querySelector('.btn');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');

//set inner text of generate number to 0
number.innerText = 0;

function generateRanNum(){
    //math.floor rounds the number to an integer
    //math.random we multiply by the difference of max and min plus 1, plus the min to get a random number that is between max and min

    //get the values for the max and min
    let min = minInput.value;
    let max = maxInput.value;
    const randomNumber = Math.floor(Math.random() * (max-min + 1) + min);
    number.innerText = randomNumber;
}

//eventlistener so when button is clicked, generateRanNum is called
button.addEventListener('click', generateRanNum);