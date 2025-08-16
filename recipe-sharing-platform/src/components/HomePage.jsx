import { useEffect, useState } from "react";
import data from '../data.json'

const Home = () => {

    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        if(!data) return

        setDataArray(data)
    },[])


    return ( 
        <div className=" max-w-[400px] sm:max-w-[950px] sm:min-w-[456px] md:w-[50%] w-full h-[100dvh] m-auto rounded grid grid-cols-1 md:grid-cols-3 gap-6 p-2 overflow-scroll md:overflow-hidden   ">
        {dataArray.map((dataR, index) => (
        <section key={index} className="lg:min-w-[220px] md:w-[100%] h-[100%] md:h-[60%] bg-gray-300 m-auto rounded-md md:hover:scale-105  hover:shadow-lg hover:shadow-gray-400 transition duration-200 p-2 flex flex-col justify-around items-center cursor-pointer">
            <span className="font-playfair text-3xl font-semibold text-center md:min-h-[72px] my-2 md:my-0">{dataR.title}</span>
            <div className="mx-auto rounded-[50%]">
                <img src={dataR.image} className="w-[200px] h-[200px] object-cover rounded-full mx-auto" alt="" />
            </div>
            <p className="font-poppins text-gray-700 min-w-[90%] p-2 md:text-[20px] text-center md:min-h-[170px]">{dataR.summary}</p>
        </section>
        ))}
        </div>
     ); 
}
 
export default Home;