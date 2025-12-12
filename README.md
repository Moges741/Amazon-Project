# 📦 Amazon Clone (Frontend)
A fully responsive Amazon Frontend Clone built using React + Vite, styled with CSS Modules, and powered by dynamic data from FakeStoreAPI.
This project replicates the Amazon shopping UI — including categories, product lists, cart system, search, and more.

# 🚀 Live Demo

👉 Add your Netlify/Vercel link here
- [Live Demo](https://your-amazon-clone.netlify.app)

# 🛠️ Tech Stack
- React + Vite
- React Router DOM
- CSS Modules
- Axios
- Context API + useReducer
- FakeStoreAPI
- Netlify (Deployment)

# 📁 Folder Structure
```
src/
│── API/
│   └── endPoints.js
│
│── assets/
│
│── Components/
│   ├── Carousel/
│   ├── Categories/
│   ├── CurrencyFormat/
│   ├── Data/
│   ├── Footer/
│   ├── GeneralStyle/
│   ├── Header/
│   ├── Products/
│   └── Spinner/
│
│── LayOut/
│   └── Layout.jsx
│
│── Pages/
│   ├── Auth/
│   ├── Cart/
│   │   ├── Cart.jsx
│   │   └── cart.module.css
│   ├── Landing/
│   │   └── Landing.jsx
│   ├── Orders/
│   ├── Payment/
│   ├── ProductDetails/
│   └── Results/
│       ├── Result.jsx
│       ├── result.module.css
│       └── ResultDesc.js
│
│── Utility/
│   ├── action.type.js
│   └── reducer.js
│
│── App.jsx
│── App.css
│── index.css
│── main.jsx
│── Routing.jsx
│
public/
│── index.html
│── favicon.svg
│── images...
```
# ✨ Features
## 🔸 Landing Page
- Hero Banner
- Category Cards
- Product Rows
## 🔸 Category Results Page
- Dynamic fetching using:
```
GET /products/category/:categoryName
```
## 🔸 Product Listing

### Product cards with:
- Image
- Title
- Rating
- Price
## 🔸 Cart System
- Add to Cart
- Remove from Cart
- View Cart Items
- Price formatting
## 🔸 API Integration
### Using FakeStoreAPI endpoints:
```
/products
/products/:id
/products/category/electronics
```

⚙️ Installation
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
npm install
npm run dev


Build for production:

npm run build

🔗 API Reference (FakeStoreAPI)
Get all products
GET https://fakestoreapi.com/products

Get category products
GET https://fakestoreapi.com/products/category/:categoryName

Categories Used:

electronics

jewelery

men's clothing

women's clothing

📸 Screenshots

Add your project screenshots here

/screenshots/
    ├── landing.png
    ├── category.png
    ├── product.png
    ├── cart.png

📚 What I Learned

Organizing large React projects

Using Context API for global state

Handling API errors + loading states

Building reusable UI components

Clean folder structure (enterprise-style)

CSS Modules for isolated styling

Deploying on Netlify

🚀 Future Improvements

User Authentication (Firebase)

Wishlist System

Search Auto-suggestions

Product Filtering (price, rating, brand)

Advanced Cart with quantity update

Dark Mode

🧑‍💻 Contributing

Pull requests are welcome.
If you find a bug or want a feature, open an issue.

📜 License

This is an educational project.
Not affiliated with Amazon in any way.
