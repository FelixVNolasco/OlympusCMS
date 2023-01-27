
export const getAllUsers = () => {
    return fetch("https://olympus-backend.vercel.app/api/users/", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDgzMzQ3OCwiZXhwIjoxNjc1MDkyNjc4fQ.NFqi2E972sM-lLxqdeC6nahr8SbxWGmLfloojy-viM0` } })
        .then((res) => res.json())
}

export const getUser = (id: string) => {
    return fetch(`https://olympus-backend.vercel.app/api/users/find/${id}`, { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDg0MTg4MCwiZXhwIjoxNjc1MTAxMDgwfQ.vH_o664tcq8DE82iewEuyWIS14dnDsyj20DmEO5NexY` } })
        .then((res) => res.json())
}

export const getLatestUser = () => {
    return fetch("https://olympus-backend.vercel.app/api/users/?new=null", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDgzMzQ3OCwiZXhwIjoxNjc1MDkyNjc4fQ.NFqi2E972sM-lLxqdeC6nahr8SbxWGmLfloojy-viM0` } })
        .then((res) => res.json())
}

