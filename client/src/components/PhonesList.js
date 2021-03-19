import React, { Component } from 'react'
import getPhones from '../service/PhonesService'

export default class PhonesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phonesList: []
        }
    }

    componentDidMount() {   
        getPhones().then( ( result ) =>{
            this.setState({ phonesList: result })
        }) 
    }

    render() {
        return (
            <div>
              {
                this.state.phonesList.map((phone)=>{
                    return <div> {phone.name} </div>
                }) 
              }
            </div>
        )
    }
}
