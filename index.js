// TODO: Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // TODO: Get references to the input field, enter button, and item list
    const input = document.getElementById("userInput");
    const enterButton = document.getElementById("enter");
    const itemList = document.getElementById("itemList");

    // TODO: Define a function to create a new list item
    function createListItem(text) {
    
        const li = document.createElement("li");
        li.textContent = text;

        // TODO: Add event listener to toggle completed class when list item is clicked
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Create delete button for the list item
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        
        // TODO: Add event listener to remove list item when delete button is clicked
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        // Append delete button to list item
        li.appendChild(deleteButton);
        // Append list item to item list
        itemList.appendChild(li);
    }

    // TODO: Add click event listener to the enter button
    enterButton.addEventListener("click", function() {
        // Check if input value is not empty, then create new list item and clear input field
        if(input.value !== "") {
            createListItem(input.value);
            input.value = "";
        };

    });

    // TODO: Add keypress event listener to the input field
    input.addEventListener("keypress", function(event) {
        // Check if the 'Enter' key is pressed, then check if input value is not empty, create
        if(event.key === "Enter") {
            var inputValue = input.value;
            if (inputValue !== "") {
                createListItem(inputValue);
                inputField.value = "";
            }
        }
        
    });
});