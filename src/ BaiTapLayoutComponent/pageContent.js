import React, { Component } from 'react'
import PageFeatures from './pageFeatures'

export default class PageContent extends Component {
    render() {
        return (
            <section class="pt-4">
                <div class="container px-lg-5">
                    <PageFeatures />
                </div>
            </section>
        )
    }
}
