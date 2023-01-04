import { TableSort } from '../components/dataTables'

interface RowData {
  name: string;
  email: string;
  company: string;
}

export async function getServerSideProps() {
  const contacts: RowData[] = []
  for (let i = 0; i < 50; i++) {
    contacts.push({
      name: 'Name ' + i,
      company: 'Company ' + i,
      email: `user_${i}@gmail.com`
    })
  }

  return {
    props: {
      initialData: contacts
    }
  }
}

export default function DataTable({initialData}: {initialData: RowData[]}) {
  return (
    <>
    <TableSort data={initialData}></TableSort>
    </>
  )
}