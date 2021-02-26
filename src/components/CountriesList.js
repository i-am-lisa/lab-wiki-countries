import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import countriesJson from '../countries.json';
import CountryDetails from './CountryDetails'



export default class CountriesList extends Component {



    render() {
        const {countries} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5" >
                        <div className="list-group">
                        {
                        countries.map((country, index) => {
                            return <div key={index}>
                            {/* name = {country.name.common} */}
                                <Link to={'/$country.cc3'}>{country.name.common}</Link>
                            </div>
                        })
                        }
                        </div>
                    </div>
                    <div className="col-5" >
                        <div className="list-group">
                        <Route countries = {this.props.countries} path='/:countryCode' component={CountryDetails} render/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
