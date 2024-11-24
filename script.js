const factText = document.getElementById('fact-text');
const factButton = document.getElementById('fact-button');

// Function to fetch and display a new cat fact
async function getCatFact() {
    try {
        factButton.disabled = true;
        factText.textContent = 'Loading...';
        
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        
        factText.textContent = data.fact;
    } catch (error) {
        factText.textContent = 'Oops! Failed to fetch a cat fact. Please try again.';
    } finally {
        factButton.disabled = false;
    }
}

// Add click event listener to the button
factButton.addEventListener('click', getCatFact);

// Get initial fact when page loads
getCatFact();