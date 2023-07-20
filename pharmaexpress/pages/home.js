import Featured from '@/components/featuredproduct.js';
import Header from '../components/navbar.js';
import NewProducts from '../components/newproducts.js';
import Data from '../json/Products.json';

export default function Home({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      {featuredProduct && <Featured product={featuredProduct} />}
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredProductId = Math.floor(Math.random() * Object.keys(Data).length);
  const featuredProduct = JSON.parse(JSON.stringify(Data.find((product) => product.id === featuredProductId)));
  const newProducts = JSON.parse(JSON.stringify(Data.slice(0, 10)));

  return {
    props: {
      newProducts,
      featuredProduct,
    },
  };
}




