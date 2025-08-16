import { useState } from "react";

const AddRecipeForm  = () => {

    const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    preparation: "",
    });

    const [errors, setErrors] = useState({
        title: false,
        ingredients: false,
        preparation: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        Object.keys(formData).forEach((key) => {
        newErrors[key] = formData[key].trim() === "";
        });

        setErrors(newErrors);

        if (Object.values(newErrors).some((err) => err)) {
        console.log("Validation failed ");
        } else {
        console.log("Form submitted ", formData);
        }
    };

    return ( 
        <div className="bg-recipe-mid w-[90%] md:w-[60%] my-auto h-auto  flex flex-col items-center rounded">
            <span className="font-playfair text-[30px] tracking-wide font-medium my-2">Add new recipe</span>
            <form onSubmit={handleSubmit} className="w-[90%]">
                <div className="flex flex-col my-2">
                    <span className="font-poppins text-[20px] my-2 tracking-[0.7px] ">Title :</span>
                    <input type="text" name="title"value={formData.title} className={`p-2 rounded-lg text-center w-full ${  errors.title ? "border-2 border-red-500" : "border border-gray 300" }`} onChange={handleChange} placeholder="Type here!" />
                </div>
                <div className="flex flex-col my-2">
                    <span className="font-poppins text-[20px] my-2 tracking-[0.7px] ">ingredients :</span>
                    <textarea type="text" name="ingredients"value={formData.ingredients} className={`p-2 rounded-lg text-center  ${  errors.title ? "border-2 border-red-500" : "border border-gray 300" }`} onChange={handleChange} rows='5' cols='30' placeholder="Type here!" />
                </div>
                <div className="flex flex-col my-2">
                    <span className="font-poppins text-[20px] my-2 tracking-[0.7px] ">preparation :</span>
                    <textarea type="text" name="preparation"value={formData.preparation} className={`p-2 rounded-lg text-center  ${  errors.title ? "border-2 border-red-500" : "border border-gray 300" }`} onChange={handleChange}  rows='5' cols='30' placeholder="Type here!" />
                </div>
                <button type="submit" className="p-4 text-white mt-4 rounded-md bg-recipe-dark mb-2">Add recipe</button>
            </form>
        </div>
     );
}
 
export default AddRecipeForm ;