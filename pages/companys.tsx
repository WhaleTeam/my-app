import { PrismaClient, Company, App, Prisma } from '@prisma/client'
import { useState } from 'react'
import { Table, ActionIcon, Menu, ScrollArea } from '@mantine/core';
import AddCompanyForm from '../components/company/addCompanyForm'
import CompanyCard from '../components/company/companyCard'

const prisma = new PrismaClient()

type initialCompanysType = {
  initialCompanys: Company[],
  apps: App[]
}

export async function getServerSideProps() {
  const companys: Company[] = await prisma.company.findMany()
  const apps: App[] = await prisma.app.findMany();
  //console.log(JSON.stringify(companys));
  return {
    props: {
      initialCompanys:JSON.parse(JSON.stringify(companys)),
      apps: apps
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

export default function Companys({ initialCompanys, apps } : initialCompanysType) {
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
          apps={apps}
          onSubmit={async (data: Company, e: { target: { reset: () => void } }) => {

            try {
              await saveCompany(data)
              let datas = JSON.parse(JSON.stringify([...companys, data]));
              setCompanys(datas)
              e.target.reset()
            } catch (err) {
              console.log(err)
            }
          }}
          />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Companys</h2>
          </div>
          <ScrollArea style={{ minHeight: 500 }}>
            <Table sx={{ minWidth: 800 }} verticalSpacing="md">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Phone</th>
                  <th />
                </tr>
              </thead>
              <tbody>
              {companys.map((c, i: number) => (
                    <tr key={i}>
                        <CompanyCard company={c} />
                    </tr>
              ))}
          </tbody>
          </Table>
          </ScrollArea>
        </section>
      </div>
    </>
  )
}