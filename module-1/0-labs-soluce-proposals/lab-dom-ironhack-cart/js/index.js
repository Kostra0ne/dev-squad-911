const ironCart = (function () {
  "use strict";
  let nameElement, priceElement, products;

  function createProduct(evt) {
    evt.preventDefault(); // prevents page refresh on form submission

    if (products.children[0].className === "empty-list")
      products.innerHTML = "";

    const name = nameElement.value;
    const price = Number(priceElement.value);
    const row = document.createElement("div");

    row.classList = "row product";
    row.innerHTML = `<span class="label">${name}</span>
    <span class="unit-price">${price}</span>
    <span class="quantity">QTY</span>
    <input class="input quantity" min="0" type="number" value="1">
    <span class="total-price">$${price}</span>
    <button class="btn delete">delete</button>`;

    row.querySelector(".input.quantity").oninput = (e) => {
      updateSubTotal(e.target);
      updateTotal();
    };

    row.querySelector(".btn.delete").onclick = (e) => {
      deleteProduct(e.target);
      updateTotal();
    };

    products.appendChild(row);
  }

  function deleteProduct(btn) {
    btn.parentElement.remove();
    if (products.children.length === 0)
      products.innerHTML = '<span class="empty-list">No products yet</span>';
  }

  function updateTotal() {
    const totalEl = document.getElementById("price_total");
    const rowTotalEls = [...document.querySelectorAll(".row .total-price")];
    totalEl.textContent = rowTotalEls.reduce(
      (acc, el) => acc + Number(el.textContent.slice(1)),
      0
    );
  }

  function updateSubTotal(input) {
    const priceEl = input.parentElement.querySelector(".unit-price");
    const totalEl = input.nextElementSibling;
    totalEl.textContent =
      "$" + (Number(priceEl.textContent) * input.value).toFixed(2);
  }

  function start() {
    nameElement = document.getElementById("new_product_name");
    priceElement = document.getElementById("new_product_price");
    products = document.getElementById("list_products");
    document.getElementById("btn_new_product").onclick = createProduct;
  }

  return { start };
})();

window.addEventListener("DOMContentLoaded", ironCart.start);
