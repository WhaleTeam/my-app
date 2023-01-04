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
import { AppShell, Button, Center, Group, Navbar } from "@mantine/core";
import Sidebar from "./sidebar";
import { signIn, useSession } from "next-auth/react";
import { Brand } from "./_brand";
import SignInOut from "./_signInOutButton";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  const { data: session } = useSession()

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
        { link: '/datatable', label: 'DataTables' },
      ] 
    },
    { 
      link: '#', 
      label: 'Help',
      links:[
        { link: '/prisma', label: 'Prisma' },
        { link: '/tailwindcss', label: 'Tailwind CSS' },
      ] 
    },
    { 
      link: '#', 
      label: 'AJI',
      links:[
        { link: '/aji 1', label: 'Aji 1' },
        { link: '/aji 2', label: 'Aji 2' },
      ] 
    }
  ]

  const [opened, setOpened] = useState(false)

  if (!session) {
    return (
      <Center style={{ width: '100vw', height: '100vh' }}>
        <div>
        <Group position="center" className="mb-5">
          <Brand />
        </Group>
        <Group position="center">
          <SignInOut />
        </Group>
        </div>
      </Center>
    )
  }

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