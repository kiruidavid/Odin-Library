let myLibrary = [] 

function Book(title, author, numberOfPages) { 
    this.title = title 
    this.author = author 
    this.numberOfPages = numberOfPages 
    this.read = "Not Read" 
    this.info = function() {
        if (this.read == false){
            console.log(`${this.title} by ${this.author} , ${this.numberOfPages} pages is not yet read`)
        } else {
            console.log(`${this.title} by ${this.author} , ${this.numberOfPages} pages is  read`)
        }
    } 


} 

function displayBooksOnPage(){ 

    let table = document.getElementById('table-body') 
    const removeRows = document.querySelectorAll('.table-rows') 
    console.log("count of current rows...", removeRows) 
    for (let i = 0; i < removeRows.length; i++){
        removeRows[i].remove()
    }
    myLibrary.forEach((obj) => { 
        let tds = ''
         tds = `<td>${obj.title}</td>  
                   <td>${obj.author}</td> 
                   <td>${obj.numberOfPages}</td> 
                   <td><p id="read-option">${obj.read}</p></td> 
                   <td><button id="read-status" onClick="ChangeReadStatus()">READ STATUS</button></td> 
                   <td><button id="remove-button">REMOVE</button></td>
                    
                    `  
                let objtr = `<tr class="table-rows">${tds}</tr>`
            
            table.innerHTML += objtr
    })

}  
function addBookToLibrary(Title, Author, NumberOfPages){  
    let book = new Book(Title, Author, NumberOfPages)  
    myLibrary.push(book)
    console.log(myLibrary)
    displayBooksOnPage()
   
  

} 
const addFormBtn = document.getElementById('add-button')  
addFormBtn.addEventListener('click', () => { 
    console.log('button is working')
    let form = document.getElementById('form') 
    if (form.style.display === 'none'){
        form.style.display = 'block' 
        addFormBtn.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Exit Form'
        
    } else {
        form.style.display = 'none' 
        addFormBtn.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Add Book'

    }
}) 

const submitBtn = document.getElementById('submit-button') 
submitBtn.addEventListener('click',  (e) => {
    e.preventDefault() 
    let Title = document.getElementById('title').value
    console.log(`title is ${Title}`) 
    let Author = document.getElementById('author').value
    console.log(`author is ${Author}`) 
    let NumberOfPages = document.getElementById('no_of_pages').value
    console.log(`numberOfPages is ${NumberOfPages}`) 

    addBookToLibrary(Title, Author, NumberOfPages)
}) 


function ChangeReadStatus(){ 
    let readOption = document.getElementById('read-option')
   
    if (readOption.textContent == "Not Read"){
        readOption.textContent = "Read"
    } else {
        readOption.textContent = "Not Read"
    }
}



