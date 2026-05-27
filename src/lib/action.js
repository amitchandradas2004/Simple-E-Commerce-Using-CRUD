"use server";
import { revalidatePath } from "next/cache";

export const addProduct = async (formData) => {
  const newProduct = Object.fromEntries(formData.entries());
  const modifiedData = {
    title: newProduct.title,
    price: parseFloat(newProduct.price),
    image: newProduct.image,
    description: newProduct.description,
    stock: parseInt(newProduct.stock),
    rating: parseInt(newProduct.rating),
  };
  const res = await fetch(`http://localhost:8000/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });
  const data = await res.json();
  if (!res.ok) {
    return;
  }
  revalidatePath("/products");

  return data;
};

export const deleteProduct = async (id) => {
  const res = await fetch(`http://localhost:8000/products/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (!res.ok) {
    return;
  }

  revalidatePath("/products");
  return data;
};
