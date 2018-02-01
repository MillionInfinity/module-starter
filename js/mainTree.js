var bookInfo = {
  price: "24.99",
  title: "Harry Potter Does Stuff",
  image: "images/book.jpg"
};

document.getElementById("book-price").innerHTML = bookInfo.price;

var button = document.getElementById("btn");
btn.addEventListener("click", () => {
    document.getElementById("cart").className -= "is-hidden";
    document.getElementById("cart-price").innerHTML = bookInfo.price;
});

// scope examples
let outside = "global";

function scopeStuff() {
  let inside = "local";
  console.log("what is outside?", outside);
  return inside;
}


let theValueIWant = scopeStuff();
// console.log("what is inside?", inside);
console.log("the val I want from inside scopeStuff:", theValueIWant);
// console.log("what is outside global", outside);



// {
//   let inside = "Block Scope";
// }
// console.log("inside block scope", inside);