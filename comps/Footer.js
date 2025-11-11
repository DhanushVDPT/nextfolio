import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return ( 
        <div className="foot">
            <p id="contact">Contact</p>
            <Link href="mailto:v.teja2024@teachforindia.org"><Image alt="mail" src="/email.png" width={32} height={32}></Image></Link>
        </div>
    );
}

export default Footer;