const addressA = new AddressConstructor('a', 'b', 12345);
const addressB = new AddressConstructor('a', 'b', 12345);
const addressC = new AddressConstructor('z', 'y', 98765);
const addressD = addressA;

function AddressConstructor(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

const showAddress = address => {
    for (let key in address)
        console.log(key, address[key]);
}

const areEqual = (address1, address2) => {
    for (let key in address1)
        if (address1[key] !== address2[key])
            return 'No';
    return 'Yes';
}

const areSame = (address1, address2) => address1 === address2 ? 'Yes' : 'No';

console.log(`AddressA and AddressB are equal? ${areEqual(addressA, addressB)}. Are they same? ${areSame(addressA, addressB)}`);
console.log(`AddressA and AddressC are equal? ${areEqual(addressA, addressC)}. Are they same? ${areSame(addressA, addressC)}`);
console.log(`AddressA and AddressD are equal? ${areEqual(addressA, addressD)}. Are they same? ${areSame(addressA, addressD)}`);
console.log(`AddressB and AddressC are equal? ${areEqual(addressB, addressC)}. Are they same? ${areSame(addressB, addressC)}`);
console.log(`AddressB and AddressD are equal? ${areEqual(addressB, addressD)}. Are they same? ${areSame(addressB, addressD)}`);
console.log(`AddressC and AddressD are equal? ${areEqual(addressC, addressD)}. Are they same? ${areSame(addressC, addressD)}`);