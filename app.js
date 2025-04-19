const booksDivNode = document.getElementById("book-list")
console.log(booksDivNode)
console.log(bookData)
for (let i = 0; i < booksDivNode.length; i++) {
    const newnode = createBookComponent(bookData[i]);
    booksDivNode.appendChild(newnode);
}

// TODO Fetch the data from the API and add a book
//      component for each book to the book-list! 
//fetch("https://cs272.cs.wisc.edu/rest/s25/hw9/books").then(res => res.json()).then(books => {
//books.map(c => createBookComponent(c)).forEach(n => booksDivNode.appendChild(n));
//});
//fetch("https://cs272.cs.wisc.edu/rest/s25/hw9/books").then(res => res.json()).then(books => {
  //  books.forEach(books => createBookComponent(book)).forEach(n => booksDivNode.appendChild(n));
  //  });
    fetch(("https://cs272.cs.wisc.edu/rest/s25/hw9/books")
        .then(response => response.json()).then(books => {
        books.forEach(book => {
        const bookComponent = createBookComponent(book);
        booksDivNode.appendChild(bookComponent);
        });
    })
    .catch(error => {
        console.error("Error fetching books:", error);
    }));


function createBookComponent(bookData) {
    // TODO Create and return a node for the given bookData!
const newColDivNode = document.createElement("div");
newColDivNode.id = "The data" + bookData.id;
newColDivNode.className = "col-12 col-md-6 col-lg-4";

const newCardDivNode = document.createElement("div");
newCardDiveNode = "card m-2 p-2"

const newStarNode = document.createElement("span");
newStarNode.style.float = "right";
newStarNode.className = "bi-star"
newStarNode.addEventListener("click", () => {
    if (newStarNode.className === "bi-star")
{ newStarNode.className = "bi-star-fill";
} else {
    newStarNode.className = "bi-star";
} } )

}

const newTitleNode = document.createElement("h2");
newTitleNode.innerText = bookData.id + ": " + bookData.name;

const newCreditsNode = document.createElement("p");
newCreditsNode.style.frontWeight = 200; 
newCreditsNode.innertext = "credits: " + bookData.credits 

const newBadgesDivNode = document.createElement("div");
newBadgesDivNode.style.display = "flex";
bookData.keywords.forEach(word => {
    const newBadgeNode = document.createElement("p");
    newBadgeNode.className = "badge text-bg-secondary me-2";
    newBadgeNode.innerText = word; 
        newBadgesDivNode.appendChild(newBadgeNode);

})

const newDescNode = document.createElement("p");
newDescNode.innerText = bookData.description.substring(0, 200) + "..."

const newReadMoreBtnNode = document.createElement("button");
newReadMoreBtnNode.className = "btn  btn-outline-secondary";
newReadMoreBtnNode.innerText = "Read More";

newReadMoreBtnNode.addEventListener("click", () => {
    if(newReadMoreBtnNode.innerText === "Read More") {
        newDescNode.innerText = bookData.description; 
        newReadMoreBtnNode.innertext = "Read Less";
    } else {
        newDescNode.innerText = bookData.description.substring(0, 200) + "...";
        newReadMoreBtnNode.innertext = "Read More";
    }

})
newTitleNode.appendChild(newStarNode)
newCardDivNode.appendChild(newTitleNode);
booksDivNode.appendChild(newStarNode)

return newColDivNode;