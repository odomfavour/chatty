import { config } from 'dotenv';
import { connectDB } from '../lib/db.js';
import User from '../models/user.model.js';

config();

const seedUsers = [
  {
    email: 'emma.thompsom@eample.com',
    fullName: 'Emma Thompson',
    password: '123456',
    profilePic: 'https://randomuser.me.api/portraits/women/1.jpg',
  },
  {
    email: 'jane.thompsom@eample.com',
    fullName: 'Jane Thompson',
    password: '123456',
    profilePic: 'https://randomuser.me.api/portraits/women/2.jpg',
  },
  {
    email: 'olivia.miller@eample.com',
    fullName: 'Olivia Miller',
    password: '123456',
    profilePic: 'https://randomuser.me.api/portraits/women/3.jpg',
  },
  {
    email: 'Sophia.thompsom@eample.com',
    fullName: 'Sophia Thompson',
    password: '123456',
    profilePic: 'https://randomuser.me.api/portraits/women/4.jpg',
  },
  {
    email: 'SammyDave@eample.com',
    fullName: 'Sammy Dave',
    password: '123456',
    profilePic: 'https://randomuser.me.api/portraits/men/1.jpg',
  },
  {
    email: 'Tommy.lee@eample.com',
    fullName: 'Tommy Lee',
    password: '123456',
    profilePic: 'https://randomuser.me.api/portraits/men/2.jpg',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database', error);
  }
};

seedDatabase();
