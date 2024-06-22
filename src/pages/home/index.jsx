import Hero from './hero'
import Product from './product'
import Info from "./info/"
import Service from './service'

const home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Info />
      <Service />
    </div>
  )
}

export default home