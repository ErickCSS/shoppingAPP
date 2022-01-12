import { Component } from "react"
import BubbleAlert from './BubbleAlert'

const style = {
   car: {
      backgroundColor: '#fb8500',
      color: '#fff',
      border: '2px solid #fb8500',
      borderRadius: '20px',
      padding: '0.7em 1em',
      cursor: 'pointer',
   },
   bubble: {
      position: 'relative',
      left: 15,
      top: 15,
   }
}

class Car extends Component {
   render() {
      const {car} = this.props
      const cantidad = car.reduce((acc, el) => acc + el.cantidad, 0)
      return(
         <div>
            <span style={style.bubble}>
            {cantidad != 0 ? <BubbleAlert value={cantidad}/> : null}
            {/* Esto es un Render Condicional */}
            </span>
            <button style={style.car}>
               Carro
            </button>
         </div>
      )
   }
}

export default Car