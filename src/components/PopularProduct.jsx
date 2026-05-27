import { getAllProducts } from "@/lib/product/data";

import ProductCard from "./ProductCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const PopularProduct = async () => {
  const productData = await getAllProducts();
  // console.log(productData, "Products data from Database");
  const limitedProducts = productData.slice(0, 10);
  // console.log(limitedProducts);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {limitedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex flex-col my-5 items-center">
        <Link href={"/products"}>
          {" "}
          <Button variant="primary">See All Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularProduct;
