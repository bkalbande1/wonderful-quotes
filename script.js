// Quotes array (initially with some quotes)
const quotes = [
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"
];

// Generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

// Track page visits
function trackVisits() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').innerText = visitCount;
}

// Function to add a new quote
function addNewQuote() {
    const newQuote = document.getElementById('new-quote-input').value.trim();

    if (newQuote) {
        quotes.push(newQuote); // Add the new quote to the array
        alert("New quote added successfully!");
        document.getElementById('new-quote-input').value = ""; // Clear the input field
        generateQuote(); // Display a new random quote immediately
    } else {
        alert("Please enter a valid quote.");
    }
}

// Initialize page
window.onload = function() {
    // Display a random quote
    generateQuote();

    // Display visit count
    trackVisits();
};
