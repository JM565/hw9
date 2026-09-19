const booksDivNode = document.getElementById("book-list")

fetch(`https://cs272.cs.wisc.edu/rest/s26/hw9/books`)
.then(res => {
    console.log("The response code was " + res.status);
    return res.json();
})
.then(books => {
    books.forEach(c => appendBookComponent(c));
    console.log(books);
});



// TODO Fetch the data from the API and add a book
//      component for each book to the book-list! 

function appendBookComponent(bookData) {
    // TODO Create and insert a node for the given bookData!
     const newColDivNode = document.createElement("div");
    newColDivNode.id = `course-${bookData.id}`;
    newColDivNode.className = "col-12 col-md-6 col-lg-4";
    
    const newCardDivNode = document.createElement("div");
    newCardDivNode.className = "card m-2 p-2";

    const newStarNode = document.createElement("span");
    newStarNode.style.float = "right";
    newStarNode.className = "bi-star";
    newStarNode.addEventListener("click", () => {
        if (newStarNode.className === "bi-star") {
            newStarNode.className = "bi-star-fill";
        } else {
            newStarNode.className = "bi-star";
        }
    })

console.log(bookData);
    const newDescNode = document.createElement("p");
    newDescNode.innerText = bookData.numPages+" Pages: " + bookData.description.substring(0, 200) + "...";


    const newTitleNode = document.createElement("h3");
    newTitleNode.innerText = `${bookData.title}: ${bookData.author}`;


    newTitleNode.appendChild(newStarNode);
    newCardDivNode.appendChild(newTitleNode);
    newColDivNode.appendChild(newCardDivNode);
    newColDivNode.appendChild(newDescNode);

    document.getElementById("book-list").appendChild(newColDivNode);
}


