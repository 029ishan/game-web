import React from "react";
import { TbShoppingCartFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import {showData} from "../features/DetailSlice"
import { useNavigate } from "react-router-dom";

function TrendingGameList({ gameList }) {
  const navigate=useNavigate();
  const handleDetail=(item)=>{
    dispatch(showData([item]));
    navigate("/detail")
     
  }
  const dispatch=useDispatch();


  return (
    <div className="hidden md:block mt-5">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
         lg:grid-cols-4 gap-6 mt-5"
      >
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div 
                className="pb-14  
                hover:scale-110 transition-all  relative duration-300 cursor-pointer"
               
                
                key={item.id}
              >
                <div onClick={()=>handleDetail((item))}>
                <img
                  src={item.background_image}
                  width={1080}
                  className="w-full h-[270px] rounded-t-xl object-cover"
                />
                <div className="  p-2 h-[80px] w-full backdrop-blur-sm
                bg-[#76a8f75e] rounded-b-xl bg-gradient-to-b">
                  <h2 className=" dark:text-white  text-[20px] font-bold ">
                    {item.name}
                    
                   
                  </h2>
                  <h2> {item.price} </h2>
                </div>
                </div>
                <section className="flex justify-center">
                        <button className="flex items-center gap-1 shadow-black shadow-md"onClick={()=>dispatch(addToCart(item))}>Add to cart 
                           <TbShoppingCartFilled/> </button>
                    </section>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGameList;
