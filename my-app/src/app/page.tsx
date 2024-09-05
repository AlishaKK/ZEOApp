// import Image from "next/image";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// export default function Home() {
//   return (
//     <main className="flex min-h-screen border-2 border-blue-800  p-24">
//       <Pagination className="flex-col justify-end">
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious href="#" />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="/about">1</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#" isActive>
//             2
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#">3</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationEllipsis />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationNext href="#" />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//     </main>
//   );
// }
import React from 'react'
import Link from 'next/link'
import {FaFacebookF, FaLinkedinIn, FaGoogle} from 'react-icons/fa'
export default function Page() {
  return (
    <div className=' bg-gray-200 flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center '>
        <div className='bg-white flex w-2/3 max-w-4xl rounded-2xl shadow-2xl '>   
         <div className='w-3/5 p-5'>
         <div className='text-left font-bold'> <span className='text-green-500'>Alisha</span> Kayani</div>
         <div className='py-2'>
          <h2  className='text-green-500 font-bold text-3xl mb-2'>Sign in to Account</h2>
          <div className='border-2 w-10 border-green-500 inline-block'></div></div>
          <div className='flex justify-center my-2'>
            <Link href={""} className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaFacebookF/></Link>
            <Link href={""} className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaLinkedinIn/></Link>
            <Link href={""} className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaGoogle/></Link></div></div>

         <div  className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 '> 
         <h2 className='text-white font-bold text-3xl mb-2'>Hello ,Friend!</h2>
         <div className='border-2 w-10 border-white inline-block'></div>
         <p className='text-white mb-10'>Fill up the personal information and start journey with us </p>
         <button className=' font-semibold hover:bg-white hover:text-green-500 border-2 border-white rounded-full px-12 py-2 p-1 m-1'><Link href={""}>Sign Up</Link></button>
         </div>
         </div>

      
    </main>
    </div>
  )
}
