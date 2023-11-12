const addressFactory = (street, city, zipCode) => {
    return {
        street,
        city,
        zipCode
    }
}

function AddressConstructor(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

const showAddress = address => {
    for (let key in address)
        console.log(key, address[key]);
}

const factoryAddress = addressFactory('a', 'b', 12345);

const constructorAddress = new AddressConstructor('z', 'y', 98765);

showAddress(factoryAddress);
showAddress(constructorAddress);