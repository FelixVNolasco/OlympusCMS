import React from "react";
import { MemberItem } from "./MemberItem";

const getLatestUser = () => {
    return fetch("https://olympus-backend.vercel.app/api/users/?new=null", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIzOTA1NSwiZXhwIjoxNjc0NDk4MjU1fQ.9fWAo7ltTi_nQk6dkbFA_cQEm6YSW2BLW3il0tZZBb4` } })
        .then((res) => res.json())
}

export default async function NewMembers() {
    const latestUsers = await getLatestUser();

    return (
        <div className="md:w-5-6 lg:w-5-6 xl:w-2/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
            <div className="flex flex-col">
                <span className="text-xl font-semibold mb-4">New Members</span>
                {latestUsers.map((member: any) => {
                    return <MemberItem key={member._id} member={member} />;
                })}
            </div>
        </div>
    );
}; 

 

