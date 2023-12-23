import { ButtonProps } from "./Button.types";
import './Button.styles.scss'

const Button = ({type = 'primary', label='', onClick}: ButtonProps) => {
  const handleOnClick = () => {
    onClick?.();
  }

  return (
    <button onClick={handleOnClick} className={type}>
      {label}
    </button>
  )
}

export default Button;
