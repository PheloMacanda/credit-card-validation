import './Country.css';
import { banned_country_list, banned_country_list_names } from '../../constants/countries';

const Country = ({ countryName, banned, country }: any) => {

    const handleClick = () => {
        if (banned) {
            const index = banned_country_list.indexOf(country);
            const indexName = banned_country_list_names.indexOf(country.name);
            if (index > -1) {
                banned_country_list.splice(index, 1);
            }
            if (indexName > -1) {
                banned_country_list_names.splice(indexName, 1);
            }
            window.alert(`Removed ${countryName} from banned countries.`);
        }
        else {
            banned_country_list.push(country);
            banned_country_list_names.push(country.name);
            window.alert(`Added ${countryName} to banned countries.`);
        }
    }

    return (
        <div className="row">
            <div className="column">
                {countryName}
            </div>
            <div className="column">
                {banned === true ? <button onClick={handleClick} className="config-red-btn">Remove Country</button> : <button onClick={handleClick} className="config-green-btn">Add Country</button>}
            </div>
        </div>
    );
};

export default Country;