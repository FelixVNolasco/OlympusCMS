import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MemberItem = ({ member }: { member: any }) => {
    const { _id, username, email, urlImage } = member;
    return (

        <Link href={`/users/${_id}`} className="flex items-center space-around mt-4 p-2 transition ease-in-out duration-200 hover:bg-slate-200">
            <div className="flex w-1/4 items-center">
                {urlImage !== "" ? (
                    <Image
                        className="rounded-md"
                        src={urlImage}
                        alt="Memberphoto"
                        height={32}
                        width={32}
                    />
                ) : (
                    <Image
                        className="rounded-md"
                        src="https://www.svgrepo.com/show/230988/profile-user.svg"
                        alt="Memberphoto"
                        height={32}
                        width={32}
                    />
                )}
            </div>
            <div className="flex w-3/4 flex-col">
                <span className="font-semibold">{username}</span>
                <span className="font-normal">{email}</span>
            </div>
        </Link>
    );
}; 



