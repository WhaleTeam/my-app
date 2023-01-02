import { createStyles, Select, TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import Input from '../contact/input';
import InputSpacer from '../contact/inputSpacer';
import { DatePicker } from '@mantine/dates';
import { App } from '@prisma/client';


interface AddCompanyFormProps {
  onSubmit: any,
  apps: App[]
}

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export default function AddCompanyForm(props: AddCompanyFormProps){
  //const { register, handleSubmit, formState: {errors} } = useForm()
  const { classes } = useStyles();
  console.log(props.apps)
  
  const form = useForm({
    initialValues: {
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      appId: '',
      companyRegisterDate: '',
      companyDescription: '',
    },

    validate: {
      companyName: (value) => (value ? null : 'This field cant empty'),
      companyAddress: (value) => (value ? null : 'This field cant empty'),
      companyPhone: (value) => (value ? null : 'This field cant empty'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => props.onSubmit(values))}>
      <TextInput
        style={{ marginBottom: 10}}
        classNames={classes}
        withAsterisk
        label="Company Name"
        placeholder="Company Name"
        {...form.getInputProps('companyName')}
      />
      <TextInput
        style={{ marginBottom: 10}}
        classNames={classes}
        withAsterisk
        label="Company Address"
        placeholder="Company Address"
        {...form.getInputProps('companyAddress')}
      />
      <TextInput
        style={{ marginBottom: 10}}
        classNames={classes}
        withAsterisk
        label="Phone"
        placeholder="Phone"
        {...form.getInputProps('companyPhone')}
      />

      <Select
        style={{ marginBottom: 10, zIndex: 2 }}
        data={props.apps.map((a) => a.appName)}
        {...form.getInputProps('appId')}
        placeholder="Pick one"
        label="Company App"
        classNames={classes}
      />

      <DatePicker
        style={{ marginBottom: 10 }}
        label="Register Date"
        {...form.getInputProps('companyRegisterDate')}
        //placeholder="When will you leave?"
        classNames={classes}
        clearable={false}
      />
      <TextInput
        style={{ marginBottom: 10}}
        classNames={classes}
        label="Company Detail"
        placeholder=""
        {...form.getInputProps('companyDescription')}
      />

      <button
        className='bg-blue-500 rounded-md py-2 px-4 text-blue-100'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}