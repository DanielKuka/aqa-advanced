  function myMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

myMessage("Привіт, Данило!", 1500);