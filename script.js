// Designing the modal
const openModal = document.querySelector('#open-modal')
const modal = document.querySelector('#modal')
const library = document.querySelector('#library')
const cancelBtn = document.querySelector('#cancelbtn')
const submitBtn = document.querySelector('#submitbtn')
const form = document.querySelector('#form')
openModal.addEventListener ('click', () => { 
    console.log('works')
    modal.setAttribute('id','open')
})

cancelBtn.addEventListener( 'click', () => {
    modal.classList.remove('open')
    modal.setAttribute('id', '')
}) 

// Code to store the books

const myLibrary = []

let newBook = '';



submitBtn.addEventListener( 'click', function(event) {
    event.preventDefault()
    // Gets parameters for a book based on user input on forms and adds to the mylibrary array
    newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages-read').value,
    document.getElementById('progress').value,
    crypto.randomUUID()
    )
    addBookToLibrary()
    // resets form to default
    // form.reset()
    // modal.classList.remove('open')
})


function Book(title, author, pagesRead, progress, UUID) {
    this.title = title,
    this.author = author,
    this.pagesRead = pagesRead,
    this.progress= progress
    this.UUID = UUID
}

function addBookToLibrary () {
    if (myLibrary[0] == undefined)  {
        displayBook()
        return myLibrary.push(newBook);
    } 
    for (let i = 0; i < myLibrary.length; i++) {
         // will throw an error if 'newBook' shares the same title and author of an item in an array
            if (myLibrary[i].title == newBook.title && myLibrary[i].author == newBook.author) {
                return alert('Your book\'s title shares a \'Title\' and \'Author\' with another book currently on your Reading List')
            }
        } 
    displayBook();
    myLibrary.push(newBook);
    }

// function that loops through array and displays each book

function displayBook () {

    // appends the new book to the main page with params
    const newBookCard = document.createElement('div')
    newBookCard.classList.add('new')
    newBookCard.setAttribute('id', newBook.UUID)

    const title = document.createElement('p')
    title.textContent = document.getElementById('title').value
    newBookCard.appendChild(title)

    const author = document.createElement('p');
    author.textContent = 'By' +  document.getElementById('author').value
    newBookCard.appendChild(author)

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-button')
    removeBtn.setAttribute('id', newBook.UUID)
    removeBtn.innerText = removeBtn.textContent = 'Remove'
    newBookCard.appendChild(removeBtn)
    library.appendChild(newBookCard)

    removeBtn.addEventListener('click', function() {
        if (myLibrary.length == 0) {
            newBookCard.remove()
        }
        for (let i = 0; i < myLibrary.length; i++) {
            newBookCard.remove()
            if (removeBtn.id == myLibrary[i].UUID) {
                console.log('match at ' + i)
                myLibrary.splice(i, i+1)
            }
        }

    })

    const progress = document.createElement('select')
    progress.innerText = progress.textContent = newBook.progress
    newBookCard.appendChild(progress)
    const started = document.createElement('option')
    started.textContent = 'Started'
    progress.appendChild(started)
    const notRead = document.createElement('option')
    notRead.textContent = 'Not Read'
    progress.appendChild(notRead)
    const completed = document.createElement('option')
    completed.textContent = 'Completed'
    progress.appendChild(completed)

    progress.addEventListener('change', function () {
        console.log(progress.value)
        newBookCard.className = (progress.value).replace(' ','')
    })
}


