// interface LayoutProps {
//   children: React.ReactNode;
// }

interface AddCompanyFormProps {
  children: React.ReactNode
}

export default function InputSpacer({children} : AddCompanyFormProps) {
  return <div className="mb-3">{children}</div>
}