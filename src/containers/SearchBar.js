import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            term: e.target.value
        })
        
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
        <Form onSubmit={ this.onFormSubmit }>
            <FormGroup>
                <Input onChange={ this.handleChange } value={ this.state.term } type="search" name="search" id='search' placeholder="Search........." />
            </FormGroup>
            <Button type='submit' color='danger'>Search</Button>
        </Form>
        );
    }
}

export default SearchBar;
