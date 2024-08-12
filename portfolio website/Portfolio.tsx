// Convert HTMLCollection to an array
const projectItems = Array.from(document.getElementsByClassName("project") );

// Initial index and number of items to display
let initial = 0;
const set = 3; // Number of items to display at once

const displayVisibleItems = () => {
    const itemContainer = document.getElementById("project-desc");
    if (!itemContainer) {
        console.error("Container element '#project-desc' not found.");
        return;
    }

    // Clear the container
    itemContainer.innerHTML = "";

    // Get the visible items
    const visibleItems = projectItems.slice(initial, initial + set);

    // Append the visible items to the container
    visibleItems.forEach(item => {
        itemContainer.appendChild(item.cloneNode(true)); // Clone to avoid modifying the original
    });
};

// Event handler for the right button
const rightButton = document.getElementById("right-button");
if (rightButton) {
    rightButton.addEventListener("click", () => {
        if (initial + set < projectItems.length) {
            initial++;
            displayVisibleItems();
        }
    });
} else {
    console.error("Right button '#right-button' not found.");
}

// Event handler for the left button
const leftButton = document.getElementById("left-button");
if (leftButton) {
    leftButton.addEventListener("click", () => {
        if (initial > 0) {
            initial--;
            displayVisibleItems();
        }
    });
} else {
    console.error("Left button '#left-btn' not found.");
}

// Initial display of items
displayVisibleItems();
