import { useState } from "react"
import { Table, Anchor } from "@mantine/core"
import clients from './clients.json'

export const Client = () => {
  const [a, setA] = useState()

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Site</th>
            <th>Database</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
          clients.map((x, key) => (
            <tr key={key}>
              <td>{x.name}</td>
              <td><Anchor href={x.site} target="_blank">{x.site}</Anchor></td>
              <td>{x.db}</td>
            </tr>
          ))
          }
        </tbody>
      </Table>
      
    </>
  )
}