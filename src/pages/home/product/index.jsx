import Card from '../../../components/common/cardProduct';
import homeProduct from '../../../utils/homeProduct';

const Product = () => {
  return (
    <div className="w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto mt-36">
      <h1 className="text-center">Produk Mesin Pembuat Rokok dan Suku Cadang</h1>
      <div className='mt-12 flex flex-col lg:flex-row xs:gap-5 items-center justify-between'>
        {homeProduct.map((product, index) => (
          <Card 
            key={index} 
            title={product.title} 
            description={product.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
