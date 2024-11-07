
<template>
  <h2> Desserts disponible</h2>
  <section class="card-container">
    <div v-for="item in desserts" :key="item.id" class="card">
      <img :src="item.image" alt="Image du dessert" class="card-image" />
      <div class="card-content">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p><strong>Prix:</strong> {{ item.price }} €</p>
        <button @click="addToCart(item)">Ajouter au panier</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Desserts',
  data() {
    return {
      desserts: [
        {
          id: 11,
          name: 'Tiramisu',
          description: 'Un dessert classique avec des couches de mascarpone et de café.',
          price: 7,
          image: '/tiramisu.jpg'
        },
        {
          id: 12,
          name: 'Crème brûlée',
          description: 'Un dessert crémeux à la vanille avec une croûte de sucre caramélisé.',
          price: 8,
          image: '/creme_brulee.jpeg'
        },
        {
          id: 13,
          name: 'Cheesecake',
          description: 'Un cheesecake riche et crémeux avec une croûte de biscuit graham.',
          price: 9,
          image: '/cheescake.webp'
        },
        // Ajoutez d'autres desserts ici
      ]
    };
  },
  methods: {
    addToCart(item) {
      this.$emit('add-to-cart', item);
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-container {
  padding-top: 20px;
  display: flex;  
  justify-content: center; 
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

button {
  background-color: #333;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
