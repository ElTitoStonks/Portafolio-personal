import { useState } from "react";
import { IconBurgerMenu } from "./icons-header/IconBurgerMenu";
import { IconCloseMenu } from "./icons-header/IconCloseMenu";

export function ShowNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <button className="grow flex justify-center" onClick={handleToggle}>
                {isOpen ? <IconBurgerMenu /> : <IconCloseMenu />}
            </button>

            <nav className={`fixed top-28 right-0 w-full h-full bg-red-50 ${isOpen ? 'translate-x-full' : 'translate-x-0'} transition-all duration-1000 ease-in-out`}>
                Prueba
            </nav>
        </>
    )
}