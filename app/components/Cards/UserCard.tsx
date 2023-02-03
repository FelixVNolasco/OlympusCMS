import Image from "next/image";
import Link from "next/link";
import React from "react";

export const UserCard = ({ user }: { user: any }) => {
    return (
        <Link
            href={`/users/${user._id}`}
            className="border-slate-400 border-2 rounded-sm drop-shadow-lg shadow-sm shadow-slate-500 transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
            key={user._id}
        >
            <div className="flex flex-col p-4">
                <div className="flex justify-around">
                    {user.urlImage === "" ? (
                        <Image
                            src="https://www.svgrepo.com/show/230988/profile-user.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                    ) : (
                        <Image src={user.urlImage} alt="" width={24} height={24} />
                    )}

                    <span>{user.username}</span>
                </div>

                <span className="mt-2">{user.email}</span>
            </div>
        </Link>
    );
};