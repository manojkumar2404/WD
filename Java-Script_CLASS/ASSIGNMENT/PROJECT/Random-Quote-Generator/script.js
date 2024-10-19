const quote = document.querySelector('.quote')
const author = document.querySelector('.author .name')
quoteBtn = document.querySelector('button')
soundBtn = document.querySelector('.sound')
copyBtn = document.querySelector('.copy')
twitterBtn = document.querySelector('.twitter')

function randomQuote(){
    // quoteBtn.innerText = 'Loading Quote...'

    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(json =>{
        // console.log(json);
        quote.innerText = json.content;
        author.innerText = json.author;
        // quoteBtn.innerText = 'New Quote';
    })
}

soundBtn.addEventListener('click', ()=>{
    //SpeechSynthesusUtterance is a web speech api that represent a speech request
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance); //speak method of speechSynthesis speak the utterance
})

copyBtn.addEventListener('click', ()=>{
   navigator.clipboard.writeText(quote.innerText);
})

quoteBtn.addEventListener('click',randomQuote)