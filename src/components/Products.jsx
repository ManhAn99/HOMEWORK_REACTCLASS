import React,{useState} from 'react'
import ProductCard from './ProductCard'
import Zoom from 'react-reveal/Zoom';
import Modal from "react-modal";
import ModalProduct from './ModalProduct'
const Products = ({products}) => {
    const [product,setProduct] = useState(null)
    const [open,setOpen] = useState(false)
    const handleClick = (p) => {
        setProduct(p)
    }
    const handleClose =() => {
        setProduct(null)
    }
    return (
        <>
          <div className="grid grid-cols-3 p-7">
          {products.map(product => <ProductCard handleClick = {handleClick} className = 'flex-1' key = {product.id} product = {product} /> )}
          </div>

          {product && (
              <Modal isOpen = {true}>
                  <Zoom>
                     <ModalProduct product = {product} handleClose = {handleClose} />
                  </Zoom>
              </Modal>
          )}
        </>
      
    )
}

export default Products
