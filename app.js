const buttonClicked =document.getElementById("getCatFact");

buttonClicked.addEventListener('click', function(event) {

    //call function to get cat fact
    getRandomCatFact();
    getRandomDogFact();

    getKanyeQuotes();

    buttonAnimation();
});

function getRandomCatFact(){

    fetch("https://catfact.ninja/fact")
        .then(function(response) {
            return response.json(); //parse json
        })
        .then((response) => {
            let cat= response;
            console.log(cat); //debug
            document.querySelector(".catFact").innerHTML =
             "meow... meeeow, meow! " + "( " + cat.fact + " )";
        })
        .catch(function(error) {
            console.log("Error: " + error);
            ducument.querySelector(".catFact").innerHTML = "Shit went wrong, what the fuck do i do now (moew or woof or whatever)"
        })

}
function getRandomDogFact(){

    fetch("https://dogapi.dog/api/v2/facts")
        .then(function(response) {
            return response.json(); //parse json
        })
        .then((response) => {
            let dog= response;
            console.log(dog); //debug
            document.querySelector(".dogFact").innerHTML =
             "mphh... woff, AWOHOH! " + "( " + dog.data[0].attributes.body + " )";
        })
        .catch(function(error) {
            console.log("Error: " + error);
            ducument.querySelector(".dogFact").innerHTML = "Shit went wrong, what the fuck do i do now (moew or woof or whatever)"
        })

}

function getKanyeQuotes(){
    fetch("https://api.kanye.rest")
        .then(function(response) {
            return response.json(); //parse json
        })
        .then((response) => {
            let madPerson= response;
            console.log(madPerson); //debug
            document.querySelector(".kanyeGibberish").innerHTML =
             "*takes a deep breath (about to say the dumbest shit known to man)* " + "'" + madPerson.quote + "' -Kayne West(nucleus of contemporary philosophy)";
        })
        .catch(function(error) {
            console.log("Error: " + error);
            ducument.querySelector(".kanyeGibberish").innerHTML = "Shit went wrong (thank god)"
        })
}

function buttonAnimation(){

    let activeButton = document.querySelector("#getCatFact");
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);

}