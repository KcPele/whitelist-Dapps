import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <>
    <Head >
      <title>jemis listing</title>
    </Head>
    <div className={styles.main}>
     
      <h1>Home</h1>
      <Link href={"/jemi"}><a className="btn btn-primary">Jemis List</a></Link>
  
    </div>
    </>
  )
}
