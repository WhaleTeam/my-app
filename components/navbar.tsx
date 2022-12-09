import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
  <>
  <div className='navbar flex justify-between mx-8 my-4 items-center'>
    <a href="#" className='logo'>Dnn&lt;&#123;free&#125;/&gt;</a>
    <ul className='flex m-0 p-0 gap-5'>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/apps">Aplications</Link>
      </li>
      <li>
        <Link href="/companys">Companys</Link>
      </li>
      <li>
        <Link href="/contacts">Contacts</Link>
      </li>
      <li>
        <Link href="/tasks">Tasks</Link>
      </li>
      <li>
        <Link href="/mireaux">Mireaux</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
      <li>
        <span>Cheat Sheets</span>
        <ul className='flex flex-row m-0 p-0 gap-5'>
          <li>
            <Link href="/prisma">Prisma</Link>
          </li>
          <li>
            <Link href="/tailwindcss">Tailwinds</Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  </>
  )
}