import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../containers/actions';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { searchTerm: '' };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
        
    }

    onFormSubmit(e) {
        e.preventDefault();
        
        //Fetching Weather
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({ searchTerm: '' });
    }

    render() {
        return (
        <Form onSubmit={ this.onFormSubmit }>
            <FormGroup>
                <Input onChange={ this.handleChange } value={ this.state.searchTerm } type="search" name="search" id='search' placeholder="Search........." />
            </FormGroup>
            <Button type='submit' color='danger'>Search</Button>
        </Form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);