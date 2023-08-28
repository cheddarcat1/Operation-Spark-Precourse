const pizzaParty = (friends) => {
  // Create an empty array to store pizza lovers
  const pizzaLovers = [];

  // Use forEach to iterate through the friends array
  friends.forEach((friend) => {
    // Use the filter method to check if 'pizza' is in the favFoods array
    const pizzaFav = friend.favFoods.filter((food) => food === 'pizza');

    // If friend likes pizza (pizzaFav array is not empty), push them to the pizzaLovers array
    if (pizzaFav.length > 0) {
      pizzaLovers.push(friend);
    }
  });

  // Use filter method again to create a new array containing friends who like pizza
  const pizzaFriends = pizzaLovers.filter((friend) => friend.favFoods.includes('pizza'));

  return pizzaFriends;
};
