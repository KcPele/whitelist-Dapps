import React from 'react'
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    const paths = data.map(jemi => {
        return {
            params: {id: jemi.id}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
        const id = context.params.id
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()

        return {
            props: {jemi: data}
        }
}


export default function Details({jemi}) {
  return (
    <div>
      <h1>{jemi.name}</h1>
      <p>{jemi.email}</p>
      <p>{jemi.website}</p>
      <p>{jemi.address}</p>
    </div>
  )
}
