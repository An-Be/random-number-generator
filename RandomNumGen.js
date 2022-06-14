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

    //add moving numbers feature

    number.innerText = randomNumber;
}

//eventlistener so when button is clicked, generateRanNum is called
button.addEventListener('click', () => {

        //setInterval does something over and over again 
        const countDown = setInterval(generateRanNum, 50);
        //disable button while countDown is running
        button.disabled = true;

        //set times for countDown and change color of number to yellow then back to original
        //also undo button disable
        setTimeout(() => {
            clearInterval(countDown);
            number.style.color = '#ffd166';
            setTimeout(() => {
                number.style.color = '#ef233c';
                button.disabled = false;
            }, 500);
        }, 1000);

});