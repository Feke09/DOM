// cart.js

// Preselected items
const preselectedItems = [
  {
    no: 1,
    name: "glycolic acid",
    price: 80.0,
    quantity: 1,
    liked: false,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7OZsESM2iTiAqejWm5qIsULoRk_FbhlY1A&s",
  },
  {
    no: 2,
    name: "milky toner",
    price: 45.0,
    quantity: 1,
    liked: false,
    productImage:
      "https://th.bing.com/th/id/OIP.tVRPhEpG9MCIM1HxEX2qsQHaHa?w=220&h=220&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    no: 3,
    name: "niacinamide",
    price: 30.0,
    quantity: 1,
    liked: false,
    productImage:
      "https://th.bing.com/th/id/OIP.hzK_p2-v7xr_DihQbcP6pgHaLJ?w=127&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    no: 4,
    name: "retinol",
    price: 50.0,
    quantity: 1,
    liked: false,
    productImage:
      "https://th.bing.com/th/id/OIP.eaQs5sYDjhXoxia0Xvny4QHaJQ?w=171&h=214&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    no: 5,
    name: "hyaluronic acid",
    price: 65.0,
    quantity: 1,
    liked: false,
    productImage:
      "https://th.bing.com/th/id/OIP.uKf4-uWnwPUlDgTWTpouVwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    no: 6,
    name: "ethylated ascorbic acid",
    price: 25.0,
    quantity: 1,
    liked: false,
    productImage:
      "https://th.bing.com/th/id/OIP.vI3Q6mS_i4u2a29ZAoO19gHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
];

// Cart array to store selected items
let cart = [...preselectedItems];

// Function to render the cart
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item mb-4 border p-2 w-fit shadow-md";
    itemDiv.innerHTML = `
    <img src="${item.productImage}" class="w-700">
            <span>${item.name} - $${item.price.toFixed(2)} x </span>
            <button class="bg-red-500 text-white text-xl px-1 h-7" onclick="adjustQuantity(${
              item.id
            }, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="bg-black text-white text-xl px-1" onclick="adjustQuantity(${
              item.id
            }, 1)">+</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            <span class="heart ${
              item.liked ? "liked" : ""
            }" onclick="toggleLike(${item.id})">❤️</span>
        `;
    cartItemsContainer.appendChild(itemDiv);
  });

  document.getElementById("total-price").innerText = `Total: $${total.toFixed(
    2
  )}`;
}

// Function to adjust item quantity
function adjustQuantity(itemId, change) {
  const cartItem = cart.find((item) => item.id === itemId);
  if (cartItem) {
    cartItem.quantity = Math.max(0, cartItem.quantity + change);
    if (cartItem.quantity === 0) {
      removeFromCart(itemId);
    } else {
      renderCart();
    }
  }
}

// Function to remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  renderCart();
}

// Function to toggle like status
function toggleLike(itemId) {
  const cartItem = cart.find((item) => item.id === itemId);
  if (cartItem) {
    cartItem.liked = !cartItem.liked;
    renderCart();
  }
}

// Initial rendering of the cart
renderCart();

// Handle checkout button click
document.getElementById("checkout").addEventListener("click", () => {
  alert("Checkout successful.");
});
