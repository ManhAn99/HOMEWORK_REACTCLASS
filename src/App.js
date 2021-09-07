import axios from 'axios'
import {useEffect,useState} from 'react'
import Header from './components/Header'
import Products from './components/Products'

  function App() {

  const [products,setProducts] = useState([])
  const [searchProducts,setSearchProducts] = useState([])
 
  useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          setProducts(res.data)
          setSearchProducts(res.data)
        })
        .catch(err => console.log(err))
  }, [])

  const handleOnChange = (value) => {
    
    if(value === '') {
      setSearchProducts(products)
    }
    else{
      setSearchProducts(searchProducts.filter(item => (
            item.title.trim().toLowerCase().includes(value.trim().toLowerCase())
        )))
    }
    
    console.log(value);
  }
  console.log(searchProducts);
  return (
    <div>
       <Header handleOnChange = {handleOnChange} />
       <Products products = {searchProducts} />
     
    </div>
  );
}

export default App;
