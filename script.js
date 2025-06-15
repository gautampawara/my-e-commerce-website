 const products = [
    { name: "Smartphone", id: 1 },
    { name: "Laptop", id: 2 },
    { name: "T-Shirt", id: 3 },
    { name: "Coffee Mug", id: 4 },
    { name: "LED TV", id: 5 },
    { name: "Shoes", id: 6 }
  ];

  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(product => product.name.toLowerCase().includes(query));
    
    searchResults.innerHTML = filtered.map(product => `
      <div class="search-result">
        <span>${product.name}</span>
        <button class="btn btn-sm btn-primary">Add to Cart</button>
      </div>
    `).join("");

    if (query === "") {
      searchResults.innerHTML = "";
    }
  });