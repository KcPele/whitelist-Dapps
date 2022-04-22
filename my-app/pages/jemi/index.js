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
   <div className="row justify-content-center">
   {jemis.map(jemi => (
     <div className="col-4 my-3">
     <div className="card" key={jemi.id}>
       <h3 className="card-title">{jemi.name}</h3>

     </div>
     </div>
   ))}
   </div>
   </>
  )
}
