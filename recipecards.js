const container = document.querySelector(".container")

function displayRecipeCards() {
    const recipes = json.response.hits;
    if (recipes.length === 0) {
        const  para = document.createElement("p");
        para.textContent = "No results found";
        container.appendChild(para);
    } else {
        for (let i = 0; i < recipes.length; i++) {
            const recipe = document.createElement("card");
            const link = document.createElement("a");
            const img = document.createElement("img");
            const recipeName = document.createElement("p");
            const addFavorites = document.createElement("button");

            const current = recipes[i];
            console.log(current);

            link.href = current.totalNutrients.url;
            img.src = current.images.THUMBNAIL;
            recipeName.textContent = current.ingredients.label;

            recipe.appendChild(link);
            recipe.appendChild(img);
            recipe.appendChild(recipeName);
            recipe.appendChild(addFavorites);
            container.appendChild(recipe);
        }
    }
}

