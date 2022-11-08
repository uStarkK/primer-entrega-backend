class Usuario {
    constructor(name, lastName, books = [], pets = []) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
    addPets(mascota) {
        this.pets.push(mascota);
    }
    countPets() {
        return this.pets.length;
    }
    getPets(){
        return this.pets
    }
    addBook(title, author) {
        this.books.push({ title: title, author: author });
    }
    getBookNames() {
        return this.books.map((book) => book.title);
    }
}


const usuario0 = new Usuario('Diego','Peretti',[{title: 'Speaker for the Dead', author: 'Orson Scott Card'}], ['Elefante','Zorro']);

usuario0.addBook("Ender's Game", "Orson Scott Card")

console.log(usuario0)

const getUserInfo = (user) => {
    console.log(user.getFullName())
    console.log(user.getBookNames())
    console.log(user.countPets(), user.getPets())
}

getUserInfo(usuario0)