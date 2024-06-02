/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import useGetUserSubscriptions from "@/hooks/useGetUserSubscriptions";
import useGetAllDailyStream from "@/hooks/useGetAllDailyStream";
import useGetAllMonthlyStream from "@/hooks/useGetAllMonthlyStream";

const options: ApexOptions = {
    chart: {
        type: "pie",
        background: 'transparent',
    },
    stroke: {
        width: 0.5,
    },
    theme: {
        mode: 'dark',
    },
    colors: ['#0284c7', '#059669'],
    labels: ['Salary', 'Subscription'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '55%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: true,
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },

    ]
}

const PieChart = () => {
    const { address } = useWeb3ModalAccount()

    const daily: any = useGetAllDailyStream();

    const monthly: any = useGetAllMonthlyStream();

    const filteredDaily = useMemo(
        () => daily.filter((item: any) => item.streamer === address),
        [daily, address]
    );

    const filteredMonthly = useMemo(
        () => monthly.filter((item: any) => item.streamer === address),
        [monthly, address]
    );

    const subscriptions: any = useGetUserSubscriptions(address);

    const [data, setData] = useState({
        series: [0, 0],
    })

    useEffect(() => {
        setData({
            series: [(filteredDaily.length + filteredMonthly.length), subscriptions.length]
        })
    }, [filteredDaily, filteredMonthly, subscriptions])


    return (
        <div className='w-full flex flex-col gap-3 font-barlow'>
            <h1 className='md:text-xl text-base text-gray-300'>Stream Analysis</h1>
            <ReactApexChart options={options} series={data.series} type="pie" />
        </div>
    )
}

export default PieChart