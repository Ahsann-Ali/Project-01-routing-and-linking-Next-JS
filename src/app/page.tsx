import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (
    <div><center><h1><b>This is Homepage</b></h1><br />
   <br /><h3> Want to go About page<Link href="/about"> <b>Click here</b> </Link></h3>
   <br /><h3> Want to go Contect page<Link href="/contect"> <b>Click here</b> </Link></h3>
   <br /><h3> Want to go Footer page<Link href="/footer"> <b>Click here</b> </Link></h3>
   <br /><h3> Want to go Navbar page<Link href="/navbar"> <b>Click here</b> </Link></h3>
   </center> </div>
  )
}

export default Home