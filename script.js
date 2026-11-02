const STORAGE_KEY = "rylicious_products";

const defaultProducts = [
  {
    id: 1,
    name: "Americano",
    category: "Coffee Classic",
    price: 15000,
    stock: true,
    image: "assets/americano.jpg",
    description: "Bold and simple.",
  },
  {
    id: 2,
    name: "Caffe Latte",
    category: "Coffee Classic",
    price: 17000,
    stock: true,
    image: "assets/coffe latte.jpg",
    description: "Smooth and milky.",
  },
  {
    id: 3,
    name: "Cappuccino",
    category: "Coffee Classic",
    price: 17000,
    stock: true,
    image: "assets/cappucino.jpg",
    description: "Classic and frothy.",
  },
  {
    id: 4,
    name: "Coffee Caramel",
    category: "Coffee Classic",
    price: 17000,
    stock: true,
    image: "assets/Coffe Caramel.jpg",
    description: "Rasa karamel yang manis lembut.",
  },
  {
    id: 5,
    name: "Coffee Vanilla",
    category: "Coffee Classic",
    price: 17000,
    stock: true,
    image: "assets/vanila latte.jpg",
    description: "Vanilla creamy and smooth.",
  },
  {
    id: 6,
    name: "Coffee Butterscotch",
    category: "Coffee Classic",
    price: 20000,
    stock: true,
    image: "assets/butter scoth.jpg",
    description: "Rasa butterscotch yang lembut.",
  },
  {
    id: 7,
    name: "Coffee Hazelnut",
    category: "Coffee Classic",
    price: 17000,
    stock: true,
    image: "assets/coffe hazelnut.jpg",
    description: "Aroma hazelnut yang khas.",
  },
  {
    id: 8,
    name: "American Peach",
    category: "New Americano",
    price: 17000,
    stock: true,
    image: "assets/americano peach.jpg",
    description: "Peachy & refreshing.",
  },
  {
    id: 9,
    name: "American Berry",
    category: "New Americano",
    price: 17000,
    stock: true,
    image: "assets/americano bery.jpg",
    description: "Berry and refreshing.",
  },
  {
    id: 10,
    name: "Kopi Gula Aren",
    category: "Signature Coffee",
    price: 15000,
    stock: true,
    image: "assets/aren.jpg",
    description: "Manis khas gula aren.",
  },
  {
    id: 11,
    name: "Kopi Sea Salt",
    category: "Signature Coffee",
    price: 20000,
    stock: true,
    image: "assets/sea salt.jpg",
    description: "Creamy with sea salt taste.",
  },
  {
    id: 12,
    name: "Kopi Salted Caramel",
    category: "Signature Coffee",
    price: 23000,
    stock: true,
    image: "assets/Salted Caramel.jpg",
    description: "Rich and indulgent.",
  },
  {
    id: 13,
    name: "Kopi Susu Creamy",
    category: "Signature Coffee",
    price: 15000,
    stock: true,
    image: "assets/kopi botol.jpeg",
    description: "Smooth & creamy.",
  },
  {
    id: 14,
    name: "Matcha Latte",
    category: "Non Coffee",
    price: 20000,
    stock: true,
    image: "assets/Matca latte.jpg",
    description: "Creamy and earthy.",
  },
  {
    id: 15,
    name: "Regular Latte",
    category: "Non Coffee",
    price: 20000,
    stock: true,
    image: "assets/kopi botol.jpeg",
    description: "Manis dan ringan.",
  },
  {
    id: 16,
    name: "Oreo Latte",
    category: "Non Coffee",
    price: 20000,
    stock: true,
    image: "assets/Oreo Latte.jpg",
    description: "Cookies & cream flavor.",
  },
  {
    id: 17,
    name: "Lychee Tea",
    category: "Non Coffee",
    price: 17000,
    stock: true,
    image: "assets/lechy tea.jpg",
    description: "Segar dan fruity.",
  },
  {
    id: 18,
    name: "Sticky Milk Caramel",
    category: "Sticky Milk",
    price: 22000,
    stock: true,
    image: "assets/Sticky Milk Caramel.jpg",
    description: "Susu lembut dengan rasa caramel.",
  },
  {
    id: 19,
    name: "Sticky Milk Vanilla",
    category: "Sticky Milk",
    price: 20000,
    stock: true,
    image: "assets/Sticky Milk vanila.jpg",
    description: "Vanilla creamy favorite.",
  },
  {
    id: 20,
    name: "Sticky Milk Choco",
    category: "Sticky Milk",
    price: 21000,
    stock: true,
    image: "assets/Sticky Milk Choco.jpg",
    description: "Coklat manis dan creamy.",
  },
  {
    id: 21,
    name: "Kue Balok Coklat",
    category: "Kue Balok Lumer",
    price: 16000,
    stock: true,
    image: "assets/kue balok coklat.jpg",
    description: "Coklat lumer yang meleleh di mulut.",
  },
  {
    id: 22,
    name: "Kue Balok Pandan",
    category: "Kue Balok Lumer",
    price: 17000,
    stock: true,
    image: "assets/kue balok pandan.jpg",
    description: "Rasa pandan yang wangi dan lembut.",
  },
  {
    id: 23,
    name: "Kue Balok Vanilla",
    category: "Kue Balok Lumer",
    price: 18000,
    stock: true,
    image: "assets/kue balok vanila.jpg",
    description: "Vanila halus dan lembut di setiap gigitan.",
  },
];

const legacyDefaultImages = {
  1: "photo-1497636577773-f1231844b336",
  2: "photo-1509042239860-f550ce710b93",
  3: "photo-1461023058943-07fcbe16d735",
  4: "photo-1517701604599-bb29b565090c",
  5: "photo-1447933601403-0c6688de566e",
  6: "photo-1504674900247-0877df9cc836",
  7: "photo-1572449043416-55f4685c9bb7",
  8: "photo-1551024601-bec78aea704b",
  9: "photo-1513558161293-cdaf765ed2e6",
  10: "photo-1461023058943-07fcbe16d735",
  11: "photo-1509042239860-f550ce710b93",
  12: "photo-1572449043416-55f4685c9bb7",
  14: "photo-1572490122747-3968b75cc699",
  15: "photo-1504754524776-8f4f37790ca0",
  16: "photo-1521017432531-fbd92d768814",
  17: "photo-1544145945-f90425340c7e",
  18: "photo-1571091718767-18b5b1457add",
  19: "photo-1555507036-ab1f4038808a",
  20: "photo-1513558161293-cdaf765ed2e6",
  21: "photo-1551024601-bec78aea704b",
  22: "photo-1555507036-ab1f4038808a",
  23: "photo-1517248135467-4c7edcad34c4",
};

const toppingOptions = {
  none: { label: "Tanpa topping", price: 0 },
  keju: { label: "Keju", price: 3000 },
  coklat_bubuk: { label: "Coklat Bubuk", price: 2500 },
  matcha: { label: "Matcha", price: 3500 },
};

const cart = [];

const menuList = document.getElementById("menu-list");
const cartItems = document.getElementById("cart-items");
const subtotalEl = document.getElementById("subtotal");
const serviceFeeEl = document.getElementById("service-fee");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

function getProducts() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!saved || !Array.isArray(saved) || saved.length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
    return [...defaultProducts];
  }

  let migrated = false;
  const products = saved.map((product) => {
    const legacyImage = legacyDefaultImages[product.id];
    const defaultProduct = defaultProducts.find((item) => item.id === product.id);

    if (
      legacyImage &&
      defaultProduct &&
      product.image.startsWith(`https://images.unsplash.com/${legacyImage}`)
    ) {
      migrated = true;
      return { ...product, image: defaultProduct.image };
    }

    return product;
  });

  if (migrated) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }

  return products;
}

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

function renderMenu(filter = "all") {
  const products = getProducts();
  const filteredProducts =
    filter === "all"
      ? products.filter((p) => p.stock)
      : products.filter((p) => p.category === filter && p.stock);

  if (filteredProducts.length === 0) {
    menuList.innerHTML = `
      <div class="empty-menu">
        <p>Semua menu pada kategori ini sedang tidak tersedia saat ini.</p>
      </div>
    `;
    return;
  }

  menuList.innerHTML = filteredProducts
    .map(
      (product) => `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>

        <div class="product-body">
          <div class="product-top">
            <div class="product-name">${product.name}</div>
            <span class="product-category">${product.category}</span>
          </div>

          <p class="product-desc">${product.description}</p>

          ${
            product.category === "Kue Balok Lumer"
              ? `
                <div class="product-options">
                  <label for="topping-${product.id}">Opsi topping</label>
                  <select class="topping-select" id="topping-${product.id}">
                    <option value="none">Tanpa topping</option>
                    <option value="keju">Keju (+Rp 3.000)</option>
                    <option value="coklat_bubuk">Coklat Bubuk (+Rp 2.500)</option>
                    <option value="matcha">Matcha (+Rp 3.500)</option>
                  </select>
                </div>
              `
              : ""
          }

          <div class="product-footer">
            <span class="price">${formatRupiah(product.price)}</span>
            <button class="add-btn" data-id="${product.id}">+ Keranjang</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  document.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.id);
      const card = button.closest(".product-card");
      const toppingValue = card.querySelector(".topping-select")?.value || "none";
      addToCart(productId, toppingValue);
    });
  });
}

function addToCart(productId, toppingValue = "none") {
  const products = getProducts();
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  if (!product.stock) {
    alert("Menu ini sedang tidak tersedia.");
    return;
  }

  const selectedTopping =
    product.category === "Kue Balok Lumer" ? toppingValue : "none";
  const topping = toppingOptions[selectedTopping];
  const finalPrice = product.price + topping.price;

  const existingItem = cart.find(
    (item) => item.id === productId && item.topping === selectedTopping
  );

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.totalPrice += finalPrice;
  } else {
    cart.push({
      ...product,
      topping: selectedTopping,
      toppingLabel: topping.label,
      totalPrice: finalPrice,
      quantity: 1,
    });
  }

  renderCart();
}

function changeQuantity(productId, toppingValue, delta) {
  const item = cart.find(
    (p) => p.id === productId && p.topping === toppingValue
  );

  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    const index = cart.findIndex(
      (p) => p.id === productId && p.topping === toppingValue
    );
    cart.splice(index, 1);
  }

  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Belum ada produk yang dipilih.</p>`;
    updateSummary();
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const itemTotal = item.totalPrice * item.quantity;

      return `
        <div class="cart-item">
          <div class="cart-item-left">
            <div class="cart-thumb">
              <img src="${item.image}" alt="${item.name}" />
            </div>

            <div>
              <h4>${item.name}</h4>
              <small>${item.category}${item.category === "Kue Balok Lumer" ? ` • ${item.toppingLabel}` : ""}</small>

              <div class="qty-controls">
                <button class="qty-btn" data-action="decrease" data-id="${item.id}" data-topping="${item.topping}">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" data-action="increase" data-id="${item.id}" data-topping="${item.topping}">+</button>
              </div>
            </div>
          </div>

          <div class="item-price">${formatRupiah(itemTotal)}</div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".qty-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const topping = button.dataset.topping;
      const action = button.dataset.action;

      action === "increase"
        ? changeQuantity(id, topping, 1)
        : changeQuantity(id, topping, -1);
    });
  });

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);
  const serviceFee = subtotal > 0 ? 0 : 0;
  const total = subtotal + serviceFee;

  subtotalEl.textContent = formatRupiah(subtotal);
  serviceFeeEl.textContent = formatRupiah(serviceFee);
  totalPriceEl.textContent = formatRupiah(total);
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.filter);
  });
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Keranjang masih kosong. Silakan pilih menu terlebih dahulu.");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);

  const orderMessage = `
Halo Rylicious, saya ingin memesan:
${cart
  .map(
    (item) =>
      `- ${item.name} (${item.quantity}x)${item.category === "Kue Balok Lumer" ? ` ${item.toppingLabel}` : ""} = ${formatRupiah(item.totalPrice * item.quantity)}`
  )
  .join("\n")}
Total: ${formatRupiah(total)}
Mohon diproses pesanan saya.
  `.trim();

  const whatsappUrl =
    "https://wa.me/6287815854276?text=" + encodeURIComponent(orderMessage);

  window.open(whatsappUrl, "_blank");
});

renderMenu();
renderCart();