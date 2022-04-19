
import Head from "next/head";
import React from "react";

import { getSortedPostsData } from '../lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {


  return (
  
  
    <section >
      <h2 >Blog</h2>
      
    </section>
  );
}