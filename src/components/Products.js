import { Component } from 'react'
import Product from './Product'


const style = {
   products: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
   }
 }

class Products extends Component {

   render() {
      const {products, agregarAlCarro} = this.props
      return (
         <div style={style.products}>
            {products.map(product =>
               <Product
               agregarAlCarro={agregarAlCarro}
               key={product.name}
               product={product}
            />)}
         </div>
      )
   }
}

export default Products