"use client";
import { addProduct } from "@/lib/action";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
const AddProductForm = () => {
  const router = useRouter();
  const handleSubmit = async (formData) => {
    // "use server";
    const data = await addProduct(formData);
    if (data.insertedId) {
      router.push("/products");
    }
  };
  return (
    <Form
      action={handleSubmit}
      className="flex w-full md:w-1/2 flex-col gap-4 border p-5 rounded-2xl shadow-xl"
    >
      <TextField isRequired name="title" type="text">
        <Label>Title</Label>
        <Input placeholder="Enter Your Product Title" />
      </TextField>
      <TextField isRequired name="description" type="text">
        <Label>Description</Label>
        <Input placeholder="Enter Your Product Description" />
      </TextField>
      <TextField isRequired name="price" type="number">
        <Label>Price</Label>
        <Input placeholder="Enter Your Product Price" />
      </TextField>

      <TextField isRequired name="image" type="url">
        <Label>Image URL</Label>
        <Input placeholder="Enter Your Product Image URI" />
      </TextField>
      <TextField isRequired name="stock" type="number">
        <Label>Stock</Label>
        <Input placeholder="Enter Your Product's Stock Amount" />
      </TextField>
      <TextField isRequired name="rating" type="number">
        <Label>Rating</Label>
        <Input placeholder="Give a rating" />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          {/* <Check /> */}
          Add Product
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default AddProductForm;
