export const getLatestUser = () => {
    return fetch("https://olympus-backend.vercel.app/api/users/?new=null", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU3MzM3OCwiZXhwIjoxNjc0ODMyNTc4fQ.0HmDQgIUxFB7s4x1sO9XphVK3v7t3VfeQFDkPjx77g8` } })
        .then((res) => res.json())
}


export const getLatestTrasactions = () => {
    return fetch("https://olympus-backend.vercel.app/api/orders/latest", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDY4OTgxMywiZXhwIjoxNjc0OTQ5MDEzfQ.JQqIOLXp5IAUtaK3ojg7L_ZOACXp9JbF_XMfQAiN7c8` } })
        .then((res) => res.json())
}