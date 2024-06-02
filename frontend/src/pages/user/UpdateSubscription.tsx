/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
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
import { MoreHorizontal } from "lucide-react"
import useGetUserSubscriptions from "@/hooks/useGetUserSubscriptions";
import usePauseUserSubscription from "@/hooks/usePauseUserSubscription";
import useResumeUserSubscription from "@/hooks/useResumeUserSubscription";


const UpdateSubscription = () => {
    return (
        <main className="w-full h-full flex flex-col gap-4 mt-10 ml-2 pr-2">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Update Your Subscriptions</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col gap-3 border border-gray-600 bg-gray-800 py-6 md:px-10 px-6 rounded-md mt-8">
                <UserTable />
            </section>
        </main>
    )
}

export default UpdateSubscription


const UserTable = () => {

    const { address } = useWeb3ModalAccount()

    const data: any = useGetUserSubscriptions(address);

    const handleSubscriptionPause = usePauseUserSubscription();

    const handlePauseSubscription = async (id: number) => {
        await handleSubscriptionPause(id)
    }

    const handleSubscriptionResume = useResumeUserSubscription();

    const handleResumeSubscription = async (id: number) => {
        await handleSubscriptionResume(id)
    }

    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-gray-600">
                    <TableHead className="w-[100px] font-barlow text-gray-200">S/N</TableHead>
                    <TableHead className="font-barlow text-gray-200 ">Plan Name</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Plan Fee</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Interval</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Status</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data?.length === 0 && <TableRow className="hover:bg-gray-400 group border-gray-600 font-barlow">
                        <TableCell colSpan={6} className="font-medium text-gray-400 group-hover:text-gray-800 text-base text-center">No Subscription Found
                        </TableCell>
                    </TableRow>
                }
                {data?.map((user: any, index: number) => (
                    <TableRow key={index} className="hover:bg-gray-400 group border-gray-600 font-barlow">
                        <TableCell className="font-medium text-gray-400 group-hover:text-gray-800">{index + 1}</TableCell>
                        <TableCell className="text-gray-400 group-hover:text-gray-800">{user.planName}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.planFee}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">Monthly</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.status ? "Active" : "Inactive"}</TableCell>
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
                                        user.status ? (
                                            <DropdownMenuItem onClick={() => handlePauseSubscription(user.planId)}>Pause Subscription</DropdownMenuItem>
                                        ) : (
                                            <DropdownMenuItem onClick={() => handleResumeSubscription(user.planId)}>Resume Subscription</DropdownMenuItem>
                                        )
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