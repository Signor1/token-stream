/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useGetAllDailyStream from "@/hooks/useGetAllDailyStream";
import useGetAllMonthlyStream from "@/hooks/useGetAllMonthlyStream";
import usePauseUserDailyStream from "@/hooks/usePauseUserDailyStream";
import usePauseUserMonthlyStreams from "@/hooks/usePauseUserMonthlyStreams";
import useResumeUserDailyStreams from "@/hooks/useResumeUserDailyStreams";
import useResumeUserMonthlyStreams from "@/hooks/useResumeUserMonthlyStreams";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { MoreHorizontal } from "lucide-react"
import { useMemo } from "react";


const UpdateSalaryStream = () => {

    return (
        <main className="w-full h-full flex flex-col gap-4 mt-10 ml-2 pr-2">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Update Your Salary Distribution</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using Triver's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col gap-3 border border-gray-600 bg-gray-800 py-6 md:px-10 px-6 rounded-md mt-8">
                <UserTable />
            </section>
        </main>
    )
}

export default UpdateSalaryStream



const UserTable = () => {

    const { address } = useWeb3ModalAccount()

    const data: any = useGetAllDailyStream();

    const filteredDaily = useMemo(() => data.filter((item: any) => item.streamer === address), [address, data]);

    const monthly: any = useGetAllMonthlyStream();

    const filteredMonthly = useMemo(() => monthly.filter((item: any) => item.streamer === address), [address, monthly]);

    const handlePauseDailyStream = usePauseUserDailyStream();

    const handlePauseMonthlyStream = usePauseUserMonthlyStreams();

    const handleResumeDailyStream = useResumeUserDailyStreams();

    const handleResumeMonthlyStream = useResumeUserMonthlyStreams();

    let serialNumber = 1;

    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-gray-600">
                    <TableHead className="w-[100px] font-barlow text-gray-200">S/N</TableHead>
                    <TableHead className="font-barlow text-gray-200 ">Name</TableHead>
                    <TableHead className="font-barlow text-gray-200 ">Recipient</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Amount</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Interval</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Status</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    filteredDaily?.length === 0 && filteredMonthly?.length === 0 && <TableRow className="hover:bg-gray-400 group border-gray-600 font-barlow">
                        <TableCell colSpan={6} className="font-medium text-gray-400 group-hover:text-gray-800 text-base text-center">
                            No Data Found
                        </TableCell>
                    </TableRow>
                }
                {filteredDaily?.map((user: any, index: number) => (
                    <TableRow key={index} className="hover:bg-gray-400 group border-gray-600 font-barlow">
                        <TableCell className="font-medium text-gray-400 group-hover:text-gray-800">{serialNumber++}</TableCell>
                        <TableCell className="text-gray-400 group-hover:text-gray-800">{user.name}</TableCell>
                        <TableCell className="text-gray-400 group-hover:text-gray-800">{user.recipient}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.amount}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.intervalType === 1 ? "Daily" : "Monthly"}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.isactive ? "Active" : "Inactive"}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="font-barlow">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    {
                                        user.isactive
                                            ? <DropdownMenuItem onClick={() => handlePauseDailyStream(user.id)}>Pause Stream</DropdownMenuItem>
                                            : <DropdownMenuItem onClick={() => handleResumeDailyStream(user.id)}>Resume Stream</DropdownMenuItem>
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}

                {filteredMonthly?.map((user: any, index: number) => (
                    <TableRow key={index} className="hover:bg-gray-400 group border-gray-600 font-barlow">
                        <TableCell className="font-medium text-gray-400 group-hover:text-gray-800">{serialNumber++}</TableCell>
                        <TableCell className="text-gray-400 group-hover:text-gray-800">{user.name}</TableCell>
                        <TableCell className="text-gray-400 group-hover:text-gray-800">{user.recipient}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.amount}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.intervalType === 1 ? "Daily" : "Monthly"}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.isactive ? "Active" : "Inactive"}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="font-barlow">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    {
                                        user.isactive
                                            ? <DropdownMenuItem onClick={() => handlePauseMonthlyStream(user.id)}>Pause Stream</DropdownMenuItem>
                                            : <DropdownMenuItem onClick={() => handleResumeMonthlyStream(user.id)}>Resume Stream</DropdownMenuItem>
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}