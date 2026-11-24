class UserProfile {

    orders = new Map()

    constructor(email, firstName, lastName, password, admin) {
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.admin = admin
    }

    getEmail() {
        return this.email
    }

    getName() {
        return this.firstName, this.lastName
    }

    getPassword() {
        return this.password
    }

    isAdmin() {
        return this.admin
    }

    printInfo() {
        console.log(`User: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nPassword: ${this.password}\nIs an admin: ${this.admin}`)
    }
}

const userProfiles = localStorage.getItem("userProfiles")
let users = new Map()

if (userProfiles) {
    let array = JSON.parse(userProfiles)
    if (Array.isArray(array)) {
        console.log(array)
        array.forEach(([email, userProfile]) => {
            let profile = new UserProfile(userProfile.email, userProfile.firstName, userProfile.lastName, userProfile.password, userProfile.admin)
            users.set(email, profile)
        })
        users.set("gavinmartin@thegoldenfork.com", new UserProfile("gavinmartin@thegoldenfork.com", "Gavin", "Martin", "Password", true))
        users.set("jackmaher@thegoldenfork.com", new UserProfile("jackmaher@thegoldenfork.com", "Jack", "Maher", "Password", true))
        users.set("austinrabert@thegoldenfork.com", new UserProfile("austinrabert@thegoldenfork.com", "Austin", "Rabert", "Password", true))
    }
}

function resetUserProfiles() {
    // erm dont use doesnt work right i think
    users = new Map()
    users.set("gavinmartin@thegoldenfork.com", new UserProfile("gavinmartin@thegoldenfork.com", "Gavin", "Martin", "Password", true))
    users.set("jackmaher@thegoldenfork.com", new UserProfile("jackmaher@thegoldenfork.com", "Jack", "Maher", "Password", true))
    users.set("austinrabert@thegoldenfork.com", new UserProfile("austinrabert@thegoldenfork.com", "Austin", "Rabert", "Password", true))
    localStorage.setItem("userProfiles", JSON.stringify(users))
}