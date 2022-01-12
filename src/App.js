import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from  './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      {name: 'Tomate', price: 1500, img: '/products/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: '/products/lechuga.jpg'},
    ],
    car: [],
  }
  agregarAlCarro = (product) => {

    const {car} = this.state
    if (car.find(x => x.name === product.name)){
      const newCar = car.map(x => x.name === product.name ? ({...x, cantidad: x.cantidad + 1}) : x)

      return this.setState({car: newCar})
    }

    return this.setState({
      car: this.state.car.concat({
        ...product, cantidad: 1,
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar car={this.state.car}/>
        <Layout>
          <Title />
            <Products
            agregarAlCarro={this.agregarAlCarro}
            products={this.state.products}
            />
        </Layout>
      </div>
    )
  }
}

export default App;
