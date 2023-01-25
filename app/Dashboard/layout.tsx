import DataCards from '../components/Cards/DataCards';
import Chart from '../components/Chart/Chart';


export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React
    .ReactNode,
}) {
    return (
        // <section>
        //     {/* Include shared UI here e.g. a header or sidebar */}
        //     <nav></nav>

        //     {children}
        // </section>

        <div className="flex flex-col w-5/6">
            <DataCards />
            {/* <Chart /> */}
            <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row">
                {children}
                {/* <NewMembers /> */}
                {/* <LatestTransactions /> */}
            </div>
        </div>
    );
}