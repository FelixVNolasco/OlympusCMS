
export const getAllUsers = () => {
    return fetch("https://olympus-backend.vercel.app/api/users/", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTEzNDAyNCwiZXhwIjoxNjc1MzkzMjI0fQ.iFMkx-qqqtbNMphwkXyhSZeno6is0bwziF9sgUk6IX8` } })
        .then((res) => res.json())
}

export const getUser = (id: string) => {
    return fetch(`https://olympus-backend.vercel.app/api/users/find/${id}`, { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTEzNDAyNCwiZXhwIjoxNjc1MzkzMjI0fQ.iFMkx-qqqtbNMphwkXyhSZeno6is0bwziF9sgUk6IX8` } })
        .then((res) => res.json())
}

export const getLatestUser = () => {
    return fetch("https://olympus-backend.vercel.app/api/users/?new=null", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTEzNDAyNCwiZXhwIjoxNjc1MzkzMjI0fQ.iFMkx-qqqtbNMphwkXyhSZeno6is0bwziF9sgUk6IX8` } })
        .then((res) => res.json())
}

