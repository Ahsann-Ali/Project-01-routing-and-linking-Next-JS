import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
      <div><center><h1><b>This is About page</b></h1><br />
     <br /><h3> Want to go Home page<Link href="/"> <b>Click here</b> </Link></h3>
     <br /><h3> Want to go Contect page<Link href="/contect"> <b>Click here</b> </Link></h3>
     <br /><h3> Want to go Footer page<Link href="/footer"> <b>Click here</b> </Link></h3>
     <br /><h3> Want to go Navbar page<Link href="/navbar"> <b>Click here</b> </Link></h3>
     </center> </div>
    )}
export default About