import { useForm } from 'react-hook-form'
import Input from './input'
import InputSpacer from './inputSpacer'

interface FormErrorType {
  errorMessage: string
}

const FormError = ({errorMessage}: FormErrorType) => {
  return <p className='text-red-300 mt-1'>{errorMessage}</p>
}

interface AddContactFormProps {
  onSubmit: any
}

export default function AddContactForm(props: AddContactFormProps){
  const { register, handleSubmit, formState: {errors} } = useForm()

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder='First Name'
          name="firstName"
          formRef={register('firstName', { required: true })}
        />
        {
          errors.firstName && (
            <FormError errorMessage='First Name is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Last Name'
          name="lastName"
          formRef={register('lastName', {required: true})}
        />
        {
          errors.lastName && (
            <FormError errorMessage='Last Name is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Email'
          name="email"
          formRef={register('email', {required: true})}
        />
        {
          errors.email && (
            <FormError errorMessage='Email is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Phone'
          name="phone"
          formRef={register('phone', {required: false})}
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Avatar'
          name="avatar"
          formRef={register('avatar', {required: false})}
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