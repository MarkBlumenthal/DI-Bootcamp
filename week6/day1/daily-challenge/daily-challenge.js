

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// Display the fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Clone the groceries object and explore changes
const cloneGroceries = () => {
    // Copy of the client variable
    let user = client;
    // Changing client to "Betty"
    client = "Betty";
    console.log(`User: ${user}, Client: ${client}`); // User should still be "John" because strings are passed by value

    // Copy of the groceries object
    let shopping = groceries;
    // Modifying totalPrice within the shopping object
    shopping.totalPrice = "35$";
    console.log(`Original total price: ${groceries.totalPrice}, Modified total price: ${shopping.totalPrice}`); // Should reflect the change because objects are passed by reference

    // Modifying the paid key within the shopping object
    shopping.other.paid = false;
    console.log(`Original paid status: ${groceries.other.paid}, Modified paid status: ${shopping.other.paid}`); // Should reflect the change because objects are passed by reference
};

// Explanations:
// 1. When `user` is set to `client`, it copies the value of `client` at that moment because strings are primitive types in JavaScript, which are passed by value. Changing `client` afterward does not affect `user`.
// 2. When `shopping` is set to `groceries`, it doesn't create a new object. Instead, it just points to the same memory location as `groceries`. Any changes to `shopping` reflect on `groceries` because objects in JavaScript are passed by reference.
