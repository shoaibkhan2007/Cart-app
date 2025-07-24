
const cartItems = [
  { id: 'p1', name: 'Laptop', category: 'Computer Accessories', image: 'product-img.jpg', price: 1200, quantity: 1 },
  { id: 'p2', name: 'Iphone 11', category: 'Mobile Phoneeeeeeee', image: 'product-img.jpg', price: 25, quantity: 2 },
  { id: 'p3', name: 'Mouse', category: 'Computer Accessories', image: 'product-img.jpg', price: 30, quantity: 1 },
  { id: 'p4', name: 'Iphone 14 pro', category: 'Mobile Phoneeeeeeee', image: 'product-img.jpg', price: 50, quantity: 1 },
  { id: 'p5', name: 'Keyboard', category: 'Computer Accessories', image: 'product-img.jpg', price: 75, quantity: 1 }
];

// let cart = [];
//  useEffect(() => {
//     let items=JSON.parse(localStorage.getItem("txt"));
//     if(items){
//      displayCart ()
//     }
//   }, []);
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function filterproducts(category) {
  let filteredCart = category === 'All'
    ? cartItems
    : cartItems.filter(item => item.category === category);

  displayproducts(filteredCart);
}

function displayproducts(itemsToDisplay) {
  const productDisplay = document.getElementById('cart-display');
  productDisplay.innerHTML = '';

  itemsToDisplay.forEach(item => {
    const productElement = document.createElement('div');
    productElement.classList.add("item-listing");
    productElement.innerHTML = `
      <div class="image-container">
        <img src="${item.image}" class="prod-img" />
      </div>
      <div class="dk">
      <h4>${item.name}</h4>
        <p class="price-item">Price: ${item.price}</p>
        <button class="ww" data-id="${item.id}">Add to cart</button>
      </div>
    `;
    productDisplay.appendChild(productElement);
  });

  const buttons = document.querySelectorAll('.ww');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      addToCart(productId);
    });
  });




}
function addToCart(productId) {
  const productToAdd = cartItems.find(p => p.id === productId);
  if (!productToAdd) {
    alert('Product not found!');
    return;
  }

  const existingCartItem = cart.find(item => item.id === productId);
  if (existingCartItem) {
    cart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {    cart.push({ ...productToAdd, quantity: 1 });
  }

  displayCart();
}

const decreaseQuantity = (productId) => {
  const itemIndex = cart.findIndex(item => item.id === productId);
  const item = cart[itemIndex];
  if (item.quantity > 1) {
    item.quantity -= 1;
  }
  else {
    cart.splice(itemIndex, 1);
  }
  displayCart();
};


function displayCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  const cartHTML = cart.map(item => `

    

    <div class="somethingCrazy" >
    <div id="spec" class="image-container2">
        <img src="${item.image}" class="prod-img2" />
      </div>
      <div class="fortxt">
      <h4>${item.name}</h4>
      <p>Quantity: ${item.quantity}</p>
      <p class="subtotal-amount" >Subtotal: ${item.price * item.quantity}</p>
       <button class="ws" data-id="${item.id}">Increase</button>
       <button style="width: 80px;" class="tf" data-id="${item.id}">Decrease</button>
      </div>
    </div>
  
  `).join("");

  let totalAmount = 0;
  cart.forEach(item => {
    totalAmount += item.price * item.quantity;
  });


  cartContainer.innerHTML = cartHTML + `
    <div class="total-amount">
      <h3 style="text-align:center" >Total Rs: ${totalAmount}</h3>
    </div>
  `;

  const increasebtn = document.querySelectorAll('.ws');
  increasebtn.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      addToCart(productId);
    });
  });

  const decbtn = document.querySelectorAll('.tf');
  decbtn.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      decreaseQuantity(productId);
    });
  });

 


  // let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // function addToCart(product) {
    // cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  // }
  





}

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  if (cartContainer.style.display === 'none') {
    cartContainer.style.display = 'block';
  } else {
    cartContainer.style.display = 'none';
  }
}



document.addEventListener('DOMContentLoaded', () => {
  displayproducts(cartItems);
  displayCart();
});
