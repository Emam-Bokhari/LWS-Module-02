const person = {
    firstName: "Emam",
    lastName: " Bokhari",
    contact: {
        email: "abc@gmail.com"
    }
}

const bokhari = {
    ...person,
    contact: {
        ...person.contact
    }
}

const deep = {
    name: "Emam Bokhari",
    address: {
        city: "Dhaka",
        moreDetails: {
            district: "Brahmanbaria",
            upozilla: "Kasba"
        }
    }
}

const deepSolve={
    ...deep,
    address:{
        ...deep.address,
        moreDetails:{
            ...deep.address.moreDetails
        }
    }
}