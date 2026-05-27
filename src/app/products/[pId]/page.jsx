import { getProductsDetailsById } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";

const ProductDetailsPage = async ({ params }) => {
  const paramsPage = await params;
  const { pId } = paramsPage;
  // console.log(pId);
  const data = await getProductsDetailsById(pId);
  console.log(data);
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold text-red-500">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-6">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-gray-100 rounded-2xl p-6">
            <Image
              src={data.image}
              alt={data.title}
              width={500}
              height={500}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>

            <p className="text-gray-600 leading-relaxed">{data.description}</p>

            {/* Price */}
            <div className="text-2xl font-bold text-green-600">
              ${data.price}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="text-gray-700 font-medium">
                {data.rating} / 5
              </span>
            </div>

            {/* Stock */}
            <div>
              {data.stock > 0 ? (
                <span className="text-green-600 font-semibold">
                  In Stock ({data.stock})
                </span>
              ) : (
                <span className="text-red-500 font-semibold">Out of Stock</span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-4">
              <Button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                Add to Cart
              </Button>

              <Button className="px-6 py-3 border border-gray-300 rounded-xl  transition">
                Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
