import { Component } from "react"

const style = {
   img: {
      height: 'auto',
      width: '100px',
   }
}

class Logo extends Component {

   render() {
      return(
         <div>
            <img style={style.img} src="/dear-code-brand.png" />
         </div>
      )
   }

}

export default Logo