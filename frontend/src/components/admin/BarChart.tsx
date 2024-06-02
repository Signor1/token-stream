/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";


const options: ApexOptions = {
    colors: ['#0284c7'],
    theme: {
        mode: 'dark',
    },
    chart: {
        type: 'bar',
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        background: 'transparent',
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
    ],
    plotOptions: {
        bar: {
            horizontal: true,
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        title: {
            text: 'Numbers'
        }
    },
    yaxis: {
        title: {
            text: 'Months'
        }
    },
    fill: {
        opacity: 1
    },

}

const BarChart = () => {

    const data = useMemo(() => {
        return {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 450, 900]
            }]
        }
    }, [])

    return (
        <div className='w-full flex flex-col gap-3 font-barlow'>
            <h1 className='md:text-xl text-base text-gray-300'>Activity Analysis</h1>
            <ReactApexChart options={options} series={data.series} type="bar" height={350} />
        </div>
    )
}

export default BarChart
