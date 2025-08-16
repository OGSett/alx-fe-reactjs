import { useEffect, useState } from "react";
import data from '../data.json'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [dataArray, setDataArray] = useState([])
    const navigate = useNavigate()
    const [goTo, setGoTo] = useState(null)

    useEffect(() => {
        if(!data) return

        setDataArray(data)
    },[])

    useEffect(() => {
        if(goTo) handlePage(goTo)
    }, [goTo]);

    const handlePage = (id) => {
        navigate(`/recipe/${id}`)
    }

    return ( 
        <div className=" max-w-[400px] sm:max-w-[950px] sm:min-w-[456px] md:w-[50%] w-full h-[100dvh] m-auto rounded grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5px] md:gap-6 p-2 overflow-scroll md:overflow-hidden   ">
        {dataArray.map((dataR, index) => (
        <section key={index} onClick={() => setGoTo(dataR.id)} className="lg:mix-w-[456px] md:w-[100%] h-[100%] md:h-[80%] lg:h-[60%] bg-gray-300 m-auto rounded-md md:hover:scale-105  hover:shadow-lg hover:shadow-gray-400 transition duration-200 p-2 flex flex-col justify-around items-center cursor-pointer">
            <span className="font-playfair lg:text-3xl text-2xl font-semibold text-center md:min-h-[72px] my-2 md:my-0 lg:text-[30px] md:text-[20px] text-[15px]">{dataR.title}</span>
            <div className="mx-auto rounded-[50%]">
                <img src={dataR.image} className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover rounded-full mx-auto" alt="" />
            </div>
            <p className="font-poppins text-gray-700 p-2 lg:text-[20px] text-[14px] text-center lg:min-h-[170px]">{dataR.summary}</p>
        </section>
        ))}
        </div>
     ); 
}
 
export default Home;