function displayPoem(response) {
    poem.style.display = "flex" 
    new Typewriter("#poem", {
        strings: `...`,
        autoStart: true,
        delay: 300,
        cursor: ""
      });

    console.log(response.data.answer)
    let poemData = response.data.answer

    new Typewriter("#poem", {
        strings: poemData,
        autoStart: true,
        delay: 100,
        cursor: ""
      });
}


function generatePoem(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let word = searchInputElement.value;
    
    let apikey = "401t83c73f9a5ce923fbbco0d7594958";
    let prompt = "Please be precise, provide the poem in basic HTML code and start only with the poem, please omit everything that would be displayed as code. Keep it to six long lines at maximum"
    let context = `Generate a Poem using the ${word}`;
    let EndPoint = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
    axios.get(EndPoint).then(displayPoem);
    console.log(EndPoint);
  
    let body = document.querySelector("body");
    body.classList.add("poemDisplay");
  
    new Typewriter("#poemWord", {
        strings: `${word} ✨`,
        autoStart: true,
        delay: 50,
        cursor: ""
      });
    
    let poem = document.querySelector("#poem");
    poem.style.display = "none"


    new Typewriter("#poem", {
      strings: `...`,
      autoStart: true,
      delay: 300,
      cursor: ""
    });

    searchInputElement.value = "";

}

let poemFormElement = document.querySelector("#poemForm")
poemFormElement.addEventListener("submit", generatePoem)