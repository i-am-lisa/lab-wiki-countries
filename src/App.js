import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import CountriesList from './components/CountriesList'
import countriesJson from './countries.json'
// import CountryDetail from './components/CountryDetail'


export default class App extends Component {
  state = {
    countries: countriesJson
  }

  render() {
    return (
      <div>
      <Navbar/>
      <CountriesList countries={this.state.countries}/>
    </div>
    )
  }
}

