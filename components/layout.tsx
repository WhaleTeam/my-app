import Head from "next/head"
import React, { useState } from "react"
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
import { AppShell, Navbar } from "@mantine/core";
import Sidebar from "./sidebar";

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
      link: 'mireaux', 
      label: 'Mireaux'
    },
    {
      link: '#',
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
      link: '#',
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
      link: '#', 
      label: 'Applications',
      links:[
        { link: '/companys', label: 'Manage Company' },
        { link: '/contacts', label: 'Manage Contact' },
      ] 
    },
    { 
      link: '#', 
      label: 'Help',
      links:[
        { link: '/prisma', label: 'Prisma' },
        { link: '/tailwindcss', label: 'Tailwind CSS' },
      ] 
    }
  ]

  const [opened, setOpened] = useState(false)

  return (
    <>

    <AppShell
      padding="md"
      navbar={<Sidebar opened={opened}/>}
      header={<HeaderMenu opened={opened} setOpened={setOpened} links={links} />}
    >
      <main>{children}</main>
      <Footer />
    </AppShell>
    </>
  )
}