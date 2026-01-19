import dotenv from 'dotenv'
dotenv.config();
import { connectDB } from '../config/db.js';
import { Product } from '../models/Product.js';



 const seedProducts = [
    {
      
      title: "Classic Tee",
      price: 699,
      image: "https://picsum.photos/seed/tee/600/600",
      rating: 4.3,
      stock: 12,
      category: "tshirts",
      description: "Soft cotton tee for daily wear."
    },
    {
     
      title: "Hoodie",
      price: 1499,
      image: "https://picsum.photos/seed/hoodie/600/600",
      rating: 4.6,
      stock: 8,
      category: "hoodies",
      description: "Cozy fleece hoodie with kangaroo pocket."
    },
    {
     
      title: "Cap",
      price: 399,
      image: "https://picsum.photos/seed/cap/600/600",
      rating: 4.1,
      stock: 20,
      category: "accessories",
      description: "Adjustable cotton cap."
    }
  ];


  async function run() {

    await connectDB(process.env.MONGODB_URI);
    await Product.deleteMany({});
    const created = await  Product.insertMany(seedProducts)
    console.log(`Seeded ${created.length} products`)
    process.exit(0)
  }

  run().catch((error) => {
    console.error("Seed Error:", error);
    process.exit(1);
});
  

