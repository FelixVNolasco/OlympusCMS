import Image from "next/image";

export const MenuItem = ({ item }: { item: any }) => {
    return (
        <div className="flex flex-row">
            <Image src={item.img} alt={`${item.title} Logo`} width={24} height={24} />
            <span className="font-semibold text-lg ml-2">{item.title}</span>
        </div>
    );
};