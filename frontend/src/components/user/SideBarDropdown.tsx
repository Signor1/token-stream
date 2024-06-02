import { useState } from "react";


const SideBarDropdown = ({ className, children }: { className: string, children: (handleClick: () => void, open: boolean) => React.ReactNode }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return <div className={className}>{children(handleClick, open)}</div>;
}

export default SideBarDropdown