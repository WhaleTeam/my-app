import { Company } from '@prisma/client'
import Image from 'next/image'

interface CompanyCardProps {
  company: Company
}

/* const Avatar = (avatar: string) => {
  if (avatar !== "")
    return avatar
  return "/vercel.svg"
} */

export default function CompanyCard(props: CompanyCardProps) {
  return (
    <div className='border rounded-lg p-4 flex'>
      {/* <div className='my-auto'>
        <Image
          src={Avatar(props.company.avatar)}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div> */}
      <div className='ml-4'>
        <p className='text-xl text-gray-700'>
          {props.company.companyName}
        </p>
        <p className='text-gray-500'>{props.company.companyAddress} ({props.company.companyPhone})</p>
        <p className='text-gray-500'>{props.company.companyRegisterDate}</p>
      </div>
    </div>
  )
}