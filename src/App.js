import axios from 'axios'
import {useEffect,useState} from 'react'
import Header from './components/Header'
import Products from './components/Products'
import CircularProgress from '@material-ui/core/CircularProgress';
  function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [products,setProducts] = useState([])
  const [searchProducts,setSearchProducts] = useState([])
  const [sort,setSort] = useState('latest')
  const [category,setCategory] = useState('all')
 
  useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          setProducts(res.data)
          setSearchProducts(res.data)
        })
        .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const timeOut  = setTimeout(() => {
      setIsLoading(false)
    },3000)
    
    return () => clearTimeout(timeOut)
  }, [])
  //search
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
  //sort price
  const handleSort = (value) => {
    setSort(value)
    setSearchProducts(products.sort((a,b) => (
      value === 'lowest'
      ? a.price - b.price
      : value === 'highest'
      ? b.price - a.price
      : a.id - b.id
    )))
  }
  //sort category
  const handleCategory = (value) => {
    setCategory(value)
    if(value === 'all') {
      setSearchProducts(products)
    }
    else{
      setSearchProducts(products.filter(product => (
        product.category === value
      )))
    }
  }

  return (
    <div>
       <Header 
       handleCategory = {handleCategory}
       category = {category}
       sort = {sort}
       handleOnChange = {handleOnChange} 
       handleSort= {handleSort} />
       {isLoading ? (
         <div className = 'flex justify-center mt-12'>
          <CircularProgress/> 
         </div>
        )
       : <Products products = {searchProducts} /> 
       }
    </div>
  );
}

export default App;
