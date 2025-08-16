import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../data.json'

const RecipeDetail  = () => {

    const {id} = useParams()

    const recipe = data.find(r => r.id === id)

    console.log("URL id:", id, typeof id);
console.log("Data ids:", data.map(r => {typeof r.id}));   


    if(!recipe) return <div>Recipe not found</div>

    return ( 
        <>
            <div>details {id}</div>
            <div>details {recipe.title}</div>
        </>
     );
}   
 
export default RecipeDetail ;