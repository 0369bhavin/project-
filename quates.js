const url = 'https://dummyjson.com/quotes';
const quoteContainer = document.getElementById("quotesContainer");
const getQuoteBtn = document.getElementById("btn1");

async function fetchQuote() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const quoteObj = data.quotes[randomIndex];

        quoteContainer.innerHTML = `
            <h2>"${quoteObj.quote}"</h2>
            <p>- ${quoteObj.author}</p>
        `;
    } catch (error) {
        quoteContainer.innerHTML = `<p>Oops! Couldn't fetch a quote.</p>`;
        console.error("Error fetching quote:", error);
    }
}

getQuoteBtn.addEventListener("click",fetchQuote );