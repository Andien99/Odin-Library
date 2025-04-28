// Designing the modal
const openModal = document.querySelector('#open-modal')
const modal = document.querySelector('#modal')
const library = document.querySelector('#library')
const cancelBtn = document.querySelector('#cancelbtn')
const submitBtn = document.querySelector('#submitbtn')
const form = document.querySelector('#form')
openModal.addEventListener ('click', () => { 
    console.log('works')
    modal.classList.add('open')
})

cancelBtn.addEventListener( 'click', () => {
    modal.classList.remove('open')
}) 

// Code to store the books

const myLibrary = []

let NewBook = '';



submitBtn.addEventListener( 'click', function(event) {
    event.preventDefault()
    // Gets parameters for a book based on user input on forms and adds to the mylibrary array
    NewBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages-read').value,
    document.getElementById('status').value,
    crypto.randomUUID()
    )
    addBookToLibrary()
    // resets form to default
    form.reset()
    modal.classList.remove('open')
})


function Book(title, author, pagesRead, status, UUID) {
    this.title = title,
    this.author = author,
    this.pagesRead = pagesRead,
    this.status = status
    this.UUID = UUID
}

function addBookToLibrary () {
    myLibrary.push(NewBook);
    displayBook()
}

// function that loops through array and displays each book

function displayBook () {
    for (let i = 0; i < myLibrary.length; i++) {
        if 
        // appends the new book to the main page
        const newBook = document.createElement('div')
        newBook.classList.add('new')

        const title = document.createElement('p')
        title.textContent =  'Title: ' +  document.getElementById('title').value
        newBook.appendChild(title)

        const author = document.createElement('p');
        author.textContent = 'Author:' +  document.getElementById('author').value
        newBook.appendChild(author)

        const pagesRead = document.createElement('p')
        pagesRead.textContent = 'Pages read: ' + document.getElementById('pages-read').value
        newBook.appendChild(pagesRead)

        const condition = document.createElement('p')
        condition.textContent =  'status: ' + document.getElementById('status').value;
        newBook.appendChild(condition)

        library.appendChild(newBook)
    }
}