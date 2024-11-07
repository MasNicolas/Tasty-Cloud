<template>
  <div class="app-container">
    <header class="header">
      <nav class="navbar">
        <ul class="nav-links">
          <li><router-link class="nav-link" to="/">Accueil</router-link></li>
          <li><router-link class="nav-link" to="/panier">Mon panier</router-link></li>
          <li><router-link class="nav-link" to="/desserts">Desserts</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="item-container">
      <router-view :cart="cart" @add-to-cart="addToCart" @remove-from-cart="removeFromCart" ></router-view>    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../public/facebook-logo.png" alt="Facebook" class="footer-logo"/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="../public/instagram-logo.webp" alt="Instagram" class="footer-logo"/>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src="../public/twitter-logo.avif" alt="Twitter" class="footer-logo"/>
          </a>
          <a href="https://www.linkedin.com/in/mas-nicolas-094270270/" target="_blank" rel="noopener noreferrer">
            <img src="../public/linkedin-logo.png" alt="Linkedin" class="footer-logo"/>
          </a>
          <a href="https://www.ubereats.com/fr?srsltid=AfmBOor5LEiPchLaklCu1wXfqggVUz8-pvMVTjIgFT0jLN1PugrmuI6-" target="_blank" rel="noopener noreferrer">
            <img src="../public/uber-eats.png" alt="Linkedin" class="footer-logo"/>
          </a>
        </div>
        <p>&copy; 2024 Votre Restaurant. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { provide, reactive } from 'vue';
import ItemList from './components/Items.vue';

export default {
  components: {
    ItemList
  },
  setup() {
    const cart = reactive([]);

    const addToCart = (item) => {
      const existingItem = cart.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
    };

    const removeFromCart = (item) => {
      const index = cart.findIndex(i => i.id === item.id);
      if (index > -1) {
        cart.splice(index, 1);
      }
    };

    const removeAllFromCart = () => {
      cart.length = 0;  // Réinitialise le panier en le vidant
    };
    provide('cart', cart);
    provide('addToCart', addToCart);
    provide('removeFromCart', removeFromCart);

    return {
      cart,
      addToCart,
      removeFromCart,
    };
  }
};
</script>

<style>
.app-container {
  color: #333;
  background-color: #f4f4f4;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.item-container {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  background-color: #222;
  color: #fff;
  padding: 1rem;
}

.navbar {
  display: flex;
  justify-content: center;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #444;
  border-radius: 5px;
}

.footer {
  background-color: #222; 
  color: #fff; 
  padding: 1rem; 
  text-align: center; 
  border-top: 1px solid #444; 
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  max-width: 1200px; 
  margin: 0 auto;
  padding: 1rem; 
}

.footer-links {
  display: flex; 
  justify-content: center; 
  gap: 1rem; 
  margin-bottom: 1rem; 
}

.footer-logo {
  width: 40px; 
  height: 40px; 
  object-fit: contain; 
  transition: opacity 0.3s; 
}

.footer-logo:hover {
  opacity: 0.8; 
}

.footer p {
  margin: 0;
  font-size: 0.9rem;
}

</style>
