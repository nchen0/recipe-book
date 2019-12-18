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
          tags: "Beef",
          pictureURL:
            "https://firebasestorage.googleapis.com/v0/b/recipe-book-c624d.appspot.com/o/1576681513613-1494459418304.jpeg?alt=media&token=ea78cd70-f735-411f-879e-392c08b538eb",
          owner: "pacoman757"
        }
      ]);
    });
};
