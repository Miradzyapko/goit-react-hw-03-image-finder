import React from 'react';
import PropTypes from 'prop-types'; 
import { Component } from 'react';
import { Button, SearchForm, Header} from './Form.Styled';
 class Form extends Component   {
    state = {
        searchImgName: '',
    };
    static propTypes = {
      searchImgName: PropTypes.string, 
      handleSubmit: PropTypes.func,
      handleChange: PropTypes.func 
  }
    handleChange = (e) => { 
      const { searchImgName } = e.currentTarget;
      this.setState({
        searchImgName,

      });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({ searchImgName: '' })
}
  render()  {
return (
<Header class="searchbar">
<SearchForm class="search-form"onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchImgName"
          autocomplete="off"
          placeholder="Search images..."
          onChange = {this.handleChange}
        />
        <Button type="submit">Search</Button>
      </SearchForm>
   </Header>
);
}
}

export default Form;