function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tab links
    tablinks = document.querySelectorAll("nav ul li a");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    // Default to showing the home tab
    document.querySelector("nav ul li a").click();
});

// Drag and drop functionality
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    if (event.target.className === "course-cards") {
        event.target.appendChild(draggedElement);
    }
});
