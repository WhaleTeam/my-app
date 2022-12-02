const C_H1 = ({children}) => {
  return (
    <h1 className='text-2xl'>{children}</h1>
  )
}

const C_H2 = ({children}) => {
  return (
    <h2 className='text-lg font-bold'>{children}</h2>
  )
}

export default function TailwindCSS() {
  return (
    <>
      <div className='px-8'>
      <h1 className='text-3xl'>Tailwind CSS Cheat-sheets</h1>
      <hr className="mb-5"/>
      <div className='flex'>
        <div className="w-1/3">
          <C_H1>Layout</C_H1>
          <C_H2>Container</C_H2>
          <p>.container</p>
          <C_H2>Box Sizing</C_H2>
          <p>.box-[border|content]</p>
          <C_H2>Display</C_H2>
          <p>
            .block<br/>
            .inline-block<br/>
            .inline<br/>
            .flex<br/>
            .inline-flex<br/>
            .table<br/>
            .table-caption<br/>
            .table-cell<br/>
            .table-column<br/>
            .table-column-group<br/>
            .table-footr-group<br/>
            .table-header-group<br/>
            .table-row-group<br/>
            .table-row<br/>
            .grid<br/>
            .inline-grid<br/>
            .contents<br/>
            .hidden
            <div className="flow-root"></div>
          </p>
        </div>
        <div className="w-1/3">
          <C_H1>Box Alignment</C_H1>
        </div>
        <div className="w-1/3">
          <C_H1>Background</C_H1>
        </div>
      </div>
    </div>
    </>
  )
}