import logo from "@/images/logo.png"
import Images from "next/image"
import Link from "next/link"

export default function Nav ( ){
    return (
        <div className="flex flex-row justify-between p-4 w-screen bg-indigo-400 h-18">
                <Link href="/">
                    <Images src={logo} alt="logo" width={100} height={100} />
                </Link>
                <div className="flex-end w-80 px-5 self-center">
                    <ul className="flex flex-row justify-between gap-2 text-xl
                    ">
                        <li>
                            <Link href="/" className="hover:italic">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:italic">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:italic">Contact</Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}