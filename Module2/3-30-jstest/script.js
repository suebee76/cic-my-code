const myHeading = document.getElementById("headingH1")
myHeading.textContent = "Going crazy in my JS!";

function searchFunction() {
    const searchTerm =document.getElementById("searchInput");
    console.log("we are searching for: " + searchTerm.value);
}

const form = document.getElementById("redwoodQuestion")
form.addEventListener("submit", function (event) { 
    event.preventDefault();
    const searchTerm = document.getElementById("redwoodInput");
    console.log(searchTerm.value);
})