import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductCard = ({ product }: { product: any }) => {
    return (
        <Link
            href={`/products/${product._id}`}
            className="border-slate-400 border-2 rounded-sm drop-shadow-lg shadow-sm shadow-slate-500 transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
        >
            <div className="flex flex-col p-4">
                <div className="flex justify-around rounded-md">
                    {product.img === "" ? (
                        <Image
                            src="https://www.svgrepo.com/show/230988/profile-user.svg"
                            alt=""
                            className="rounded-md"
                            width={64}
                            height={64}
                        />
                    ) : (
                        <Image className="rounded-md" src={product.img} alt="" width={128} height={128} />
                    )}
                </div>

                <span className="mt-2">{product.title}</span>
                <span className="mt-2">{`$${product.price}`}</span>
                {
                    product.inStock ?
                        <span className="mt-2">In Stock</span>
                        :
                        <span className="mt-2">Out of Stock</span>
                }
            </div>
        </Link>
    );
};