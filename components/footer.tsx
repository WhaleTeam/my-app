import styles from '../styles/home.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <strong className={styles.logo + ' ml-1'}>
        Dnn&lt;&#123;free&#125;/&gt;
      </strong>
    </a>
  </footer>
  )
}