import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../data.json'

const RecipeDetail  = () => {

    const {id} = useParams()

    const recipe = data.find(r => r.id === id)

    if(!recipe) return <div>Recipe not found</div>

    return ( 
        <div className="w-[95%] sm:w-[70%] md:w-[50%] h-full mx-auto flex flex-col items-center justify-center gap-8 font-poppins">
            <div>
                <span className="font-playfair tracking-[2px] lg:text-3xl text-[24px] font-semibold text-center md:min-h-[72px] md:my-0 lg:text-[30px] md:text-[20px] ">{recipe.title}</span>
                <img src={recipe.image} className="w-[150px] h-[200px] md:w-[300px] md:h-[400px] object-cover rounded-md mt-4 mx-auto" alt="img" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="bg-recipe-mid rounded-none p-2">
                    <span className="  font-playfair tracking-[1px] lg:text-3xl text-[19px] font-semibold text-center md:min-h-[72px] my-2 md:my-0 lg:text-[30px] md:text-[20px] ">ingredients</span>
                    <p>{recipe.ingredients}</p>
                </div>
                <div className="bg-recipe-mid rounded-none p-2 ">
                    <span className="font-playfair tracking-[1px] lg:text-3xl text-[19px] font-semibold text-center md:min-h-[72px] my-2 md:my-0 lg:text-[30px] md:text-[20px] ">Description</span>
                    <p>{recipe.description}</p>
                </div>
            </div>
        </div>
     );
}   
 
export default RecipeDetail ;
