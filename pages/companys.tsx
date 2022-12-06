import { PrismaClient, Company, Prisma } from '@prisma/client'
import { useState } from 'react'
import AddCompanyForm from '../components/contact/addCompanyForm'
import CompanyCard from '../components/contact/companyCard'

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const companys: Company[] = await prisma.company.findMany()
  //console.log(JSON.stringify(companys));
  return {
    props: {
      initialCompanys: JSON.stringify(companys)
    }
  }
}

async function saveCompany(company: Prisma.CompanyCreateInput) {
  const response = await fetch('/api/companys', {
    method: 'POST',
    body: JSON.stringify(company)
  })

  if(!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export default function Companys({ initialCompanys }) {
  const [companys, setCompanys] = useState<Company[]>(initialCompanys)
  console.log(companys)
  
  return (
    <>
      <div className="flex">
        <section className="w-1/3 2xl:w-1/6 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add a Company</h2>
          </div>
        
          <AddCompanyForm
          onSubmit={async (data: Company, e: { target: { reset: () => void } }) => {
            try {
              await saveCompany(data)
              setCompanys([...companys, data])
              e.target.reset()
            } catch (err) {
              console.log(err)
            }
          }}
          />
        </section>
        {/* <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Companys</h2>
          </div>
          {companys.map((c, i: number) => (
            <div className='mb-3' key={i}>
              <CompanyCard company={c} />
            </div>
          ))}
        </section> */}
      </div>
    </>
  )
}