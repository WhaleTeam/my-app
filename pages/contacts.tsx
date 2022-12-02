import { PrismaClient, Contact, Prisma } from '@prisma/client'
import { useState } from 'react'
import AddContactForm from '../components/contact/addContactForm'
import ContactCard from '../components/contact/contactCard'

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const contacts: Contact[] = await prisma.contact.findMany()

  return {
    props: {
      initialContacts: contacts
    }
  }
}

async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact)
  })

  if(!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export default function Contacts({ initialContacts }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  console.log(contacts)
  
  return (
    <>
      <div className="flex">
        <section className="w-1/3 2xl:w-1/6 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add a Contact</h2>
          </div>
        
          <AddContactForm
          onSubmit={async (data: Contact, e: { target: { reset: () => void } }) => {
            try {
              await saveContact(data)
              setContacts([...contacts, data])
              e.target.reset()
            } catch (err) {
              console.log(err)
            }
          }}
          />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Contacts</h2>
          </div>
          {contacts.map((c, i: number) => (
            <div className='mb-3' key={i}>
              <ContactCard contact={c} />
            </div>
          ))}
        </section>
      </div>
    </>
  )
}