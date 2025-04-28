// Designing the modal
const openModal = document.querySelector('#open-modal')
const modal = document.querySelector('#modal')
const cancelBtn = document.querySelector('#cancelbtn')

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

const submitBtn = document.querySelector('#submitbtn')

submitBtn.addEventListener( 'click', function(event) {

    
    NewBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages-read').value,
    document.getElementById('status').value,
    crypto.randomUUID()
    )

    addBookToLibrary()
    
    event.preventDefault();
})


function Book(title, author, pagesRead, status, UUID) {
    this.title = title,
    this.author = author,
    this.pagesRead = pagesRead,
    this.status = status
    this.UUID = UUID
}

function addBookToLibrary () {
    myLibrary.push(NewBook)
}