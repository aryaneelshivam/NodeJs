const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sampleDatabase')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function seedDatabase() {
  try {
    await User.deleteMany({});
    console.log('Cleared existing users collection.');

    const sampleUsers = [
      { name: 'Alice Smith', email: 'alice@example.com', age: 28 },
      { name: 'Bob Johnson', email: 'bob@example.com', age: 35, isActive: false },
      { name: 'Charlie Brown', email: 'charlie@example.com', age: 22 }
    ];

    const result = await User.insertMany(sampleUsers);
    console.log('Sample data inserted successfully:');
    console.log(result);

  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    mongoose.connection.close();
    console.log('Database connection closed.');
  }
}

seedDatabase();
