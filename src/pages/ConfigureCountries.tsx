import { country_list, banned_country_list_names } from "../constants/countries";
import Country from "../components/Country/Country";

const ConfigureCountries = () => {

    return (
        <div>
            <h3 style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>Add or Remove Banned Countries</h3>

            <div style={{ paddingTop: '5rem', paddingLeft: '5rem' }}>
                {country_list.map((country) => {
                    return (
                        <div key={country.code}>
                            <Country
                                countryName={country.name}
                                country={country}
                                banned={banned_country_list_names.includes(country.name) ? true : false}
                            />
                        </div>
                    );

                })}
            </div>
        </div>

    )
}

export default ConfigureCountries;