import { useState } from "react";

const AddRecipeForm  = () => {

    const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    })

    const [errors, setErrors] = useState({
        title: false,
        ingredients: false,
        steps: false,
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setErrors((prev) => ({ ...prev, [e.target.name]: false }))
    };

    const validateForm = () => {
        const newErrors = {
            title: formData.title.trim() === "",
            ingredients: formData.ingredients.trim() === "",
            steps: formData.steps.trim() === "",
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            console.log("Validation failed");
            return;
        }
        console.log("Form submitted", formData);
    };

    return ( 
        <div className="bg-recipe-mid w-[90%] md:w-[60%] my-auto h-auto  flex flex-col items-center rounded shadow-md shadow-gray-400">
            <span className="font-playfair text-[30px] tracking-wide font-medium my-2">Add new recipe</span>
            <form onSubmit={handleSubmit} className="w-[90%]">
                <div className="flex flex-col my-2">
                    <span className="font-poppins text-[20px] my-2 tracking-[0.7px] ">Title :</span>
                    <input type="text" name="title"value={formData.title} className={`p-2 rounded-lg text-center w-full ${  errors.title ? "border-2 border-red-500" : "border border-gray 300" }`} onChange={handleChange} placeholder="Type here!" />
                </div>
                <div className="flex flex-col my-2">
                    <span className="font-poppins text-[20px] my-2 tracking-[0.7px] ">Ingredients :</span>
                    <textarea type="text" name="ingredients"value={formData.ingredients} className={`p-2 rounded-lg text-center  ${  errors.ingredients ? "border-2 border-red-500" : "border border-gray 300" }`} onChange={handleChange} rows='5' cols='30' placeholder="Type here!" />
                </div>
                <div className="flex flex-col my-2">
                    <span className="font-poppins text-[20px] my-2 tracking-[0.7px] ">Preparation steps :</span>
                    <textarea type="text" name="steps"value={formData.steps} className={`p-2 rounded-lg text-center  ${  errors.steps ? "border-2 border-red-500" : "border border-gray 300" }`} onChange={handleChange}  rows='5' cols='30' placeholder="Type here!" />
                </div>
                <button type="submit" className="p-4 text-white mt-4 rounded-md bg-recipe-dark mb-2 md:hover:scale-105 transition duration-200">Add recipe</button>
            </form>
        </div>
     );
}
 
export default AddRecipeForm ;