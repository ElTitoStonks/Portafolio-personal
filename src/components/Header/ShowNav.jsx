import { useState } from "react";
import { IconBurgerMenu } from "./icons-header/IconBurgerMenu";
import { IconCloseMenu } from "./icons-header/IconCloseMenu";
import { DestktopMenu, MenuResponsiveContent } from "./BurgerMenu";

export function ShowNav() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MenuResponsiveContent isOpen={isOpen} handleToggle={handleToggle} />
            <DestktopMenu />
        </>
    )
}