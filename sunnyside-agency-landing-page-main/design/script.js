const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

let itemCount = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    itemCount++;
    cartCount.textContent = itemCount;
  });
});

