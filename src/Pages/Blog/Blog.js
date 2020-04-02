import React, { Component } from 'react'
import Layout from '../Layout';

export default class Blog extends Component {
  render() {
    return (
      <Layout
        header="Blog"
        nav="Navigation"
        section="Section"
        article="Article"
        aside="Aside"
        footer="Footer"
      />
    )
  }
}
