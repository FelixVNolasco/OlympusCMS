import React from 'react'
import Image from 'next/image';

const getUser = (id: string) => {
  return fetch(`https://olympus-backend.vercel.app/api/users/find/${id}`, { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzU4NTU2MCwiZXhwIjoxNjczODQ0NzYwfQ.M3EIq2l20AZyWkNzNDYkqAyFVaQq_KwM2QH0rSNN53E` } })
    .then((res) => res.json())
}

export default async function page({ params }: any) {

  const { id } = params;
  const user = await getUser(id);

  return (
    <div className="flex flex-col mt-2 mr-6 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
      <div className="container mx-auto my-5 p-5">

        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2 p-8 transition ease-in-out duration-300 hover:bg-slate-200 rounded-md cursor-pointer">
            {user?.urlImage !== "" ? (
              <Image src={user?.urlImage} alt="" width={32} height={32} />
            ) : (
              <Image
                src="https://www.svgrepo.com/show/230988/profile-user.svg"
                width={32}
                height={32}
                alt=""
              />
            )}
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                {/* <FaIdCard width={24} height={24} /> */}
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      {/* <FaUser width={24} height={24} /> */}
                      <div className="p-2 font-semibold">Username</div>
                    </div>
                    <div className="p-2">{user?.username}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      {/* <FaEnvelope width={24} height={24} /> */}
                      <div className="p-2 font-semibold">Email</div>
                    </div>
                    <div className="p-2">{user?.email}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      {/* <FaChair width={24} height={24} /> */}
                      <div className="p-2 font-semibold">Is Admin?</div>
                    </div>
                    {user?.isAdmin ? (
                      <div className="p-2">Yes</div>
                    ) : (
                      <div className="p-2">No</div>
                    )}
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      {/* <FaCalendarPlus width={24} height={24} /> */}
                      <div className="p-2 font-semibold">Created</div>
                    </div>
                    {/* <div className="p-2">{`${daysCreated.toFixed(
                        0
                      )} days ago.`}</div> */}
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      {/* <FaCalendarCheck width={24} height={24} /> */}
                      <div className="p-2 font-semibold">Updated</div>
                    </div>
                    {/* <div className="p-2">{`${daysUpdated.toFixed(
                        0
                      )} days ago.`}</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
