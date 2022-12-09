import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='footer'>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <strong className='logo ml-1'>
        Dnn&lt;&#123;free&#125;/&gt;
      </strong>
    </a>
  </footer>
  )
}