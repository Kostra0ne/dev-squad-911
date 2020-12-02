const ironCart = (function () {
  "use strict";

  var productList;

  function appendProduct(infos) {
    const row = document.createElement("div");
    row.classList = "row product";
    row.innerHTML = `<span class="label">${infos.name}</span>
    <span class="unit-price">${infos.price}</span>
    <span class="quantity">QTY</span>
    <input class="input quantity" min="0" type="number" value="1">
    <span class="total-price">$${infos.price}</span>
    <button class="btn delete">delete</button>`;

    row.querySelector(".input.quantity").oninput = (e) => {
      updateRowPrice(e.target);
      updateTotalPrice();
    };

    row.querySelector(".btn.delete").onclick = (e) => {
      deleteProduct(e.target);
      updateTotalPrice();
    };

    productList.appendChild(row);
  }

  function createProduct(evt) {
    evt.preventDefault(); // prevents page refresh on form submission
    const nameElement = document.getElementById("new_product_name");
    const priceElement = document.getElementById("new_product_price");

    if (productList.children[0].className === "empty-list")
      productList.innerHTML = "";

    appendProduct({
      name: nameElement.value,
      price: Number(priceElement.value),
    });
  }

  function deleteProduct(btn) {
    btn.parentElement.remove();
    if (productList.children.length === 0)
      productList.innerHTML = '<span class="empty-list">No products yet</span>';
  }

  function updateTotalPrice() {
    const totalEl = document.getElementById("price_total");
    const rowTotalEls = [...document.querySelectorAll(".row .total-price")];

    totalEl.textContent = rowTotalEls.reduce(
      (acc, el) => acc + Number(el.textContent.slice(1)),
      0
    );
  }

  function updateRowPrice(input) {
    const priceEl = input.parentElement.querySelector(".unit-price");
    const totalEl = input.nextElementSibling;
    totalEl.textContent = "$" + Number(priceEl.textContent) * input.value;
  }

  function start() {
    productList = document.getElementById("list_products");
    document.getElementById("btn_new_product").onclick = createProduct;
  }

  return { start };
})();

window.addEventListener("DOMContentLoaded", ironCart.start);
