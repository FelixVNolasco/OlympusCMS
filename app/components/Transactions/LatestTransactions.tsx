
import React from "react";
// import { TransactionItem } from "./TransactionItem";

// const getLatestTrasactions = () => {
//     return fetch("https://olympus-backend.vercel.app/api/users/stats", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU3MzM3OCwiZXhwIjoxNjc0ODMyNTc4fQ.0HmDQgIUxFB7s4x1sO9XphVK3v7t3VfeQFDkPjx77g8` } })
//         .then((res) => res.json())
// }

// export default async function LatestTransactions() {
export default function LatestTransactions() {

    // const latestTrasactions = await getLatestTrasactions();

    return (
        <div className="md:w-5-6 lg:w-5-6 xl:w-5/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
            <div className="flex flex-col">
                <span className="text-xl font-semibold">Latest Transactions</span>
                <div className="flex flex-col mt-2">
                    <div className="grid grid-cols-4 justify-items-stretch">
                        <span className="font-semibold">Customer</span>
                        <span className="font-semibold">Date</span>
                        <span className="font-semibold mr-6">Amount</span>
                        <span className="font-semibold">Status</span>
                    </div>
                    {/* <div className="flex flex-col mt-2">
                        {latestUsers.map((transaction) => {
                            return (
                                <TransactionItem key={transaction.date} transaction={transaction} />
                            );
                        })}
                    </div> */}
                </div>
            </div>
        </div>
    );
}