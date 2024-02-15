import React, { useState } from 'react'
import './calculate.css';
function Calculate() {
    const [price,setPrice]=useState();
    const [year,setYear]=useState();
    const [returpercentage,setReturnPercentage]=useState();
    const [total,setTotal]=useState(" ");
    
    
    const totalyear=(year*12);
    const totalprice=(price*totalyear);
    
    const monthlyrate=((returpercentage/12)/100);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(price===" " || year===" " || returpercentage===" "){
            alert("Enter each value");
        }
        else{
          const  total=(price *  ((Math.pow((1+monthlyrate),totalyear)) - 1)/monthlyrate)*(1+monthlyrate) ;
        setTotal(total.toFixed(2));
        }
        
        
    
       
        
        


    }
    
    

    return (
    <div className='calculator'>
        <h1>SIP CALCULATOR</h1>
       <img src='https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg' alt='calculatorphoto'/> 
        <form onSubmit={handleSubmit} className='box'>
            
        <label>Enter The Price</label>
    <input type='text' placeholder='Enter your price' value={price} onChange={(e)=>setPrice(e.target.value)} />
    <label>Enter The Year</label>
    <input type='text' placeholder='Enter your year' value={year} onChange={(e)=>setYear(e.target.value)}/>
    <label>Enter The Percentage per year</label>
    <input type='text' placeholder='Enter your return percentage' value={returpercentage} onChange={(e)=>setReturnPercentage(e.target.value)}/>
    <button>Submit</button>
    <div className='total'>
        <h2>Total You Invest:{totalprice}</h2>
        <h2>Total Wealth:{total}</h2>
       
    </div>
    </form>
    
</div>
  )
}

export default Calculate