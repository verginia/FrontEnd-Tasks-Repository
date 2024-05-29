// Define the recipe object
const recipe = {
    title: "Spaghetti Carbonara",
    servings: 4,
    time: "30 minutes",
    ingredients: [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g pecorino cheese",
        "50g parmesan",
        "Black pepper",
        "Salt",
        "2 cloves of garlic",
        "Small bunch of fresh flat-leaf parsley"
    ]
};

// Function to display the recipe information
function displayRecipe() {
    document.getElementById("recipeTitle").textContent = `Name of recipe: ${recipe.title}`;
    document.getElementById("recipeServings").textContent = `Number of persons: ${recipe.servings}`;
    document.getElementById("recipeTime").textContent = `Time for preparation: ${recipe.time}`;
}
// Initial call to display recipe information
displayRecipe();

// Function to show the ingredients
function showIngredients() {
    const ingredientsTitle = document.getElementById("ingredientsTitle");
    const ingredientsList = document.getElementById("recipeIngredients");
    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    ingredientsTitle.style.display = "block";
    ingredientsList.style.display = "block";
}
