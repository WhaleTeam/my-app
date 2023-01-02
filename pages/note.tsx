import { Textarea, Tabs, Text, Input } from "@mantine/core"
import { randomId, useClickOutside } from '@mantine/hooks';
import { Prism } from "@mantine/prism"
import { useState } from "react";
import { IconX } from '@tabler/icons';
import { useForm } from "@mantine/form";

interface NoteType {
  id: string,
  key: number,
  title: string,
  note: string
}

export default function note() {
  const [value, setValue] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>('New')
  const [tabs, setTabs] = useState<NoteType[]>([{
    id: randomId(),
    key: 0,
    title: "New",
    note: "New"
  }]);

  const addTab = () => {
    var lastKey = tabs[tabs.length - 1].key + 1
    var tab: NoteType = {
      id: randomId(),
      key: lastKey,
      title: "New " + lastKey,
      note: "New " + lastKey
    }
    
    setTabs([...tabs, tab])
    setActiveTab("New " + lastKey)
  }

  const deleteTab = (e: NoteType) => {
    if (tabs.length === 1) return
    setTabs(tabs.filter((tab) => tab.id !== e.id ));
    setActiveTab(tabs[tabs.length - 1].title)
  }

  const [isEdit, setIsEdit] = useState(false)
  const ref = useClickOutside(() => setIsEdit(false));
  const TabTitle = (tab: NoteType) => {
    return (!isEdit) ? <Text onDoubleClick={() => setIsEdit(!isEdit)}>{tab.title}</Text> : <div ref={ref}><Input placeholder="Your email" value={tab.title} /></div>
  }

  const form = useForm({
    initialValues: {
      notes: [
        { title: 'New', note: 'Lorem ipsum', active: false, key: randomId() }
      ]
    }
  })

  const notes = form.values.notes.map((note, index) => (
    <div>{note.title}</div>
  ))

  return (
    <>
    <Tabs defaultValue="New" value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        {
          tabs.map((tab) => (
            <Tabs.Tab
              key={tab.key}
              value={tab.title}
              rightSection={
                <span onClick={() => deleteTab(tab)}><IconX size={14} /></span>
              }
            >
              {tab.title}
            </Tabs.Tab>
          ))
        }
        <Tabs.Tab
          value="add"
          onClick={addTab}
          ml="auto"
        >
          +
        </Tabs.Tab>
      </Tabs.List>

      {
        tabs.map((tab) => (
          <Tabs.Panel value={tab.title} key={tab.key}>
            <div className="mx-2">
              <TabTitle tab={tab} />
              <Textarea
                placeholder="Place a notes"
                label="Notes"
                autosize
                minRows={10}
                withAsterisk
                onChange={(event) => setValue(event.currentTarget.value)}
                size="xs"
              />
            </div>
          </Tabs.Panel>
        ))
      }
    </Tabs>
    </>
  )
}