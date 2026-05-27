import AddProductForm from "@/components/AddProductForm";

const AddProductPage = () => {
  
  return (
    <div className="flex flex-col items-center pb-10 pt-5 px-3 md:px-0">
      <h2 className="text-3xl font-bold py-3">Add Product</h2>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
