import { Button, Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart } from '../features/CartSlice';
import TextArea from 'antd/es/input/TextArea';





const Details = () => {
  const {detail}=useSelector((state)=>state.detailslice)

  console.log("detail",detail);
  const dispatch=useDispatch();
  
  return (
   
    <div className=' font-varela bg-neutral-800 min-h-screen'>
      {/* <Header/>  */}
      <h1 className=' pt-14 px-10 text-center text-3xl text-white'>Details</h1>
      <div className=' px-10 pt-4'>
      { detail.map((item)=>{
        return(
          <div key={item.id} className=' md:flex gap-x-5'>
      <img src={item.background_image} className=' md:h-80 h-52 rounded mx-auto '/>
      <section className=' space-y-1'>
        <h1 className=' text-2xl text-blue-300'>{item.name}</h1>
        <h1 className=' text-lg text-red-200'>Rating: {item.rating}</h1>
        <h1 className=' text-lg text-white'>esrb_rating: {item.esrb_rating.name}</h1>
        <h1 className=' text-lg text-white'>metacritic: {item.metacritic}</h1>
<TextArea></TextArea>
       
        
      </section> 
      <section> 
      <button onClick={()=>dispatch(addToCart(item))} > Add to cart</button>
      </section>
          </div>
        )
      })} 
      </div>
      <div className=' text-center mt-8 space-x-5'>
      <Link to="/payment"><Button className=' bg-green-400 border-none rounded-sm w-1/4 font-varela text-white'>
      Buy Now</Button>
            </Link>
             
             <Link to={'/'}> 
            <button>Back to home</button>
            </Link>
      </div>
      
    </div>
  
  )
}

export default Details