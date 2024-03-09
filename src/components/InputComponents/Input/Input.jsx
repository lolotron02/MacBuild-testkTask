import c from './Input.module.scss'

function Input({ children, ...atributes }) {
    return (
        <input className={c.component} type="text" {...atributes} />
    )
}

export default Input