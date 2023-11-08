import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDrinks() {
  try {
    // Delete all existing drinks
    await prisma.drink.deleteMany();

    const drinksData = [
      {
        name: 'Espresso',
        ounces: 2,
        description: 'Strong coffee',
        price: 2.5,
        imgSrc: '/drinkImages/espresso.jpg', // Use the path relative to the public directory
        originalSource: 'CoffeeBeans Co.',
      },
      {
        name: 'Latte',
        ounces: 12,
        description: 'Espresso with steamed milk',
        price: 3.5,
        imgSrc: '/drinkImages/latte.jpg', // Use the path relative to the public directory
        originalSource: 'Coffee Haven',
      },
      // Add more sample drink data if needed
    ];

    for (const drinkData of drinksData) {
      await prisma.drink.create({
        data: {
          name: drinkData.name,
          ounces: drinkData.ounces,
          description: drinkData.description,
          price: drinkData.price,
          imgSrc: drinkData.imgSrc,
          originalSource: drinkData.originalSource,
        },
      });
    }

    console.log('Sample drinks seeded successfully!');
  } catch (error) {
    console.error('Error seeding drinks:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDrinks();
