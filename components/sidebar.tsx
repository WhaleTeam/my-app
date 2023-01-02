import { Box, createStyles, Navbar, NavLink, ScrollArea } from "@mantine/core"
import { useState } from "react";
import { Brand } from "./_brand";
import { MainLinks } from "./_mainlinks";
import { User } from "./_user";

const useStyles = createStyles((theme) => ({
  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.sm,

    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  },
})
)

const menus = [
  { label: 'Dashboard' },
  {
    label: 'Security',
    children: [
      { label: 'Lorem' },
      { label: 'Ipsum' },
      { label: 'Dolor' }
    ]
  },
  { 
    label: 'Activity',
    children: [
      { label: 'Lorem' },
      { label: 'Ipsum' },
      { label: 'Dolor' }
    ]
  },
];

export default function Sidebar({opened}: {opened: boolean}) {
  const { classes } = useStyles();
  
  const [active, setActive] = useState(0);

  const createMenu = (items: any) => {
    var c = items.map((item:any, index:number) => (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          onClick={() => setActive(index)}
        >
          {item.children && createMenu(item.children)}
        </NavLink>
      )
    )
    
    return c
  }

  return (
  <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
    <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
      <Box py="md">
        <MainLinks />
        <NavLink
          label="First parent link"
          childrenOffset={28}
          onClick={(x) => {console.log(x)}}
        >
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Nested parent link" childrenOffset={28}>
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Third child link" />
          </NavLink>
        </NavLink>

        <NavLink
          label="Second parent link"
          childrenOffset={28}
          onClick={(x) => {console.log(x.target)}}
        >
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
        {createMenu(menus)}
      </Box>
    </Navbar.Section>
    <Navbar.Section>
      <User />
    </Navbar.Section>
  </Navbar>
  )
}