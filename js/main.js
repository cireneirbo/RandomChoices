document.addEventListener("DOMContentLoaded", function () {

    //the bricks for the wall
    const activityArray = [];

    //selects a random activity
    function getRandomInt(max) {
        return (Math.floor(Math.random() * Math.floor(max)));
    }

    function createNewActivity() {
        return activityArray[getRandomInt(activityArray.length)];
    }

    //create a new activity in activityArray
    const createButtonElement = document.getElementById('create-activity');

    createButtonElement.addEventListener("click", function () {

        const newInputElement = document.getElementById('input-activity');
        if (newInputElement.value != "") {
            activityArray.push(newInputElement.value);
        }

    });

    //respond to make new-activity user request
    const printButtonElement = document.getElementById('receive-activity');

    printButtonElement.addEventListener("click", function () {

        const newPrintElement = document.getElementById('new-activity');
        newPrintElement.innerHTML = `${createNewActivity()}`;
      
    });
});
