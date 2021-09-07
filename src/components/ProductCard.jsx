import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const ProductCard = ({product,handleClick}) => {
    const {price,title,category,image} = product
    return (
            <div className="p-10 ">  
            
             <div className="rounded  overflow-hidden  shadow-xl ">
              <img className="w-full object-contain h-64"  src={image} alt="Mountain"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 truncate">{title}</div>
                <div className = 'flex items-center justify-between'>
                   <div>
                   <p className="text-gray-700 text-lg py-3">
                     {category}
                   </p>
               
                    <p className="text-gray-700 font-semibold text-base">
                    ${' '} {price}
                    </p>
                    <p 
                    className="text-gray-700 font-semibold text-base pt-5 cursor-pointer"
                    onClick = {() => handleClick(product)}
                    >
                     Detail
                     <ArrowForwardIcon />
                    </p>
                  </div> 
                  <AddShoppingCartIcon className = 'cursor-pointer' />
               </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                
              </div>
            </div>
           
          </div>
    )
}

export default ProductCard
