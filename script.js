// Objeto para simular uma API de produtos
const productsAPI = {
    products: [
      { id: 1, name: "POKEMON FIRERED VERSION", price: 89.90, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/70171481/555eaa40fd.jpg" },
      { id: 2, name: "POKEMON EMERALD VERSION", price: 89.90, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/36538623/a4eb22dd25.jpg" },
      { id: 3, name: "ZELDA THE MINISH CAP", price: 90.00, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/13965739/d6d1b7561d.jpg" },
      { id: 4, name: "YOSHIS ISLAND", price: 129.90, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/133244461/d3b7e9ca5b.jpg" },
      { id: 5, name: "WOLFENSTEIN 3D", price: 129.90, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/133411245/23eb3aea20.jpg" },
      { id: 6, name: "DRIVER 2 ADVANCE", price: 100.00, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/133405457/da8cc0f6d9.jpg" },
      { id: 7, name: "MORTAL KOMBAT ADVANCE ", price: 80.00, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/133393322/40dd1dc991.jpg" },
      { id: 8, name: "SUPER STREET FIGHTER 2 TURBO REVIVAL", price: 70.00, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/133405420/6b59800956.jpg" },
      { id: 9, name: "CASTLEVANIA CIRCLE OF THE MOON", price: 99.00, image: "https://cdn.awsli.com.br/600x700/17/17021/produto/133405435/d5b9585ded.jpg" },
    ],
    getProducts: function() {
      return this.products;
    },
    addProduct: function(product) {
      this.products.push(product);
    },
    removeProduct: function(id) {
      this.products = this.products.filter(product => product.id !== id);
    }
  };
  
  // Função para renderizar produtos na página
  function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    productsAPI.getProducts().forEach(product => {
      const listItem = document.createElement("li");
      listItem.classList.add("product");
      listItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <span class="name">${product.name}</span>
        <section>
          <span class="price">R$ ${product.price}</span>
          <button onclick="removeProduct(${product.id})"><img src="./assets/img/icons/bin.svg"/></button>
        </section>
      `;
      productList.appendChild(listItem);
    });
  }
  
  // Função para adicionar novo produto
  function addProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productImage = document.getElementById("productImage").value;
  
    if (productName && productPrice && productImage) {
      const newProduct = {
        id: productsAPI.products.length + 1,
        name: productName,
        price: parseFloat(productPrice),
        image: productImage
      };
      productsAPI.addProduct(newProduct);
      renderProducts();
      clearFields();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
  // Função para remover produto
  function removeProduct(id) {
    productsAPI.removeProduct(id);
    renderProducts();
  }
  
  // Função para limpar campos de entrada
  function clearFields() {
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productImage").value = "";
  }
  
  // Renderiza os produtos iniciais na página
  renderProducts();
  