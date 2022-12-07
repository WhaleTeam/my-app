import { PrismaClient, App, Prisma } from '@prisma/client'
import { useState } from 'react'
import AddAppForm from '../components/contact/addAppForm'
import AppCard from '../components/contact/appCard'

const prisma = new PrismaClient()

type initialAppType = {
  initialApps: App[]
}

export async function getServerSideProps() {
  const apps: App[] = await prisma.app.findMany()

  console.log(apps);
  return {
    props: {
      initialApps: apps
    }
  }
}

async function saveContact(app: Prisma.ContactCreateInput) {
  const response = await fetch('/api/apps', {
    method: 'POST',
    body: JSON.stringify(app)
  })

  if(!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export default function Apps({ initialApps } : initialAppType) {
  const [apps, setApps] = useState<App[]>(initialApps)
  console.log(apps)
  
  return (
    <>
      <div className="flex">
        <section className="w-1/3 2xl:w-1/6 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add an App</h2>
          </div>
        
          <AddAppForm
          onSubmit={async (data: App, e: { target: { reset: () => void } }) => {
            try {
              await saveContact(data)
              setApps([...apps, data])
              e.target.reset()
            } catch (err) {
              console.log(err)
            }
          }}
          />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Apps</h2>
          </div>
          {apps.map((c, i: number) => (
            <div className='mb-3' key={i}>
              <AppCard app={c} />
            </div>
          ))}
        </section>
      </div>
    </>
  )
}