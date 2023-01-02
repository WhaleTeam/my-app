import { Group, Button, Text, Drawer, useMantineTheme } from '@mantine/core';
import { showNotification, updateNotification } from '@mantine/notifications';
import { openConfirmModal } from '@mantine/modals';
import { IconCheck, IconX } from '@tabler/icons';
import { useState } from 'react';

export default function Home() {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()

  return (
    <>
    <Group position="center" className='my-5'>
      <h1 className='text-3xl'>Homepage</h1>
    </Group>
    <Group position="center" className='mb-5'>
      <Button onClick={() => {
        openConfirmModal({
          title: 'Please confirm your action',
          children: (
            <Text size="sm">
              This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.
            </Text>
          ),
          labels: { confirm: 'Confirm', cancel: 'Cancel' },
          onCancel: () => console.log('Cancel'),
          onConfirm: () => console.log('Confirmed'),
        })
      }}>Open confirm modal</Button>

      <Button onClick={() =>
      openConfirmModal({
        title: 'Delete your profile',
        centered: true,
        children: (
          <Text size="sm">
            Are you sure you want to delete your profile? This action is destructive and you will have
            to contact support to restore your data.
          </Text>
        ),
        labels: { confirm: 'Delete account', cancel: "No don't delete it" },
        confirmProps: { color: 'red' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
      })} color="red">Delete account</Button>

    </Group>

    <Group position="center" className='mb-5'>
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Default Notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
            icon: <IconCheck />,
            color:'teal'
          })
        }
      >
        Icon Notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            message: 'Bummer! Notification without title',
            icon: <IconX />,
            color:'red'
          })
        }
      >
        No title Notification
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          showNotification({
            id: 'load-data',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            updateNotification({
              id: 'load-data',
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 2 seconds, you can close this notification now',
              icon: <IconCheck size={16} />,
              autoClose: 2000,
            });
          }, 3000);
        }}
      >
        Show update notification
      </Button>
      
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            loading: true,
            title: 'Uploading data to the server',
            message: 'Please wait until data is uploaded, you cannot close this notification yet',
            disallowClose: true
          })
        }
      >
        Loading Notification
      </Button>
    </Group>

    <Group position='center'>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
        position='right'
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        Lorem ipsum
      </Drawer>
      <Button onClick={() => setOpened(true)}>Open Drawer</Button>
    </Group>
    </>
  )
}