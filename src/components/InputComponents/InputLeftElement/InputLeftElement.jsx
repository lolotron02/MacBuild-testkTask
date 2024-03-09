import c from './InputLeftElement.module.scss'

function InputLeftElement({ children, ...atributes }) {
  return (
    <div className={c.component} {...atributes}>
      {children}
    </div>
  )
}

export default InputLeftElement