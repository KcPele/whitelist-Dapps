import Link from "next/link"
export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <h1>Jemis list</h1>

        </div>
    <Link href={"/"}>Home</Link>
      
        <Link href={"/about"}>About</Link>
       
        <Link href={"/jemi"}>jemis listing</Link>
        
    </nav>
  )
}
