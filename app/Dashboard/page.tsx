import { getLatestTrasactions } from '../lib/api/dashboard';
import { MemberItem } from '../components/Member/MemberItem';
import { TransactionItem } from '../components/Transactions/TransactionItem';
import { getLatestUser } from '../lib/api/users';

export default async function page() {

    const latestUsers = await getLatestUser();
    const latestTransactions = await getLatestTrasactions();

    return (
        <>
            <div className="md:w-5-6 lg:w-5-6 xl:w-2/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
                <div className="flex flex-col">
                    <span className="text-xl font-semibold mb-4">New Members</span>
                    {latestUsers.map((member: any) => {
                        return <MemberItem key={member._id} member={member} />;
                    })}
                </div>
            </div>

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
                        <div className="flex flex-col mt-2">
                            {latestTransactions.map((transaction: any) => {
                                return (
                                    <TransactionItem key={transaction.date} transaction={transaction} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}