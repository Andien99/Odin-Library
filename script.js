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

const form = document.getElementById('form')

form.addEventListener( 'submit', function(event) {
    event.preventDefault();
    console.log(event)
    addBookToLibrary();
})


function Book() {
    title = this.title,
    author = this.author,
    pagesRead = this.pagesRead,
    totalPages = this.totalPages
}

function addBookToLibrary () {
    const formData = new FormData(form);
}