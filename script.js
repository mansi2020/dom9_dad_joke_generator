let btn = document.getElementById("btn");
let jokeDiv = document.getElementById("jokeDiv");

const options = {
    method : "GET",
    headers:{
        "X-Api-Key":"XyA1YM96iX9rKFO8Y6iwIaovmPtCykNdwvz8mNgE"
    },
}

async function getJokes(){
    let data = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",options);
    let dataFormat = await data.json();
    jokeDiv.innerText = dataFormat[0].joke;
}
btn.addEventListener("click",getJokes)
