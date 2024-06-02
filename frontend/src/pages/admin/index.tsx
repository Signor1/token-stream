import BarChart from "@/components/admin/BarChart";
import PieChart from "@/components/admin/PieChart";
import useGetAllUsers from "@/hooks/useGetAllUsers"
import useGetSubscriptionPlans from "@/hooks/useGetSubscriptionPlans";


const Admin = () => {
    const allUsers = useGetAllUsers();

    const plans = useGetSubscriptionPlans();

    return (
        <section className="w-full flex flex-col gap-4">
            <main className="w-full grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                    <div className="w-full flex flex-col gap-1">
                        <h4 className="text-gray-300 font-barlow">No. of Users</h4>
                        <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">{allUsers?.length}</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                    <div className="w-full flex flex-col gap-1">
                        <h4 className="text-gray-300 font-barlow">No. of Subscription Plan</h4>
                        <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">{plans?.length}</h1>
                    </div>
                </div>
            </main>


            <section className="w-full grid lg:grid-cols-5 md:grid-cols-2 gap-4">
                <div className="w-full p-4 lg:col-span-3 flex flex-col items-center rounded-md bg-gray-800">
                    <BarChart />
                </div>
                <div className="w-full p-4 lg:col-span-2 flex flex-col items-center rounded-md bg-gray-800">
                    <PieChart />
                </div>
            </section>
        </section>
    )
}

export default Admin