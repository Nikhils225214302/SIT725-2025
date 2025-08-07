// This acts like a fake database for now
const foodItems = [
    { id: 1, name: 'Coffee', price: '$5' },
    { id: 2, name: 'Donuts', price: '$4' },
    { id: 3, name: 'Cookies', price: '$3' }
  ];
  
  // Service function to get all food items
  const getAllFood = () => {
    return foodItems;
  };
  
  module.exports = {
    getAllFood
  };
  