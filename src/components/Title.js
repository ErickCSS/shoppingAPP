import { Component } from "react"

const style = {
   title: {
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontSize: '3em'
   }
}

class Title extends Component {

   render() {
      return(
         <h1 style={style.title}>Super Market</h1>
      )
   }
}



export default Title