export interface PersonAddress {
    street: string,
    streetNumber: string,
    city: string,
    country: string
}

export type Gender = 'male' | 'female';

export interface Profile {
    firstName: string,
    lastName: string,
    birthDay: Date,
    gender: Gender
}

export interface Person {
    address: PersonAddress
    profile: Profile
};

class Worker implements Person {
    address: PersonAddress = {
        street: "some street",
        streetNumber: "23",
        city: "Zürich",
        country: "CH"
    };
    
    profile: Profile = {
        firstName: "Cemil",
        lastName: "Dogan",
        birthDay: new Date(),
        gender: "male"
    }
}

const person = new Worker();
 console.log("hello world", person.profile, person.address)

