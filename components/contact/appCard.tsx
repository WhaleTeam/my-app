import { App } from '@prisma/client'
import Image from 'next/image'

interface AppCardProps {
  app: App
}

export default function ContactCard(props: AppCardProps) {
  return (
    <div className='border rounded-lg p-4 flex'>
      <div className='ml-4'>
        <p className='text-xl text-gray-700'>
          {props.app.appName}
        </p>
        <p className='text-gray-500'>{props.app.appVersion} ({props.app.appPlatform})</p>
      </div>
    </div>
  )
}