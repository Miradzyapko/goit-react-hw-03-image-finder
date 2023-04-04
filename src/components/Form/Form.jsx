import React from 'react';
import { toast } from 'react-toastify'
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
      this.setState({ searchImgName: e.currentTarget.value.toLowerCase() });

      
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImgName.trim() === '') {
      return toast.error('Write search name');
    }
    this.props.onSubmit(this.state.searchImgName)
    this.setState({ searchImgName: '' });
};
  render() {
   const { searchImgName } = this.state;
return (
<Searchbar>
<SearchForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchImgName"
          value={searchImgName}
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
 
