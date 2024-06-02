/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useGetAllDailyStream from "@/hooks/useGetAllDailyStream"

const DailySalaryStream = () => {
    return (
        <main className="w-full h-full flex flex-col gap-4 mt-10 ml-2 pr-2">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">List of Daily Salary Streams</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using Triver's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col gap-3 border border-gray-600 bg-gray-800 py-6 md:px-10 px-6 rounded-md mt-8">
                <UserTable />
            </section>
        </main>
    )
}

export default DailySalaryStream


const UserTable = () => {

    const data: any = useGetAllDailyStream();

    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-gray-600">
                    <TableHead className="w-[100px] font-barlow text-gray-200">S/N</TableHead>
                    <TableHead className="font-barlow text-gray-200 ">Recipient</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Amount</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Interval</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Status</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Streamer</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((user: any, index: number) => (
                    <TableRow key={index} className="hover:bg-gray-400 group border-gray-600 font-barlow">
                        <TableCell className="font-medium text-gray-400 group-hover:text-gray-800">{index + 1}</TableCell>
                        <TableCell className="text-gray-400 group-hover:text-gray-800">{user.recipient}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.amount}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.intervalType === 1 ? "Daily" : "Monthly"}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.isactive ? "Active" : "Inactive"}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.streamer}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}