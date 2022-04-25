import Link from "next/link"
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className="navbar shadow-sm">
        <div className='navbar-brand d-flex mx-2  align-items-center'>
          <Image width={120} height={77} src="/vercel.svg" />
            <h1>Jemis list</h1>

        </div>
    <Link href={"/"}>Home</Link>
      
        <Link href={"/cryptodao"}>CryptoDao</Link>
       
        <Link href={"/cryptodev"}>CryptoDev</Link>
        
    </nav>
  )
}
