interface InputProps {
  placeholder: string,
  name: string,
  formRef: any
}

export default function Input(props: InputProps) {
  return (
    <input
      className="rounded py-2 px-4 text-lg w-full"
      name={props.name}
      placeholder={props.placeholder}
      {...props.formRef}
    />
  )
}