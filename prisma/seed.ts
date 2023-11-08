import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedUsers() {
  try {
    // Sample user data
    const usersData = [
      {
        email: 'user1@example.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'password1', // Make sure to hash the password before storing it in production
      },
      {
        email: 'user2@example.com',
        firstName: 'Jane',
        lastName: 'Smith',
        password: 'password2', // Make sure to hash the password before storing it in production
      },
      // Add more sample user data if needed
    ];

    // Insert users into the database
    for (const userData of usersData) {
      await prisma.user.create({
        data: {
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          password: userData.password,
        },
      });
    }

    console.log('Sample users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
}

seedUsers();
