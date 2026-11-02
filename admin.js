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

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function renderAdminProducts() {
  const products = getProducts();
  const container = document.getElementById("admin-list");

  container.innerHTML = products
    .map(
      (product) => `
      <div class="admin-card">
        <img src="${product.image}" alt="${product.name}" />
        <div class="admin-card-body">
          <h3>${product.name}</h3>

          <form class="image-update-form" data-id="${product.id}">
            <label for="image-${product.id}">URL atau path foto</label>
            <input
              id="image-${product.id}"
              name="image"
              type="text"
              value="${product.image}"
              placeholder="assets/nama-file.jpg atau https://..."
              required
            />
            <button type="submit" class="btn-secondary">Ganti Foto</button>
          </form>

          <div class="admin-meta">
            <span>${product.category}</span>
            <strong>Rp ${product.price.toLocaleString("id-ID")}</strong>
          </div>

          <div class="admin-card-actions">
            <label class="switch">
              <span>${product.stock ? "Tersedia" : "Habis"}</span>
              <input type="checkbox" data-id="${product.id}" ${product.stock ? "checked" : ""} />
            </label>

            <button class="delete-btn" data-id="${product.id}">Hapus Produk</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  document.querySelectorAll(".image-update-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const id = Number(form.dataset.id);
      const image = new FormData(form).get("image").trim();
      const products = getProducts();
      const product = products.find((item) => item.id === id);

      if (!product) {
        alert("Produk tidak ditemukan.");
        return;
      }

      product.image = image;
      saveProducts(products);
      renderAdminProducts();
    });
  });

  document.querySelectorAll(".switch input").forEach((toggle) => {
    toggle.addEventListener("change", (event) => {
      const id = Number(event.target.dataset.id);
      const products = getProducts();
      const product = products.find((item) => item.id === id);

      if (!product) return;

      product.stock = event.target.checked;
      saveProducts(products);
      renderAdminProducts();
    });
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const products = getProducts().filter((item) => item.id !== id);
      saveProducts(products);
      renderAdminProducts();
    });
  });
}

document.getElementById("add-product-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("product-name").value.trim();
  const category = document.getElementById("product-category").value;
  const price = Number(document.getElementById("product-price").value);
  const image = document.getElementById("product-image").value.trim();
  const description = document.getElementById("product-description").value.trim();
  const stock = document.getElementById("product-stock").value === "true";

  if (!name || !image || !description || !price) {
    alert("Harap isi semua data produk.");
    return;
  }

  const products = getProducts();
  const newProduct = {
    id: Date.now(),
    name,
    category,
    price,
    stock,
    image,
    description,
  };

  products.push(newProduct);
  saveProducts(products);
  renderAdminProducts();

  event.target.reset();
});

document.getElementById("reset-stock").addEventListener("click", () => {
  const products = getProducts().map((product) => ({
    ...product,
    stock: true,
  }));

  saveProducts(products);
  renderAdminProducts();
});

renderAdminProducts();