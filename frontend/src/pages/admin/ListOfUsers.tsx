/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useGetAllUsers from "@/hooks/useGetAllUsers"


const ListOfUsers = () => {
    return (
        <main className="w-full h-full flex flex-col gap-4 mt-10 ml-2 pr-2" >
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">List of Registered Users</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col gap-3 border border-gray-600 bg-gray-800 py-6 md:px-10 px-6 rounded-md text-gray-200 mt-8">
                <UserTable />
            </section>
        </main >
    )
}

export default ListOfUsers



const UserTable = () => {

    const allUsers: any = useGetAllUsers()

    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-gray-600">
                    <TableHead className="w-[100px] font-barlow text-gray-200">S/N</TableHead>
                    <TableHead className="font-barlow text-gray-200 ">ENS</TableHead>
                    <TableHead className=" font-barlow text-gray-200">Address</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {allUsers?.map((user: any, index: number) => (
                    <TableRow key={index} className="hover:bg-gray-400 group border-gray-600 font-barlow">
                        <TableCell className="font-medium text-gray-400 group-hover:text-gray-800">{index + 1}</TableCell>
                        <TableCell className="text-gray-400 group-hover:text-gray-800">{user.name}</TableCell>
                        <TableCell className=" text-gray-400 group-hover:text-gray-800">{user.address}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}

