import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return ( 
  <div className='space-y-8'>
    <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
  </div>
  );
}
 
export default Homepage;