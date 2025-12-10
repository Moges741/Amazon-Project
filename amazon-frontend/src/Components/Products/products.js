// In your Products.js component
const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=20"
      );
      const fetchedProducts = response.data.products;

      // Define your category mapping
      const categoryMapping = {
        smartphones: "Electronics",
        laptops: "Electronics",
        fragrances: "Jewellery", // or a separate category
        skincare: "Beauty",
        groceries: "Home",
        "home-decoration": "Home",
        furniture: "Home",
        tops: "Clothes",
        "womens-dresses": "Clothes",
        "womens-shoes": "Fashion",
        "mens-shirts": "Clothes",
        "mens-shoes": "Fashion",
        "mens-watches": "Fashion",
        "womens-watches": "Fashion",
        "womens-bags": "Fashion",
        "womens-jewellery": "Jewellery",
        sunglasses: "Fashion",
        automotive: "Other",
        motorcycle: "Other",
        lighting: "Home",
      };

      // Add a new 'generalCategory' field to each product
      const categorizedProducts = fetchedProducts.map((product) => ({
        ...product,
        generalCategory: categoryMapping[product.category] || "Other",
      }));

      setProducts(categorizedProducts);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  fetchProducts();
}, []);
