import './Input.css'
import { IInput, INPUT_TYPES } from "../../types";

const Input = ({ placeholder, value, onChange, type, disabled, errorMessage, className }: IInput) => {
    return (
        <input
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => onChange && onChange(e)}
            type={type}
            disabled={disabled}
        />
    )
}

export { Input };















