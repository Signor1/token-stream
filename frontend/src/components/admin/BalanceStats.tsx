import useGetRevenue from "@/hooks/useGetRevenue"
import useGetTotalDeposit from "@/hooks/useGetTotalDeposit"
import useGetTotalWithdrawal from "@/hooks/useGetTotalWithdrawal"


const BalanceStats = () => {

    const revenue = useGetRevenue()

    const deposits = useGetTotalDeposit()

    const totalWithdrawals = useGetTotalWithdrawal()

    return (
        <section className="w-full grid md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Total Contract Revenue Balance</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">{revenue} <span>OP</span></h1>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Price per OP</h4>
                    <h1 className="text-gray-400 text-xl font-barlow">1.05 <span>USD</span></h1>
                </div>
            </div>

            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Total Deposits</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">{deposits} <span>OP</span></h1>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Price per OP</h4>
                    <h1 className="text-gray-400 text-xl font-barlow">1.05 <span>USD</span></h1>
                </div>
            </div>

            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Total Withdrawals</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">{totalWithdrawals} <span>OP</span></h1>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Price per OP</h4>
                    <h1 className="text-gray-400 text-xl font-barlow">1.05 <span>USD</span></h1>
                </div>
            </div>
        </section>
    )
}

export default BalanceStats