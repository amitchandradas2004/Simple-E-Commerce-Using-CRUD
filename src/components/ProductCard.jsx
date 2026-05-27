import { CgArrowTopRight } from "react-icons/cg";
import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

const ProductCard = ({ product }) => {
  const { title, rating, price, description, image, stock } = product;
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl

        bg-white/30 dark:bg-black/20
        backdrop-blur-xl

        border border-black/10
        dark:border-white/10

        transition duration-300
        hover:scale-102
        hover:border-cyan-400/40
      "
    >
      <div className="relative h-85 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition duration-500
            group-hover:scale-105 select-none
          "
        />
      </div>

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t
          from-black/90
          via-black/20
          to-transparent
        "
      />

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white">
        <div>
          <span
            className=" ml-2
            inline-block rounded-full
            bg-white/10
            backdrop-blur-md
            px-3 py-1
            text-xs
            border border-white/10
            mb-3
          "
          >
            <span className="flex  items-center gap-1">
              {" "}
              <IoIosStar />
              {rating}
            </span>
          </span>
        </div>

        <div className="flex justify-between gap-10 items-center">
          <span>
            <h2 className="text-xl font-bold">{title}</h2>{" "}
            <h2 className="text-xs font-light line-clamp-1">{description}</h2>
          </span>

          <span>
            {" "}
            <p className="mt-2 opacity-80 text-xl font-bold">${price}</p>
          </span>
        </div>

        <Link href={`/products`}>
          <span
            className="
           text-[#00A8E7] rounded-full text-sx h-8 mt-3 flex items-center hover:text-white
            "
          >
            See Details <CgArrowTopRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
