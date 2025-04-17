import React, { useState } from "react";
import '../App.css';

function RecipeGenratorComponent(){
    const[ingredients,setIngredients]=useState('');
    const[cuisine,setCuisine]=useState();
    const[dietaryRestrictions,setDietaryRestrictions]=useState();
    const[recipe,setRecipe]=useState();

    const createRecipe = async ()=>{
        try{
            const response = await fetch (`http://localhost:8080/api/ai/v1/recipe-creator?ingredients=${ingredients}&dietaryRestriction=${dietaryRestrictions}&cuisine=${cuisine}`)
            const dataResponse = await response.text();
            console.log(dataResponse)
            setRecipe(dataResponse);
        }
        catch(e){
            console.error("Error Genrating Response: ",error);
        };  
    }
    return (
        <div>
            <h2>Create a Recipe</h2>
            <input
            type="text"
            value={ingredients}
            onChange={(e)=>setIngredients(e.target.value)}
            placeholder="Enter ingredients (Comma Seperated)"
            />
            <input
            type="text"
            value={cuisine}
            onChange={(e)=>setCuisine(e.target.value)}
            placeholder="Enter Cuisine"
            />
            <input
            type="text"
            value={dietaryRestrictions}
            onChange={(e)=>setDietaryRestrictions(e.target.value)}
            placeholder="Enter DietaryRestrictions "
            />
            <button onClick={createRecipe}>Create Recipe</button>
            <div className="output">
                <pre className="recipe-text">{recipe}</pre>
            </div>
        </div>
    )

}
export default RecipeGenratorComponent;