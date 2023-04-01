import React from 'react';
import PropTypes from 'prop-types'; 
import { Component } from 'react';
import { Button, SearchForm, Searchbar} from './Form.Styled';
 export  class Form extends Component   {
    state = {
        searchImgName: '',
    };
    static propTypes = {
      searchImgName: PropTypes.string, 
      handleSubmit: PropTypes.func,
      handleChange: PropTypes.func,
    };
    handleChange = e => { 
      const { searchImgName } = e.currentTarget;
      this.setState({
        searchImgName,

      });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({ searchImgName: '' });
};
  render()  {
return (
<Searchbar>
<SearchForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchImgName"
          autoComplete="off"
          placeholder="Search images..."
          onChange = {this.handleChange}
        />
        <Button type="submit">Search</Button>
      </SearchForm>
   </Searchbar>
);
}
}
 
export default Form;