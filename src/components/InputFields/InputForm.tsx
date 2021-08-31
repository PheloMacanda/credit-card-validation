import './Form.css';

export interface IProps {
    inputType: string
    inputName: string
    width: string
    height: string
    value: any
    placeholder: string
    title: string
    onChange: () => void
}

const InputForm = (props: IProps) => {

    const {
        inputType,
        inputName,
        width,
        value,
        placeholder,
        height,
        title,
        onChange
    } = props;

    return (
        <>
            <p className="name">{title}</p>
            <input
                type={inputType}
                name={inputName}
                width={width}
                height={height}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className="input-field"
            />
        </>
    );
};

export default InputForm;