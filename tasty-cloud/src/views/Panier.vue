<template>
  <div class="cart-container">
    <h1>Votre panier</h1>
    <div v-for="(product, index) in cart" :key="index" class="cart-item">
      <img :src="product.image" class="cart-item-image" />
      <div class="cart-item-info">
        <p>{{ product.name }}</p>
        <p>Quantité: {{ product.quantity }} </p>
        <p>Prix : {{ product.price }}</p>
      </div>
      <div class="cart-item-actions">
        <button @click="increaseQuantity(product)">+</button>
        <button @click="decreaseQuantity(product)">-</button>
        <button @click="removeFromCart(product)">Retirer</button>
      </div>
    </div>
    <div class="cart-total">
      <p><strong>Total:</strong> {{ total }} €</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0); // Pas besoin de toFixed ici pour simplifier
    }
  },
  methods: {
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(item);
      }
    },
    removeFromCart(item) {
      this.$emit('remove-from-cart', item);
    }
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

.cart-item-image {
  width: 100px;
  height: 75px;
  object-fit: cover;
  margin-right: 20px;
}
.cart-item-info {
  font-size: 1rem;
}

.cart-item-actions {
  display: flex;
  gap: 0.5rem;
}

.cart-item-actions button {
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.cart-item-actions button:hover {
  background-color: #000000;
}

.cart-total {
  text-align: right;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
