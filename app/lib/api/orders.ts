
export const getOrder = (id: string) => {
    return fetch(`https://olympus-backend.vercel.app/api/products/find/${id}`, { cache: "no-store" })
        .then((res) => res.json())
}

export const getOrders = () => {
    return fetch("https://olympus-backend.vercel.app/api/orders", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTM1NDkyMiwiZXhwIjoxNjc1NjE0MTIyfQ.NaQ5nhdBnO9HutfgpamgMMFMPXwByvTiv46UpKgcfZo` } })
        .then((res) => res.json())
}