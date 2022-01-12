import { Component } from "react"

const styles = {
   button: {
      backgroundColor: '#fb8500',
      color: '#fff',
      padding: '0.8em 2em',
      border: '2px solid #fb8500',
      borderRadius: '15px',
      cursor: 'pointer'
   }
}

class Button extends Component {
   render() {
      return(
         <button style={styles.button} {...this.props} />
      )
   }
}


export default Button