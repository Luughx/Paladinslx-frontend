import Link from "next/link"
export default function Navbar() {
    return (
        <header className="bg-gray-900">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src="https://static.wikia.nocookie.net/logopedia/images/5/53/Paladins_Icon.png" alt="logo" />
                    <span className="sr-only">Paladins stats</span>
                </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                <Link href="/" className="text-sm font-semibold leading-6">Inicio</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link href="#" className="text-sm font-semibold leading-6">Log in <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>  
        </header>
    )
}