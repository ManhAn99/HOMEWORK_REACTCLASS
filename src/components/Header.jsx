import React from 'react'
import Image from '../assets/logo.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge,Select,MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
const Header = ({handleOnChange,handleSort,sort,category,handleCategory}) => {
    return (
        <div className = 'p-5 shadow-md h-20 flex items-center justify-between'>
            <div className = 'flex items-center'>
                <div className = 'relative w-10 h-10  overflow-hidden'>
                  <img className = 'object-cover w-full h-full' src={Image} alt="logo" />
                </div>
                <h1 className = 'pl-3 text-blue-900 font-medium text-xl'>E-Commerce</h1>
            </div>
            <div className = 'flex items-center'>
              
              <TextField 
               
               id="standard-basic" 
               label="Search"
               onChange = {(e) => handleOnChange(e.target.value)}
                 />
               

               <div className = 'flex items-center pt-4'>
               <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={sort}
                 onChange = {(e) => handleSort(e.target.value)}
                 className = 'mx-5'
                   >
               <MenuItem value= 'latest'>Latest</MenuItem>
               <MenuItem value= 'highest'>Highest</MenuItem>
                <MenuItem value= 'lowest'>Lowest</MenuItem>
               </Select>

               <Select
                 className = 'mx-5'
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={category}
                 onChange = {(e) => handleCategory(e.target.value)}
                   >
               <MenuItem value= 'all'>All</MenuItem>
               <MenuItem value= "men's clothing">Men</MenuItem>
                <MenuItem value= "women's clothing">Woman</MenuItem>
                <MenuItem value= 'jewelery'>Jewelery</MenuItem>
                <MenuItem value= 'electronics'>Electronics</MenuItem>
               </Select>
              
               <Badge className = 'cursor-pointer' badgeContent={4} color="secondary">
                <ShoppingCartIcon />
               </Badge>
               </div>
             </div>
             </div>
    )
}

export default Header
