import React from 'react'

const ModalProduct = ({product,handleClose}) => {
    const {image,title,description,price,category} = product
    return (
        <div className="flex  ">
          <div className = ' flex-1 relative w-full h-full  overflow-hidden'>
            <img className = 'object-contain w-full h-full' src={image} alt="logo" />
          </div>
        <div className=" flex p-20 flex-col justify-between h-100 flex-1  ">
          <div className=" h-2/4 ">
           <h1 className="flex-auto text-3xl font-semibold py-10">
             {title}
           </h1>
           <h2 className="text-xl font-semibold text-gray-500">
              ${price}
           </h2>
            <h3 className="py-5 w-full flex-none text-lg font-medium text-gray-500 mt-2">
             {category}
           </h3>
            <p className="text-md text-gray-500">
            {description}
            </p>
        </div>
  
    <div className="flex space-x-3 mb-4 text-sm font-medium">
      <div className="flex-auto flex space-x-3">
        <button className="w-1/2 h-10 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
        <button 
        onClick = {() => handleClose()}
        className="w-1/2 h-10 flex items-center justify-center rounded-md border border-gray-300" type="button">Back</button>
      </div>
    </div>
  </div>
</div>

    )
}

export default ModalProduct
