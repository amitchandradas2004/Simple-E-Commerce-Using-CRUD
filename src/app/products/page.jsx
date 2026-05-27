import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/product/data";

const AllProductsPage = async () => {
  const productData = await getAllProducts();
  // console.log(productData);

  return (
    <div className="container mx-auto px-3 sm:px-0">
      <h2 className="text-3xl font-bold text-center sm:text-start py-5">
        Explore All Products from here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
