import React, { Component } from 'react';

import Layout from '../layout';

import './styles.css';

export default class Contact extends Component {
  render() {
    return (
      <Layout
        header="Contact"
        nav="Navigation"
        section="Section"
        article="Article"
        aside="Aside"
        footer="Footer"
      />
    )
  }
}
