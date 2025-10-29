import Navigation  from './component/Navigation'
import Header from './component/Header'
import ProductDetails from './component/ProductDetails'
const Home = () => {
  return (
    <div className="bg-gray-50">
        <Navigation />
        <Header />
        <ProductDetails />
    </div> 
  )
}

export default Home
