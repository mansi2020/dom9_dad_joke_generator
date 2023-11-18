let btn = document.getElementById("btn");
let jokeDiv = document.getElementById("jokeDiv");
let loader = document.querySelector(".lds-facebook");
let fontSize = document.querySelector("#font_size");
let soacialMediaShare = document.querySelector("#soacialMediaShare")
loader.style.display = "none";
jokeDiv.style.fontSize = 20+"px";
const options = {
    method : "GET",
    headers:{
        "X-Api-Key":"yUk0vLKhKAJCBkaEFd0UDzJOlBaYuEIDr3Z2H1Kt"
    },
}

//function for fetch the joke from api
function getJokes(){
    btn.innerText = "LOADING ...";
    loader.style.display = "block";
    jokeDiv.style.transform = "scale(1.1)"
    jokeDiv.style.transition = "1s"
    async function showJokes(){
        let data = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",options);
        let dataFormat =  await data.json();
        jokeDiv.innerText = await dataFormat[0].joke;
        btn.innerText = "TELL ME A JOKE";
        loader.style.display = "none";
        jokeDiv.style.transform = "scale(1)"
    }
    setTimeout(showJokes,1000);
}
btn.addEventListener("click",getJokes)


//function for add differenbt font size
fontSize.addEventListener("input",()=>{
    let valueFont = fontSize.value;
    if(valueFont == ""){
        jokeDiv.style.fontSize ="20px";
        return;
    }
    jokeDiv.style.fontSize = valueFont+"px";
})


//function for share joke on twitter
function shareOnTwitter() {
    const navUrl =
      'https://twitter.com/intent/tweet?text=' +
      jokeDiv.innerText;
    window.open(navUrl, '_blank');
}
soacialMediaShare.addEventListener("click",shareOnTwitter);

  