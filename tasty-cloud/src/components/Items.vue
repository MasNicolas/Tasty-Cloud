<template>
  <h2>Plats disponible </h2>
  <section class="card-container">
    <div v-for="item in items" :key="item.id" class="card">
      <img :src="item.image" alt="Image du plat" class="card-image" />
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
  name: 'ItemList',
  data() {
    return {
      items: [
      {
  id: 1,
  name: 'Pâtes bolognaise',
  description: 'Pâtes servies avec une sauce bolognaise riche à base de viande hachée, tomates et herbes.',
  price: 10,
  image: '../../public/pates-bolognaise.jpg' // Image pas sous le meme format, est-ce que cela pose un probleme ?
},
{
  id: 2,
  name: 'Pâtes carbonara',
  description: "Pâtes accompagnées d'une sauce crémeuse aux œufs, pancetta et parmesan.",
  price: 15,
  image: '../../public/pates-carbonara.jpg'
},
{
  id: 3,
  name: 'Pâtes al pesto',
  description: 'Pâtes fraîches servies avec une sauce au basilic, ail, pignons de pin et parmesan.',
  price: 12,
  image: "../../public/pates-pesto.jpeg"
},
{
  id: 4,
  name: 'Pâtes arrabiata',
  description: "Pâtes dans une sauce tomate épicée à l'ail, parfait pour les amateurs de sensations fortes.",
  price: 13,
  image: "../../public/pates-arrabiata.jpeg"
},
{
  id: 5,
  name: 'Lasagnes',
  description: 'Pâtes superposées avec de la viande hachée, de la béchamel et du fromage, gratinées au four.',
  price: 18,
  image: '../../public/lasagnes.jpeg'
},
{
  id: 6,
  name: 'Pâtes aux fruits de mer',
  description: "Délicieuses pâtes mélangées à des fruits de mer, sur son lit de sardines fraîches.",
  price: 20,
  image: "../../public/pates-fruits-de-mer.webp"
},
{
  id: 7,
  name: 'Pâtes primavera aux légumes',
  description: "Pâtes légères et fraîches, garnies de légumes de saison sautés à l'huile d'olive,",
  price: 14,
  image: "pates-legumes.jpeg"
},
{
  id: 8,
  name: 'Pâtes aux truffes noires',
  description: 'Pâtes raffinées, servies avec une sauce onctueuse parfumée aux truffes noires.',
  price: 25,
  image: "pates-truffes_noires.jpg"
},
{
  id: 9,
  name: 'Pâtes aux quatre fromages',
  description: 'Un mélange crémeux de quatre fromages fondus, créant une sauce riche pour des pâtes al dente.',
  price: 16,
  image: "pates-quatre_fromages.webp"
},
{
  id: 10,
  name: 'Raviolis ricotta épinards',
  description: 'Raviolis frais farcis à la ricotta et aux épinards, nappés de beurre et de sauge.',
  price: 17,
  image: "pates-epinards.jpg"
}
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
