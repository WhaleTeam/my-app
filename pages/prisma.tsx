const CodeBlock = ({children}) => {
  return (
    <div className="mb-3 border border-gray-300 w-1/6 bg-gray-200 text-gray-800 px-3 py-1 rounded-md font-mono">{children}</div>
  )
}

export default function Prisma() {
  return (
    <>
    <div className='px-8'>
      <h1 className='text-3xl'>Prisma Cheet-Sheet</h1>
      <hr className="mb-5"/>
      <div className="font-medium">Install Prisma CMD:</div>
      <CodeBlock>npx prisma</CodeBlock>

      <div className="font-medium">Use Prisma Client to send queries to your database</div>
      <CodeBlock>import {"{"}PrismaClient{"}"} from '@prisma/client'<br/>const prisma = new PrismaClient()</CodeBlock>
      
      <div className="font-medium">Install Prisma Client CMD:</div>
      <CodeBlock>npm install @prisma/client</CodeBlock>

      <div className="font-medium">Build Migration CMD:</div>
      <CodeBlock>npx prisma migrate dev</CodeBlock>

      <div className="font-medium">Open Prisma Studio CMD:</div>
      <CodeBlock>npx prisma studio</CodeBlock>

      <div className="font-medium">Evolving your application CMD:</div>
      <div className="text-sm">Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in the node_modules/.prisma/client directory:</div>
      <CodeBlock>prisma generate</CodeBlock>
    </div>
    </>
  )
}