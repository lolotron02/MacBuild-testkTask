import c from './InputRightElement.module.scss'

function InputRightElement({ children, ...atributes }) {
  return (
    <div className={c.component} {...atributes}>
      {children}
    </div>
  )
}

export default InputRightElement