import { Component } from "react";

const style = {
   cardetail: {
      backgroundColor: '#fff',
      position: 'absolute',
      boxShadow: '1px 5px 15px rgb(0,0,0, 0.3)',
      borderRadius: '15px',
      right: '25px',
      width: 300,
      marginTop: '30px',
      padding: '15px 15px',
   },
   list: {
      listStyle: 'none',
      paddingInlineStart: '0px',
      margin: 0,
   },
   productCar: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      justifyContent: 'space-between',
      borderBottom: '1px solid #8ecae6',
      paddingBottom: 10,
   },
   pCantidad: {
      marginLeft: 10,
      backgroundColor: '#8ecae6',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '15px'
   }
}

class Cardetail extends Component{
   render(){
      const {car} = this.props
      return(
         <div style={style.cardetail}>
            <ul style={style.list}>
               {car.map(x => <li style={style.productCar} key={x.name}>
                  <img alt={x.name} src={x.img} width='60' height='40' />
                  {x.name}
                  <span style={style.pCantidad}>{x.cantidad}</span>
               </li>)}
            </ul>
         </div>
      )
   }
}

export default Cardetail