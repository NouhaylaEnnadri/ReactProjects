import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { name } = useParams();
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  /**
   * Fetches the recipe details from the API using the recipe ID.
   * @param {string} id - The ID of the recipe to fetch.
   */
  const getRecipe = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRecipe(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  /**
   * Calls the getRecipe function when the component mounts or the `name` parameter changes.
   */
  useEffect(() => {
    getRecipe(name);
  }, [name]);

  /**
   * Toggles the display of ingredients, hiding the instructions.
   */
  const toggleIngredients = () => {
    setShowInstructions(false);
    setShowIngredients(true);
  };

  /**
   * Toggles the display of instructions, hiding the ingredients.
   */
  const toggleInstructions = () => {
    setShowIngredients(false);
    setShowInstructions(true);
  };

  return (
    <div className="card lg:card-side bg-base-200 shadow-base-300 shadow-2xl mt-12">
      <div className="card-body p-6 flex flex-col md:flex-row items-start">
        <figure className="mb-6 md:mb-0 md:mr-6 flex items-center justify-center">
          <div>
            <h2 className="card-title text-2xl font-bold mb-6 text-primary p-6">
              {recipe.title}
            </h2>
            <img
              src={recipe.image}
              alt="Recipe"
              className="w-96 h-auto rounded-lg border border-gray-300"
            />
          </div>
        </figure>

        <div className="flex-1">
          <div className="mb-6">
            <div className="card-actions flex justify-end p-6">
              <button
                className={`btn ${
                  showIngredients ? "btn-accent" : "btn-outline btn-primary"
                } ml-2`}
                onClick={toggleIngredients}
              >
                Ingredients
              </button>

              <button
                className={`btn ${
                  showInstructions ? "btn-accent" : "btn-outline btn-primary"
                } ml-2`}
                onClick={toggleInstructions}
              >
                Instructions
              </button>
            </div>
          </div>

          {showInstructions && (
            <>
              <h3
                className="text-lg leading-relaxed mb-4 text-accent-content"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              ></h3>
              <h2
                className="text-lg leading-relaxed mb-4 text-accent-content"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></h2>
            </>
          )}

          {showIngredients && (
            <ol>
              {recipe.extendedIngredients.map((ing, index) => (
                <li key={index}>- {ing.original}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
