import EditProductForm from "@/components/EditProductForm";
import { getProductsDetailsById } from "@/lib/data";

const EditProductPage = async ({ params }) => {
  const { pId } = await params;
  const product = await getProductsDetailsById(pId);
  // console.log(product);

  return (
    <div className="flex flex-col items-center pb-10 pt-5 px-3 md:px-0">
      <h2 className="text-3xl font-bold py-3">Edit Product</h2>
      <EditProductForm product={product} />
    </div>
  );
};

export default EditProductPage;
