import { MemberItem } from "./MemberItem";
// import { latestUsers } from '../../template/Dashboard';

export default async function NewMembers({ latestUsers }: any) {
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



