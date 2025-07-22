import Link from 'next/link'
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <>
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4">
            <MenuItem title="home" address="/" Icon={AiFillHome} ></MenuItem>
            <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} ></MenuItem>
        </div>
        <div className="flex gap-4 items-center">
            <DarkModeSwitch />
            <Link href={'/'} className="flex gap-1 items-center">
                <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">MZ</span>
                <span className="text-xl hidden sm:inline">MovieZilla</span>
            </Link>
        </div>
        

    </div>
    </>
  )
}  
