import { ActionIcon, Flex, Grid, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import Link from "next/link";

export function Brand() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
  return (
    <>
    <Flex align={"center"} justify={"space-between"}>
      <Link href="/" className='logo font-bold text-2xl'>Dnn&lt;&#123;free&#125;/&gt;</Link>
      <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
        {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
      </ActionIcon>
    </Flex>
    </>
  )
}