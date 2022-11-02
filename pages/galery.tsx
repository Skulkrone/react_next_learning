import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/img1.jpg'
import img2 from '../public/assets/img2.jpg'
import img3 from '../public/assets/img3.jpg'

export default function galery() {
  return (
    <div>
      <Image 
      layout='responsive'
      placeholder='blur'
      src={img1} 
      width="3648"
      height="5472"
      alt="architecture"/>
      <Image 
      layout='responsive'
      src={img2} 
      width="2965"
      height="3783"
      alt="architecture"/>
      <Image 
      layout='responsive'
      src={img3} 
      width="2671"
      height="4000"
      alt="architecture"/>
      {/* <img src="/assets/img1.jpg" alt="" />
      <img src="/assets/img2.jpg" alt="" />
      <img src="/assets/img3.jpg" alt="" /> */}
    </div>
  )
}
/* 
1.3 MB -> 647 kb
1.1 MB -> 304 kb
544 kb -> 162 kb

*/