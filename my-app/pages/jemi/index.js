import Link from 'next/link'
export const getStaticProps = async () => {
    
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return {
    props: {jemis: data}
  }
}
export default function Jemi({ jemis }) {
  return (
   <>
   <h2>Jemis</h2>
   <div className="row ">
   {jemis.map(jemi => (
     <div key={jemi.id} className="col-4 my-3">
     <Link href={`/jemi/${jemi.id}`} className="card" key={jemi.id}>
       <a className="card-title">{jemi.name}</a>

     </Link>
     </div>
   ))}
   </div>
   </>
  )
}
