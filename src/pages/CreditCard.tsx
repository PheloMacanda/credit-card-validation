import './CreditCard.css';
import InputForm from '../components/InputFields/InputForm';

const CreditCard = () => {

    const onChangeHandler = () => {
        console.log('Change');
    }

    return (
        <div>
            <h3 className="cred">Enter your Credit Card Details here</h3>
            <InputForm 
                height="50px"
                width="150px"
                title="Card Number"
                inputName="Card_Number"
                placeholder="0000 0000 0000 0000"
                onChange={onChangeHandler}
                value={null}
                inputType="text"
            />
            <InputForm 
                height="50px"
                width="40px"
                title="Date"
                inputName="Card_Date"
                placeholder="27/01"
                onChange={onChangeHandler}
                value={null}
                inputType="text"
            />
            <InputForm 
                height="50px"
                width="150px"
                title="CVV"
                inputName="Card_CVV"
                placeholder="000"
                onChange={onChangeHandler}
                value={null}
                inputType="text"
            />
        </div>
    );
};

export default CreditCard;