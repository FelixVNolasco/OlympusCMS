
export const getProduct = (id: string) => {
    return fetch(`https://olympus-backend.vercel.app/api/products/find/${id}`, { cache: "no-store" })
        .then((res) => res.json())
}

export const getHomeProducts = () => {
    return fetch("https://olympus-backend.vercel.app/api/products", { cache: "no-store" })
        .then((res) => res.json())
}