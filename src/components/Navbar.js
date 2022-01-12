import { Component } from "react"
import Logo from './Logo'
import Car from './Car'

const style = {
   nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100px',
      padding: '0 1.5em',
      position: 'relative',
      boxShadow: '0 2px 3px rgb(0,0,0, 0.1)'
   }
}

class Navbar extends Component {
   render() {
      const {car} = this.props
      return(
         <nav style={style.nav}>
            <Logo />
            <Car car={car} />
         </nav>
      )
   }
}

export default Navbar