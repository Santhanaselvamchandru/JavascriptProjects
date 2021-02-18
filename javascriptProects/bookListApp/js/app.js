class bookStore{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
var books = [
    
];
class InterFace{
    //submit event
    static getBooks(){
        InterFace.displayBooks();
        var btn = document.querySelector('#btn');
        btn.addEventListener('click',function(e){
            e.preventDefault();
            InterFace.getValues();
        });
    }
    //get form values 
    static getValues(){
        var title = document.querySelector('#name');
        var author = document.querySelector('#author');
        var isbn = document.querySelector('#isbn');
        if(title.value != '' && author.value != '' && isbn.value != ''){
            let book1 = new bookStore(title.value,author.value,isbn.value);
            books.push(book1)
            InterFace.displayBooks();
            title.value = '';
            author.value = '';
            isbn.value = '';
        }
        else{
            title.style.border = '2px solid red';
            author.style.border = '2px solid red';
            isbn.style.border = '2px solid red';
        }
    }
    //display Books
    static displayBooks(){
        var tbody = document.getElementById('bookBody');
        tbody.innerHTML = '';
        books.forEach(function(book){
            var tr = InterFace.createElement(book.title,book.author,book.isbn);            
            tbody.appendChild(tr);
        });
    }
    //table row create 
    static createElement(title,author,isbn){
        var tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td><button onclick = "InterFace.deleteEvent(${isbn})" class="del">X</button></td>
                `;
        return tr;
    }
    static deleteEvent(isbn){
        books.forEach(((book) => {
            if(book.isbn == isbn){
                const index = books.indexOf(book);
                if(index > -1)
                    books.splice(index,1);
                InterFace.displayBooks();
            }
        }));
        InterFace.getBooks();
    }
}
InterFace.getBooks();