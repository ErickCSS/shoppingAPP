import { Component } from "react";

const style = {
   bubbleAlert: {
      backgroundColor: '#219ebc',
      color: '#fff',
      borderRadius: '50px',
      padding: '3px 10px',
      fontSize: '0.8em',
   }
}

class BubbleAlert extends Component {
   getNumber(n) {
      if(!n) {return ''}
      return n > 9? '9+' : n
   }
   render() {
      const {value} = this.props
      return(
         <span style={style.bubbleAlert}>
            {this.getNumber(value)}
         </span>
      )
   }
}

export default BubbleAlert