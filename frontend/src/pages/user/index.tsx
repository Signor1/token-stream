import BarChart from "@/components/user/BarChart"
import PieChart from "@/components/user/PieChart"
import { useCheckRegisteredUser } from "@/hooks/useCheckRegisteredUser"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"



const User = () => {
    const { address } = useWeb3ModalAccount()
    useCheckRegisteredUser(address)
    return (
        <main className="w-full h-full flex flex-col mt-4">
            <section className="w-full grid lg:grid-cols-5 md:grid-cols-2 gap-4">
                <div className="w-full p-4 lg:col-span-3 flex flex-col items-center rounded-md bg-gray-800">
                    <BarChart />
                </div>
                <div className="w-full p-4 lg:col-span-2 flex flex-col items-center rounded-md bg-gray-800">
                    <PieChart />
                </div>
            </section>
        </main>
    )
}

export default User


