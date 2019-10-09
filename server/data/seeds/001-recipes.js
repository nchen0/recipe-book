exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Meatloaf",
          ingredients: "2 tablespoons brown sugar, 1.5lb ground beef, 1egg",
          directions:
            "In a large bowl, combine the beef, egg, onion, milk and bread OR cracker crumbs. Season with salt and pepper to taste and place in a lightly greased 5x9 inch loaf pan, OR form into a loaf and place in a lightly greased 9x13 inch baking dish.",
          tags: "Beef"
        },
        {
          name: "Omelette",
          ingredients: "10+ eggs, green or red bellpeppers, bacon/sausage",
          directions: "Cook eggs",
          tags: "Eggs"
        }
      ]);
    });
};
