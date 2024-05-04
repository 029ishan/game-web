import React from 'react'
import GlobalApi from '../Servies.js/GlobalApi'
import { TbShoppingCartFilled } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';
import { useNavigate } from 'react-router-dom';

function PopularGameList({gameList}) {

    const navigate=useNavigate();
    const handleDetail=(item)=>{
      dispatch(showData([item]));
      navigate("/detail")
       
    }
    
    // const getMovieDetails=(id)=>{
    //     GlobalApi.getMovieDetails(id).then(resp=>{
    //         console.log(resp);
    //     })
    // }  
    
    console.log('dasd',gameList) 
    const dispatch=useDispatch()
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-[30px] dark:text-white'>Popular Games</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
         lg:grid-cols-3 gap-6 mt-7'>
            {gameList.map((item)=>(
                <div className='pb-14 bg-slate-300 dark:bg-gray-700  p-4 rounded-lg h-full 
                hover:scale-110 transition-all duration-300 cursor-pointer' 
              
                key={item.id}>
                    <div onClick={()=>handleDetail((item))}>
                    <img src={item.background_image} width={1080} 
                    className='w-full h-[80%] rounded-xl object-cover'/>
                    <div >
                    <h2 className='text-[20px] dark:text-white font-bold line-clamp-1'>{item.name} 
                    <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
                    <h2 className='text-white py-1.5 bg-black px-3 w-1/2 text-right '> price: {item.reviews_count} Rs </h2>
                   
                    </div>
                    <section>
                        <button className='flex items-center gap-1 mt-15 shadow-black shadow-md' onClick={()=>dispatch(addToCart(item))}>Add to cart
                       < TbShoppingCartFilled/>

                        </button>
                    </section>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PopularGameList