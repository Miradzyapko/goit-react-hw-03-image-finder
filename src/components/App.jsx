
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Form } from './Form/Form';





export   class App extends Component {

  
    state = {
      
      searchImgName: '',
      
      
    };
    
 
 
    FormSubmitHandler = searchImgName => {
      this.setState ({searchImgName});
       
      };
  
     render() {
  
  

  
   
  
    
      
    
    
    return (
      <div>
      
        <Form  onSubmit={this.FormSubmitHandler}/>
      
         
 </div>
        




    );
    }
  
}


