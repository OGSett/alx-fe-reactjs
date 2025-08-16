import { useEffect, useState } from "react";
import data from '../data.json'

const Home = () => {

    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        if(!data) return

        setDataArray(data)
    },[])


    return ( 
        <div className=" max-w-[400px] sm:max-w-[950px] sm:min-w-[456px] md:w-[50%] w-full h-[80vh] m-auto rounded grid grid-cols-1 md:grid-cols-2 gap-6 p-2 ">
        {dataArray.map((dataR, index) => (
        <section key={index} className="lg:min-w-[220px] md:w-[100%] h-[100%] md:h-[60%] bg-gray-300 m-auto rounded-md md:hover:scale-105 transition-transform duration-200 p-2 flex flex-col justify-around items-center cursor-pointer">
            <span className="font-playfair text-3xl font-semibold text-center ">{dataR.title}</span>
            <img src={dataR.image} className="w-[70%] h-auto mx-auto rounded" alt="" />
            <p className="font-poppins text-gray-700 min-w-[90%] p-2 md:text-[20px] text-center">{dataR.summary}</p>
        </section>
        ))}
        </div>
     ); 
}
 
export default Home;