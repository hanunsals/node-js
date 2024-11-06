const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Data kategori
let categories = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Perabotan' }
];

// Data produk
let products = [
  { id: 1, name: 'Laptop', category: 'Elektronik' },
  { id: 2, name: 'Meja', category: 'Perabotan' }
];

// 1. GET semua kategori
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// 2. GET detail kategori berdasarkan ID
app.get('/api/categories/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const category = categories.find(cat => cat.id === categoryId);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

// 3. POST kategori baru
app.post('/api/categories', (req, res) => {
  const newCategory = { id: categories.length ? categories[categories.length - 1].id + 1 : 1, ...req.body };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// 4. PUT update kategori berdasarkan ID
app.put('/api/categories/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const categoryIndex = categories.findIndex(cat => cat.id === categoryId);
  if (categoryIndex !== -1) {
    categories[categoryIndex] = { id: categoryId, ...req.body };
    res.json(categories[categoryIndex]);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

// 5. DELETE kategori berdasarkan ID
app.delete('/api/categories/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  categories = categories.filter(cat => cat.id !== categoryId);
  res.status(204).send();
});

// 6. GET produk berdasarkan query nama
app.get('/api/products', (req, res) => {
  const queryName = req.query.name;
  if (queryName) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(queryName.toLowerCase()));
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});

// 7. GET produk kategori tertentu dan berdasarkan nama (parameter dan query string)
app.get('/api/categories/:id/products', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const queryName = req.query.name;
  
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
  
    let filteredProducts = products.filter(product => product.category.toLowerCase() === category.name.toLowerCase());
  
    if (queryName) {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(queryName.toLowerCase()));
    }
  
    res.json(filteredProducts);
  });
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
