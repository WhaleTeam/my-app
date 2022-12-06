import { useForm } from 'react-hook-form'
import Input from './input'
import InputSpacer from './inputSpacer'

interface FormErrorType {
  errorMessage: string
}

const FormError = ({errorMessage}: FormErrorType) => {
  return <p className='text-red-300 mt-1'>{errorMessage}</p>
}

interface AddCompanyFormProps {
  onSubmit: any
}

export default function AddCompanyForm(props: AddCompanyFormProps){
  const { register, handleSubmit, formState: {errors} } = useForm()

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder='Company Name'
          name="companyName"
          formRef={register('companyName', { required: true })}
        />
        {
          errors.companyName && (
            <FormError errorMessage='Company Name is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Company Address'
          name="companyAddress"
          formRef={register('companyAddress', {required: true})}
        />
        {
          errors.companyAddress && (
            <FormError errorMessage='Company Address is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Phone'
          name="companyPhone"
          formRef={register('companyPhone', {required: true})}
        />
        {
          errors.companyPhone && (
            <FormError errorMessage='Phone is required' />
          )
        }
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Company Detail'
          name="companyDescription"
          formRef={register('companyDescription', {required: false})}
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