class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`usrname: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const vishal = new User("vishal")
// console.log(vishal.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone.com")
iphone.logMe();
// console.log(iphone.createId())