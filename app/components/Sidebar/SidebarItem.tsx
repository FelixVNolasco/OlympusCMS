import Image from "next/image";
import Link from "next/link";

export const SidebarItem = ({ item }: { item: any }) => {
    return (
        <>
            <Link href={item.path}>
                <li className="font-medium cursor-pointer hover:bg-gray-400 transition ease-in-out p-2 rounded-md">
                    <div className="flex flex-row justify-between">
                        <span>{item.title}</span>
                        <Image src={item.img} alt="" width={24} height={24} />
                    </div>
                </li>
            </Link>
        </>
    );
};