const Address = (street, city, zipCode) => {
    return {
        street,
        city,
        zipCode
    }
}

const showAddress = address => {
    for (let key in address)
        console.log(key, address[key]);
}

const firstAddress = Address('Maple Ave', 'Jacksonville', 32210);
showAddress(firstAddress);
