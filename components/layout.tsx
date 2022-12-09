import Head from "next/head"
import React from "react"
import Footer from "./footer"
import { HeaderMenu, HeaderSearchProps } from './header'

import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  const links: HeaderSearchProps = [
    { 
      link: '/', 
      label: 'Home'
    },
    { 
      link: 'about', 
      label: 'About'
    },
    {
      link: 'javascript:;',
      label: 'Features',
      mega: [
        {
          icon: IconCode,
          title: 'Open source',
          description: 'This Pokémon\'s cry is very loud and distracting',
        },
        {
          icon: IconCoin,
          title: 'Free for everyone',
          description: 'The fluid of Smeargle\'s tail secretions changes',
        },
        {
          icon: IconBook,
          title: 'Documentation',
          description: 'Yanma is capable of seeing 360 degrees without',
        },
        {
          icon: IconFingerprint,
          title: 'Security',
          description: 'The shell\'s rounded shape and the grooves on its.',
        },
        {
          icon: IconChartPie3,
          title: 'Analytics',
          description: 'This Pokémon uses its flying ability to quickly chase',
        },
        {
          icon: IconNotification,
          title: 'Notifications',
          description: 'Combusken battles with the intensely hot flames it spews',
        },
      ]
    },
    {
      link: 'javascript:;',
      label: 'Features 2',
      mega: [
        {
          icon: IconCode,
          title: 'Open source',
          description: 'This Pokémon\'s cry is very loud and distracting',
        },
        {
          icon: IconCoin,
          title: 'Free for everyone',
          description: 'The fluid of Smeargle\'s tail secretions changes',
        },
        {
          icon: IconBook,
          title: 'Documentation',
          description: 'Yanma is capable of seeing 360 degrees without',
        },
        {
          icon: IconFingerprint,
          title: 'Security',
          description: 'The shell\'s rounded shape and the grooves on its.',
        },
      ]
    },
    { 
      link: 'javascript:;', 
      label: 'Applications',
      links:[
        { link: '/companys', label: 'Manage Company' },
        { link: '/contacts', label: 'Manage Contact' },
      ] 
    },
    { 
      link: 'javascript:;', 
      label: 'Help',
      links:[
        { link: '/prisma', label: 'Prisma' },
        { link: '/tailwindcss', label: 'Tailwind CSS' },
      ] 
    }
  ]

  return (
    <>
      <Head>
        <title>Contacts App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <HeaderMenu links={links} />
      <main>{children}</main>
      <Footer />
    </>
  )
}