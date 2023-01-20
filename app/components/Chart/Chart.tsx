import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { ChartData } from "../../template/Dashboard";

const getLatestTransactions = () => {
    return fetch("https://olympus-backend.vercel.app/api/users/stats", { cache: "no-store", headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBlMmVjODc3MmMwYTQ0YmIwMTQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIzOTA1NSwiZXhwIjoxNjc0NDk4MjU1fQ.9fWAo7ltTi_nQk6dkbFA_cQEm6YSW2BLW3il0tZZBb4` } })
        .then((res) => res.json())
}
export default async function Chart() {

    const latestTransactions = getLatestTransactions();

    return (

        <div className="flex flex-col border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 mt-2 md:mr-0 lg:mr-0 xl:mr-6">
            <span className="p-8 text-xl font-semibold">
                Active Users Analytics
            </span>
            <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={ChartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};