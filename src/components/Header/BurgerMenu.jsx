import { IconBurgerMenu } from "./icons-header/IconBurgerMenu";
import { IconCloseMenu } from "./icons-header/IconCloseMenu";

export function MenuResponsiveContent({ isOpen, handleToggle }) {
    return (
        <>
            <div className="grow flex justify-center md:hidden ">
                <button onClick={handleToggle}>
                    {isOpen ? <IconBurgerMenu /> : <IconCloseMenu />}
                </button>
            </div>


            <nav
                className={` fixed top-28 right-0 w-full h-full bg-red-50 
                ${isOpen ? 'translate-x-full' : 'translate-x-0'} transition-all duration-1000 ease-in-out`
                }>
                <ul className="flex flex-col justify-center items-center gap-10 h-full w-full text-4xl text-[#0E273C] font-bold">
                    <li>Sobre mi</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </>
    )
}

export function DestktopMenu() {
    return (
        <nav
            className="hidden md:block">
            <ul className="flex md:flex-row justify-center items-center md:gap-5 h-full w-full text-4xl text-[#0E273C] font-bold">
                <li>Sobre mi</li>
                <li>Habilidades</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}