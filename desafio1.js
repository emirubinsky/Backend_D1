// Desafio1

// Clase "ProductManager" que gestiona productos.

class ProductManager {
    constructor() {
      this.products = [];
    }
  
    // Agrego método "addProduct" que cuenta con propiedades.
    addProduct(title, description, price, thumbnail, code, stock) {
  
      // Campos obligatorios.
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
        return;
      }
  
      // Valido que no se repita el campo "code".
      if (this.products.some(product => product.code === code)) {
        console.log("El código ya existe. Debe ser único.");
        return;
      }
  
      // Genero id autoincrementable
      const id = this.products.length + 1;
  
      // Se crea producto al agregar al array
      const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(product);
      console.log("Producto agregado:", product);
    }
  
    // Se crea método "getProducts" el cual devuelve el arreglo con todos los produtos creados hasta el momento.
    getProducts() {
      return this.products;
    }
  
    // El método "getProductById" busca en el arreglo el producto que coincide con el "id"
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      return product || null;
    }
  }
  
  // Utilización de la clase ProductManager
  
  const productManager = new ProductManager();
  
  productManager.addProduct("Product 1", "Este es un producto prueba1", 200, "image1.jpg", "001", 50);
  productManager.addProduct("Product 2", "Este es un producto prueba2", 200, "image2.jpg", "002", 30);
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  const productById = productManager.getProductById(1);
  console.log("Producto con ID 1:", productById);
  
  const productByIdNotFound = productManager.getProductById(3);
  console.log("Producto con ID 3:", productByIdNotFound);