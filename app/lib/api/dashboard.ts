
export const getLatestTrasactions = () => {
    return fetch("https://olympus-backend.vercel.app/api/orders/latest", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDgzMzQ3OCwiZXhwIjoxNjc1MDkyNjc4fQ.NFqi2E972sM-lLxqdeC6nahr8SbxWGmLfloojy-viM0` } })
        .then((res) => res.json())
}


