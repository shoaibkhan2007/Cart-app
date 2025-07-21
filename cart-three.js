
const cartItems = [
  { id: 'p1', name: 'Laptop', category: 'Computer Accessories', image: 'product-img.jpg', price: 1200, quantity: 1 },
  { id: 'p2', name: 'Iphone 11', category: 'Mobile Phoneeeeeeee', image: 'product-img.jpg', price: 25, quantity: 2 },
  { id: 'p3', name: 'Mouse', category: 'Computer Accessories', image: 'product-img.jpg', price: 30, quantity: 1 },
  { id: 'p4', name: 'Iphone 14 pro', category: 'Mobile Phoneeeeeeee', image: 'product-img.jpg', price: 50, quantity: 1 },
  { id: 'p5', name: 'Keyboard', category: 'Computer Accessories', image: 'product-img.jpg', price: 75, quantity: 1 }
];

let cart = [];

function filterCart(category) {
  let filteredCart = category === 'All'
    ? cartItems
    : cartItems.filter(item => item.category === category);

  renderCart(filteredCart);
}

function renderCart(itemsToDisplay) {
  const cartDisplay = document.getElementById('cart-display');
  cartDisplay.innerHTML = '';

  itemsToDisplay.forEach(item => {
    const productElement = document.createElement('div');
    productElement.classList.add("item-listing");
    productElement.innerHTML = `
      <div class="image-container">
        <img src="${item.image}" class="prod-img" />
      </div>
      <div class="dk">

        <p class="price-item">Price: ${item.price}</p>
        <button class="ww" data-id="${item.id}">Add to cart</button>
      </div>
    `;
    cartDisplay.appendChild(productElement);
  });

  // Attach event listeners to buttons
  const buttons = document.querySelectorAll('.ww');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      addToCart(productId);
    });
  });
}

// function addToCart(productId) {
//   const productToAdd = cartItems.find(p => p.id === productId);
//   if (!productToAdd) {
//     console.warn('Product not found!');
//     return;
//   }

//   const existingCartItem = cart.find(item => item.id === productId);

//   if (existingCartItem) {
//     // Increase quantity
//     cart = cart.map(item =>
//       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//   } else {
//     // Add new product
//     cart.push({ ...productToAdd, quantity: 1 });
//   }

//   displayCart(); // Update UI
// }

// function displayCart() {
//   const cartContainer = document.getElementById('cart-container');
//   cartContainer.innerHTML = '';

//   if (cart.length === 0) {
//     cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//     return;
//   }
//   const cartHTML = cart.map(item => `

    

//     <div class="somethingCrazy" >
//     <div id="spec" class="image-container2">
//         <img src="${item.image}" class="prod-img2" />
//       </div>
//       <div class="fortxt">
//       <h4>${item.name}</h4>
//       <p>Quantity: ${item.quantity}</p>
//       <p class="subtotal-amount" >Subtotal: ${item.price * item.quantity}</p>

//       </div>
//     </div>
//   `).join('');

//   cartContainer.innerHTML = cartHTML;
// }

// // Dropdown handling
// function dropdown() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  if (cartContainer.style.display === 'none') {
    cartContainer.style.display = 'block';
  } else {
    cartContainer.style.display = 'none';
  }
} 


// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderCart(cartItems); // Show all products initially
  displayCart();          // Show empty cart
});




// const user = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (user) {
//       document.getElementById("user-greeting").innerText = "Hello, ${user.firstName} ${user.lastName}!;"
//     } else {
//       window.location.href = "cart.html"; // If not logged in
//     }

//     function logout() {
//       localStorage.removeItem("loggedInUser");
//       window.location.href = "cart.html";
//     }















// / function jj(index){
  //  let  subtotal=cart.price* cart.quantity;
  // let total = cart[index] *subtotal;
  // console.log("total");
  // console.log(total);
  // }
  // console.log(jj());
  
  
  // const subtotalElements = document.querySelectorAll('.subtotal-amount');
  // let total = 0;
  // // var sub = cart.price*cart.quantity 
  
  // subtotalElements.forEach(element => {
  //     const value = parseFloat(element.innerText); // Convert text content to a number
  //     if (!isNaN(value)) { // Ensure it's a valid number
  //         total += value;
  //     }
  // });
  
  // console.log("Total:", total);
  
  
  
  
  
  // var result = arr.reduce(function (acc, obj) { return acc.price * obj.quantity; }, 0);
  // console.log(result);

















































































// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     const dropdowns = document.getElementsByClassName("dropdown-content");
//     for (let i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (dropdowns.classList.contains('show')) {
//         dropdowns.classList.remove('show');
//       }
//     }
//   }
// };