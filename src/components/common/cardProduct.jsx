import PropTypes from 'prop-types'
import Product from '../../assets/image/product.png'

const card = ({ title, description }) => {
  return (
    <div className='flex flex-col gap-3 justify-between items-center text-center 2xl:w-96 xl:w-80 lg:w-80 md:w-[500px] xs:w-72 px-4 pt-12 pb-5 rounded-xl card'>
      <img className='xl:w-56 w-36' src={Product} alt="card-image" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

card.propTypes = {
  // image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default card