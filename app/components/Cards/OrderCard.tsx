import React from 'react'
import Link from 'next/link';

export default function OrderCard({ order }: { order: any }) {

    const { userId, amount, status, createdAt, updatedAt } = order;


    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const createdAtDate = new Date(createdAt);
    const updatedAtDate = new Date(updatedAt);

    const createdAtDateFormatted = createdAtDate.toLocaleDateString("en-Us", options);
    const updatedAtDateFormateed = updatedAtDate.toLocaleDateString("en-Us", options);

    return (
        <Link
            href={`/users/${userId}`}
            className="border-slate-400 border-2 rounded-sm drop-shadow-lg shadow-sm shadow-slate-500 transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
        >
            <div className="flex flex-col p-4">
                {/* <div className="flex justify-around rounded-md">
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
                </div> */}
                <span className="mt-2">{`$${amount}`}</span>
                {
                    status === "pending" ?
                        <span className="mt-2 w-max p-1 bg-yellow-100 font-semibold rounded-md">{status}</span>
                        :
                        (<span className="mt-2 w-max p-1 bg-green-200 font-semibold rounded-md">{status}</span>)

                }
                <span className="text-xs mt-2">{`Created: ${createdAtDateFormatted}`}</span>
                <span className="text-xs mt-1">{`Updated: ${updatedAtDateFormateed}`}</span>
            </div>
        </Link>
    )
}
