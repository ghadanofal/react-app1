import React from 'react'
import OneProduct from './OneProduct'

export default function Product() {
  const product = [
    {id:1,title:'product one',desc:'this is product one', price:'100'},
    {id:2,title:'product two',desc:'this is product two', price:'200'},
    {id:3,title:'product three',desc:'this is product three', price:'300'},
    {id:4,title:'product four',desc:'this is product four', price:'400'},
    {id:5,title:'product five',desc:'this is product five', price:'500'},
    {id:6,title:'product three',desc:'this is product six', price:'600'},
];
  return (
  <container>
    <div className="row mt-5">
      {product.map((ele)=>{
          return <OneProduct {...ele} key={ele.id}/>
        })
        
      }
      
      
      
      
    </div>
    </container>
  )
}
