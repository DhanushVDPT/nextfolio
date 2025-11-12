import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
        <nav>
            <div className="sidebar">
                <h2 className="mobiletitle">V Dhanush Pavan Teja</h2>
                    <input type="checkbox" id="sidebar-active"></input>
                    <label for="sidebar-active" className="open-sidebar">
                        <Image className="hamburger" src="/icons8-xbox-menu-100.png" width={40} height={40}/>
                    </label>
                    <label id="overlay" for="sidebar-active"></label>
                <nav className="nav-bar">
                    <label for="sidebar-active" className="close-sidebar">
                        <Image className="hamburger" src="/close-icon.svg" width={40} height={40}/>
                    </label>
                    <ul>
                        <li>
                        <Link href="/">Home</Link>
                        </li>
                        <li>
                        </li>
                        <li>
                        <Link href="/year2">Year 2</Link>
                        </li>
                        <li>
                        <Link href="/year1">Year 1</Link>
                        </li>
                        <li>
                        <Link href="/institute">Institute</Link>
                        </li>
                        <li>
                        <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar">
                <div className="left">
                    <div className="navoptions">
                        <Link href="https://www.teachforindia.org/" target="#" className="tfilogo"><Image alt="TFI" src="/tfilogo.png" width={84.32} height={25.4}></Image></Link>
                    </div>
                    <div className="navoptions">
                        <Link href="/">Home</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="navoptions">
                        <Link href="/year2">Year 2</Link>
                    </div>
                    <div className="navoptions">
                        <Link href="/year1">Year 1</Link>
                    </div>
                    <div className="navoptions">
                        <Link href="/institute">Institute</Link>
                    </div>
                    <div className="navoptions">
                        <Link href="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
