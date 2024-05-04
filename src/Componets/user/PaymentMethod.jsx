import React, { useState } from 'react'
import {Table} from 'antd'
import { useSelector } from "react-redux";
import KhaltiCheckout from 'khalti-checkout-web';
import { Payment } from '../../util/Products';
import {Esewa} from '../user/Esewa'
import { khalti } from './Khalti';
import { Link } from 'react-router-dom';



const PaymentMethod = () => {
    const {cart} = useSelector((state) => state.addtocart);
    const [isPayment,setIsPayment]=useState({
      esewa:false,
      khalti:false,
      cod:false,
    });

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Price',
          dataIndex: 'reviews_count',
          key: 'reviews_count',
        },
        
      ];
      
      const TotalPrice = cart.reduce((previous, item) => {
        return (
          (item.reviews_count ) + previous
        )
      }, 0)

     

      const checkout = new KhaltiCheckout(khalti);
    const path="https://uat.esewa.com.np/epay/main";
    const params={
        amt:100,
        psc:0,
        pdc:0,
        txAmt:0,
        tAmt:100,
        pid:"ee2c3cal",
        scd:"EPAYTEST",
        su:"https://merchant.com.np/page/esewa_payment_success",
        fu:"https://merchant.com.np/page/esewa_payment_failed",
      }
      
      const handlePayment=(id)=>{
        console.log('safas',id);
        if(id===1){
          setIsPayment({
            esewa:true,
            khalti:false,
          })
        }
      else if(id===2){
           checkout.show({ amount: TotalPrice });
         
        }
      }
  return (
    <div className=' mt-5 font-varela px-6'>
      <div className=' grid grid-cols-4 gap-x-3'>
      <div className=' col-span-2' >
      <Table dataSource={cart} columns={columns} 
      rowKey={cart=>cart.id}/> </div>
      <div className=' col-span-2'>
      <h2 className='text-orange-400 text-lg'>Payment Method</h2>
      <section className=' flex gap-x-4 pt-3'>
      
        {
          Payment.map((item,idx)=>{
            return(
                <div key={idx} style={{color:`${item.color}`}} className=' h-8 text-lg 
                font-varela' onClick={()=>handlePayment(item.id)}>
                  <img src={item.logo} alt="logo" className='  h-14'/>
                  <h1 className=' text-center'>{item.name}</h1>
                </div>
            )
          })
        }
       
        </section>
        {
          isPayment.esewa &&(
            <Esewa path={path} params={params}/>
          )
        } 
      </div>
      </div>
      <div className=' flex justify-center gap-3'>
      <h1 className='text-lg mt-5'> Total Amount: {TotalPrice} </h1>
      
        
      
      
      </div>
      <Link to={'/'}> 
      <button>
          BacktoHome
        </button>
        </Link>
    </div>
  )
}

export default PaymentMethod