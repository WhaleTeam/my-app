import { Company } from '@prisma/client'
import { Group, Text, ActionIcon, Menu } from '@mantine/core';
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from '@tabler/icons';

interface UsersStackProps {
  data: { companyName: string; companyAddress: string; companyPhone: string; companyRegisterDate: string }[];
}

interface CompanyCardProps {
  company: Company
}

export default function CompanyCard(props: CompanyCardProps) {

  return (
    <>
            <td>
              <Group spacing="sm">
                <div>
                  <Text size="sm" weight={500}>
                    {props.company.companyName}
                  </Text>
                  <Text color="dimmed" size="xs">
                    {props.company.companyAddress}
                  </Text>
                </div>
              </Group>
            </td>
            <td>
              <Text size="sm">{props.company.companyPhone}</Text>
            </td>
            <td>
              <Group spacing={0} position="right">
                <ActionIcon>
                  <IconPencil size={16} stroke={1.5} />
                </ActionIcon>
                <Menu transition="pop" withArrow position="bottom-end">
                  <Menu.Target>
                    <ActionIcon>
                      <IconDots size={16} stroke={1.5} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item icon={<IconMessages size={16} stroke={1.5} />}>Send message</Menu.Item>
                    <Menu.Item icon={<IconNote size={16} stroke={1.5} />}>Add note</Menu.Item>
                    <Menu.Item icon={<IconReportAnalytics size={16} stroke={1.5} />}>Analytics</Menu.Item>
                    <Menu.Item icon={<IconTrash size={16} stroke={1.5} />} color="red">
                      Terminate contract
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </td>
    </>
  );
}