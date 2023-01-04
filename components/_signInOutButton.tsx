import { ActionIcon, Button, Text, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun, IconBrandGithub } from '@tabler/icons';
import { signIn, signOut, useSession } from 'next-auth/react' 

export default function SignInOut() {
  const {data: session} = useSession()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  if (session) {
    return (
      <>
      <Text>Hi, {session.user!.email}</Text>
      <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
        {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
      </ActionIcon>
      <Button variant="default" onClick={e => signOut()}>Sign Out</Button>
      </>
    )
  }

  return (
    <>
    <Button variant="default" onClick={e => signIn('github')}><IconBrandGithub className='mr-2' /> Sign in</Button>
    {/* <Button>Sign up</Button> */}
    </>
  )
}