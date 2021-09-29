import React, { Component } from 'react'
import BodyComponent from './BodyComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="Home">
                <HeaderComponent/>
                <BodyComponent/>
                <FooterComponent/>
            </div>
        )
    }
}

