document.addEventListener("DOMContentLoaded", function () {

    //the bricks for the wall
    const characterArrayPlainText = [
        "get drunk", "eat delicious food", "play some intense vidya", "work out", "go to sleep"
    ];

    //selects a random character
    function getRandomChar(max) {
        return (Math.floor(Math.random() * Math.floor(max)));
    }

    function createNewActivity() {
        return characterArrayPlainText[getRandomChar(characterArrayPlainText.length)];
    }

    //respond to make new-password user request
    const buttonElement = document.getElementById('receive-activity');
    buttonElement.addEventListener("click", function () {

      

        const newPasswordElement = document.getElementById('new-activity');
        newPasswordElement.innerHTML += `
            <p>${createNewActivity()}</p>
            <hr>
        `;
    });
});