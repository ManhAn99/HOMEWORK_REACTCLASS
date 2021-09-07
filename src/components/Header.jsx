import React from 'react'
import Image from '../assets/commerce.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import { TextField } from '@material-ui/core';
const Header = ({handleOnChange}) => {
    return (
        <div className = 'p-5 shadow-md h-20 flex items-center justify-between'>
            <div className = 'flex items-center'>
                <div className = 'relative w-10 h-10  overflow-hidden'>
                  <img className = 'object-cover w-full h-full' src={Image} alt="logo" />
                </div>
                <h1 className = 'pl-3 text-blue-900 font-medium text-xl'>E-Commerce</h1>
            </div>
            <TextField 
             id="standard-basic" 
             label="Standard"
             onChange = {(e) => handleOnChange(e.target.value)}
             />
            <Badge className = 'cursor-pointer' badgeContent={4} color="secondary">
              <ShoppingCartIcon />
             </Badge>
        </div>
    )
}

export default Header
