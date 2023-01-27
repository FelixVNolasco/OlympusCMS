import React from 'react'
import Image from 'next/image';
import { Calendar, CalendarPlus, UserCheck, Mail, User } from 'lucide-react';
import { getUser } from '../../lib/api/users';

export default async function page({ params }: any) {

  const { id } = params;
  const user = await getUser(id);

  const { username, email, createdAt, updatedAt } = user;

  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const createdAtDate = new Date(createdAt);
  const createdAtDateFormatted = createdAtDate.toLocaleDateString("en-Us", options);

  const lastLoginAtDate = new Date(updatedAt);
  const lastLoginAtDateFormatted = lastLoginAtDate.toLocaleDateString("en-Us", options);

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
                width={256}
                height={256}
                alt=""
              />
            )}
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <User color="purple" size={18} />
                      <div className="p-2 font-semibold">Username</div>
                    </div>
                    <div className="p-2">{username}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <Mail color="purple" size={18} />
                      <div className="p-2 font-semibold">Email</div>
                    </div>
                    <div className="p-2">{email}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <UserCheck color="purple" size={18} />
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
                      <CalendarPlus color="purple" size={18} />
                      <div className="p-2 font-semibold">Created</div>
                    </div>
                    <div className="p-2">{createdAtDateFormatted}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <Calendar color="purple" size={18} />
                      <div className="p-2 font-semibold">Updated</div>
                    </div>
                    <div className="p-2">{lastLoginAtDateFormatted}</div>
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
