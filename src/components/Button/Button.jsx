import style from "./Button.module.css"

const Button = (props) => {
  return (
    <button style={{backgroundColor: props.bg, color: props.color}} className={style.Button}>
      {props.text}
    </button>
  )
}

export default Button