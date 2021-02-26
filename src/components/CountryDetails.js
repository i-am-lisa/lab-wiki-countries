import React, { Component } from 'react'

export default class CountryDetails extends Component {
    state = {
        country: {}
    }


    getCountry = () => {
        let countryCode = this.props.match.params.countryCode
       
        let oneCountry = this.props.countries.filter((singleCountry) => {
            return singleCountry.cc3 == countryCode
        })

        this.setState({
            country: oneCountry
        })
    }

    render() {
        // const {match}
        return (
            <div>
                <h1>Country Details</h1>
            </div>
        )
    }
}
