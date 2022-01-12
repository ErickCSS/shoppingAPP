import { Component } from "react"

const styles ={
   layout: {
      color: '#023047',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
   },
   container: {
      maxWidth: '1200px',
      width: '100%',
   }
}

class Layout extends Component {

   render() {

      return(
         <section style={styles.layout}>
            <div style={styles.container}>
               {this.props.children}
            </div>
         </section>
      )
   }
}

export default Layout