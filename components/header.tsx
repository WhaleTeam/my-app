import { createStyles, Header, Menu, Group, Center, Burger, Container, 
  UnstyledButton,
  Text,
  ThemeIcon,
  HoverCard,
  Anchor,
  Box,
  Divider,
  SimpleGrid,
  Button,
  Drawer,
  ScrollArea,
  Collapse
 } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
//import { MantineLogo } from '@mantine/ds';
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  // link: {
  //   display: 'block',
  //   lineHeight: 1,
  //   padding: '8px 12px',
  //   borderRadius: theme.radius.sm,
  //   textDecoration: 'none',
  //   color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  //   fontSize: theme.fontSizes.sm,
  //   fontWeight: 500,

  //   '&:hover': {
  //     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  //   },
  // },

  linkLabel: {
    marginRight: 5,
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  childLink: {
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: '1em',
      borderLeft: '1px solid #dee2e6',
      marginLeft: '1.5em',
    }
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export interface HeaderSearchProps {
  links: { 
    link: string; 
    label: string; 
    links: { 
      link: string; 
      label: string
    }[];
    mega?: { 
      icon: any, 
      title: string, 
      description: string 
    }[] }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component="a" href={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    const megaMenus = link.mega?.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));

    if (megaMenus) {
      return (
        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
          <HoverCard.Target>
            <a href="javascript:;" onClick={(event) => event.preventDefault()} className={classes.link}>
              <Center inline>
                <Box component="span" mr={5}>
                  {link.label}
                </Box>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </a>
          </HoverCard.Target>

          <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
            <Group position="apart" px="md">
              <Text weight={500}>{link.label}</Text>
              <Anchor href="#" size="xs">
                View all
              </Anchor>
            </Group>

            <Divider
              my="sm"
              mx="-md"
              color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
            />

            <SimpleGrid cols={2} spacing={0}>
              {megaMenus}
            </SimpleGrid>

            <div className={classes.dropdownFooter}>
              <Group position="apart">
                <div>
                  <Text weight={500} size="sm">
                    Get started
                  </Text>
                  <Text size="xs" color="dimmed">
                    Their food sources have decreased, and their numbers
                  </Text>
                </div>
                <Button variant="default">Get started</Button>
              </Group>
            </div>
          </HoverCard.Dropdown>
        </HoverCard>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  const drawerLinks = links.map((link) => {
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const menuItems = link.links?.map((item) => (
      <a key={item.link} className={classes.link + ' ' + classes.childLink} href={item.link}>{item.label}</a>
    ));

    if (menuItems) {
      return (
        <>
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              {link.label}
            </Box>
            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{menuItems}</Collapse>
        </>
      );
    }

    const megaMenus = link.mega?.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));

    if (megaMenus) {
      return (
        <>
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              {link.label}
            </Box>
            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{megaMenus}</Collapse>
        </>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    )
  })

  return (
    <Box>
      <Header height={60}>
        <Container maw='100%'>
          <div className={classes.inner}>
            <a href="#" className='logo font-bold text-2xl'>Dnn&lt;&#123;free&#125;/&gt;</a>
            {/* <MantineLogo size={28} /> */}
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <Group className={classes.hiddenMobile}>
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.burger} />
          </div>
        </Container>
      </Header>
      <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
            {drawerLinks}

            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

            <Group position="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
      </Drawer>
    </Box>
  );
}