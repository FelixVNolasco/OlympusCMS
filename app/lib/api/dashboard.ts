
export const getLatestTrasactions = () => {
    return fetch("https://olympus-backend.vercel.app/api/orders/latest", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTEzNDAyNCwiZXhwIjoxNjc1MzkzMjI0fQ.iFMkx-qqqtbNMphwkXyhSZeno6is0bwziF9sgUk6IX8` } })
        .then((res) => res.json())
}


