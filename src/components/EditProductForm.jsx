"use client";
import { updateProduct } from "@/lib/action";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
const EditProductForm = ({ product }) => {
  const { _id, description, image, price, rating, stock, title } = product;
  const router = useRouter();
  const handleSubmit = async (formData) => {
    const data = await updateProduct(_id, formData);
    if (data.modifiedCount > 0) {
      router.push("/manageProducts");
    }
  };
  return (
    <Form
      action={handleSubmit}
      className="flex w-full md:w-1/2 flex-col gap-4 border p-5 rounded-2xl shadow-xl"
    >
      <TextField isRequired defaultValue={title} name="title" type="text">
        <Label>Title</Label>
        <Input placeholder="Enter Your Product Title" />
      </TextField>
      <TextField
        defaultValue={description}
        isRequired
        name="description"
        type="text"
      >
        <Label>Description</Label>
        <Input placeholder="Enter Your Product Description" />
      </TextField>
      <TextField defaultValue={price} isRequired name="price" type="number">
        <Label>Price</Label>
        <Input placeholder="Enter Your Product Price" />
      </TextField>

      <TextField defaultValue={image} isRequired name="image" type="url">
        <Label>Image URL</Label>
        <Input placeholder="Enter Your Product Image URI" />
      </TextField>
      <TextField defaultValue={stock} isRequired name="stock" type="number">
        <Label>Stock</Label>
        <Input placeholder="Enter Your Product's Stock Amount" />
      </TextField>
      <TextField defaultValue={rating} isRequired name="rating" type="number">
        <Label>Rating</Label>
        <Input placeholder="Give a rating" />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">Update</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default EditProductForm;
