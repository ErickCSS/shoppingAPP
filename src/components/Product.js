import { Component } from 'react';
import Button from './Button'

const styles = {
   product: {
      border: '2px solid #fb8500',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 5px rgb(0,0,0, 0.1)',
      padding: '2em',
      margin: '0.5em'
   },
   img: {
      height: 'auto',
      width: '100%'
   }
}

class Product extends Component{

   render() {
      const {product, agregarAlCarro} = this.props
      // Para acceder a una props de una función, siempre debo hacerlo dentro de la metodo o propiedad de render().
      return (
         <div style={styles.product}>
            <img style={styles.img} alt={product.name} src={product.img} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Button onClick={() => agregarAlCarro(product)}>
            Agregar al Carro
            </Button>
            {/* Esto también es una propiedad, que se llama child, así que si quiero obtener este valor, lo tengo que pasar como una propiedad */}
         </div>
      )
   }
}

export default Product