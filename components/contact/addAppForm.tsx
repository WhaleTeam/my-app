import { useForm } from 'react-hook-form'
import Input from './input'
import InputSpacer from './inputSpacer'

interface FormErrorType {
  errorMessage: string
}

const FormError = ({errorMessage}: FormErrorType) => {
  return <p className='text-red-300 mt-1'>{errorMessage}</p>
}

interface AddAppFormProps {
  onSubmit: any
}

export default function AddAppForm(props: AddAppFormProps){
  const { register, handleSubmit, formState: {errors} } = useForm()

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder='App Name'
          name="appName"
          formRef={register('appName', { required: true })}
        />
        {
          errors.appName && (
            <FormError errorMessage='App Name is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Platform'
          name="appPlatform"
          formRef={register('appPlatform', {required: true})}
        />
        {
          errors.appPlatform && (
            <FormError errorMessage='Platform is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Version'
          name="appVersion"
          formRef={register('appVersion', {required: false})}
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Description'
          name="appDescription"
          formRef={register('appDescription', {required: false})}
        />
      </InputSpacer>

      <button
        className='bg-blue-500 rounded-md py-2 px-4 text-blue-100'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}