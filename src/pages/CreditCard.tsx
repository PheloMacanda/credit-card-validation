import Styles from '../components/Card/CardStyles';
import { Form, Field } from 'react-final-form';
import Card from '../components/Card/Card';
import { country_list } from '../constants/countries';
import Modal from '../components/Modal/Modal';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from '../utils/cardUtils';

const sleep = (ms: any) => new Promise((resolve: any) => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
    await sleep(300)
    // window.alert(JSON.stringify(values));
}

const CreditCard = () => {

    return (
        <Styles>
            <h1>Credit Card Validation - Rank Interactive Tech Assesment</h1>
            <h2>Enter your credit card details below..</h2>

            <Form
                onSubmit={onSubmit}
                render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                    active
                }:any) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Card
                                number={values.number || ''}
                                name={values.name || ''}
                                expiry={values.expiry || ''}
                                cvc={values.cvc || ''}
                                focused={active}
                            />
                            <div>
                                <Field
                                    name="number"
                                    component="input"
                                    type="text"
                                    pattern="[\d| ]{16,22}"
                                    placeholder="Card Number"
                                    format={formatCreditCardNumber}
                                />
                            </div>
                            <div>
                                <Field
                                    name="name"
                                    component="input"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <Field
                                    name="expiry"
                                    component="input"
                                    type="text"
                                    pattern="\d\d/\d\d"
                                    placeholder="Valid Thru"
                                    format={formatExpirationDate}
                                />
                                <Field
                                    name="cvc"
                                    component="input"
                                    type="text"
                                    pattern="\d{3,4}"
                                    placeholder="CVC"
                                    format={formatCVC}
                                />
                            </div>
                            <div>
                                <Field 
                                    name="country"
                                    component="select"
                                    placeholder="Country"
                                >
                                    <option placeholder="Select Country" />
                                    {country_list.map((country) => {
                                        return (<option value={country.code}>{country.name}</option>);
                                    })}
                                </Field>
                            </div>
                            <div style={{ paddingLeft: '20px'}}>
                                <label style={{width: '100%'}}>Banned Countries</label>
                                <Modal />
                            </div>
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </button>
                            </div>
                            <h2>Values</h2>
                            <pre style={{ overflow: 'scroll'}}>{JSON.stringify(values)}</pre>
                        </form>
                    )
                }}
            />
        </Styles>
    );
};

export default CreditCard;