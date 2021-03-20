import React, { Component } from 'react'
import getPhones from '../service/PhonesService'
import PhoneCard from './PhoneCard'
import ClipLoader from "react-spinners/ClipLoader";

export default class PhonesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phonesList: [],
            selectedPhone: null,
            isLoading: true
        }
    }

    componentDidMount() {   
        getPhones().then( ( phoneArr ) =>{
            console.log( phoneArr )

            this.setState({ 
                phonesList: phoneArr, 
                isLoading: false 
            })
        }) 
    }

    openDetails( phone ) {
        this.setState({
            selectedPhone: phone
        })
    }

    render() {
        const { phonesList, selectedPhone, isLoading } = this.state

        return (
            <div>
             <ClipLoader loading={isLoading} size={150} />

              {
                phonesList?.map((phone)=>{
                    return <div onClick={ ()=>this.openDetails(phone) } key={phone.id}> {phone.name} </div>
                }) 
              }
              <PhoneCard phone={ selectedPhone }/>
            </div>
        )
    }
}
