/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, CSSProperties } from 'react';
import { TbLoaderQuarter } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import {
    useCSVReader,
    lightenDarkenColor,
    formatFileSize,
} from 'react-papaparse';
import useCreateSalaryStream from '@/hooks/useCreateSalaryStream';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';

const CreateSalaryStream = () => {
    return (
        <main className="w-full h-full flex flex-col gap-4 mt-10 ml-2 pr-2">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Salary Distribution Setup</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using Triver's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col gap-3 border border-gray-600 bg-gray-800 py-6 md:px-10 px-6 rounded-md mt-8">
                <HandleForm />
            </section>
        </main>
    )
}

export default CreateSalaryStream


const HandleForm = () => {
    const [csvData, setCsvData] = useState([]);
    const [streamInterval, SetStreamInterval] = useState('');

    const [isSending, setIsSending] = useState(false);

    const { CSVReader } = useCSVReader();
    const [zoneHover, setZoneHover] = useState(false);
    const [removeHoverColor, setRemoveHoverColor] = useState(
        DEFAULT_REMOVE_HOVER_COLOR
    );
    const { address } = useWeb3ModalAccount()

    const uploadData = useCreateSalaryStream(address, csvData, streamInterval)

    const handleFormSubmit = async (event: React.FormEvent) => {
        setIsSending(true);
        event.preventDefault();
        await uploadData();
        setIsSending(false);
    };


    return (
        <form className="w-full grid md:gap-14 gap-4 py-4" onSubmit={handleFormSubmit}>

            <div className="relative w-full font-barlow">

                <CSVReader
                    config={{ header: true, skipEmptyLines: true }}
                    onUploadAccepted={(results: any) => {
                        setCsvData(results.data);
                        setZoneHover(false);
                    }}
                    onDragOver={(event: DragEvent) => {
                        event.preventDefault();
                        setZoneHover(true);
                    }}
                    onDragLeave={(event: DragEvent) => {
                        event.preventDefault();
                        setZoneHover(false);
                    }}
                    noDrag
                >
                    {({
                        getRootProps,
                        acceptedFile,
                        ProgressBar,
                        getRemoveFileProps,
                        Remove,
                    }: any) => (
                        <>
                            <div
                                {...getRootProps()}
                                style={Object.assign(
                                    {},
                                    styles.zone,
                                    zoneHover && styles.zoneHover
                                )}
                            >
                                {acceptedFile ? (
                                    <>
                                        <div style={styles.file}>
                                            <div style={styles.info}>
                                                <span style={styles.size}>
                                                    {formatFileSize(acceptedFile.size)}
                                                </span>
                                                <span style={styles.name}>{acceptedFile.name}</span>
                                            </div>
                                            <div style={styles.progressBar}>
                                                <ProgressBar />
                                            </div>
                                            <div
                                                {...getRemoveFileProps()}
                                                style={styles.remove}
                                                onMouseOver={(event: Event) => {
                                                    event.preventDefault();
                                                    setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                                                }}
                                                onMouseOut={(event: Event) => {
                                                    event.preventDefault();
                                                    setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                                                }}
                                            >
                                                <Remove color={removeHoverColor} />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    'Click to upload'
                                )}
                            </div>
                        </>
                    )}
                </CSVReader>
                <small className="ml-1 mt-2 tracking-wider block text-sm text-gray-400">Upload csv file containing only this data - (amount, recipient name and address)</small>
            </div>

            <div className="relative w-full font-barlow">
                <label className="text-gray-300 ml-1 mb-1">Set Interval</label>
                <select
                    name={"interval"}
                    id={"interval"}
                    onChange={(e) => SetStreamInterval(e.target.value)}
                    className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-600 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                >
                    <option value="">Select Interval</option>
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            <div className="w-full">
                <Button
                    type="submit"
                    className={`text-gray-100 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-500 hover:bg-emerald-500 ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSending}
                >
                    {
                        isSending ? <span className="flex items-center">
                            <TbLoaderQuarter className="animate-spin text-2xl mr-1" />
                            Submitting...</span> :
                            <span className="flex items-center">Submit
                                <PiSignInFill className="text-xl ml-1" />
                            </span>
                    }

                </Button>
            </div>
        </form>
    )
}


const GREY = '#CCC';
const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
    DEFAULT_REMOVE_HOVER_COLOR,
    40
);
const GREY_DIM = '#686868';
const GRAY_DARK = '#111827';

const styles = {
    zone: {
        alignItems: 'center',
        border: `2px dashed ${GREY}`,
        color: `${GREY}`,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: 20,
    } as CSSProperties,
    file: {
        background: 'linear-gradient(to bottom, #EEE, #DDD)',
        borderRadius: 20,
        display: 'flex',
        height: 120,
        width: 120,
        position: 'relative',
        zIndex: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    } as CSSProperties,
    info: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
    } as CSSProperties,
    size: {
        color: GRAY_DARK,
        borderRadius: 3,
        marginBottom: '0.5em',
        justifyContent: 'center',
        display: 'flex',
    } as CSSProperties,
    name: {
        color: GRAY_DARK,
        borderRadius: 3,
        fontSize: 12,
        marginBottom: '0.5em',
    } as CSSProperties,
    progressBar: {
        bottom: 14,
        position: 'absolute',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    } as CSSProperties,
    zoneHover: {
        borderColor: GREY_DIM,
    } as CSSProperties,
    default: {
        borderColor: GREY,
    } as CSSProperties,
    remove: {
        height: 23,
        position: 'absolute',
        right: 6,
        top: 6,
        width: 23,
    } as CSSProperties,
};