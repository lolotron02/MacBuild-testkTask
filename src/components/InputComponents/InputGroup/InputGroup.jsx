import c from './InputGroup.module.scss'

function InputGroup({ children }) {
    return (
        <div className={c.component}>
            {children}
        </div>
    )
}

export default InputGroup