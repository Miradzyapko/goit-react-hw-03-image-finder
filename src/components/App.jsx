
import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ToastContainer, toast } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader} from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import axios from 'axios';
import { Container } from './App.Styled';
export   class App extends Component {

  
    state = {
      
      imgSearch: '',
      page: 1,
      images: [],
      isLoading: false,
      modalImg: '',
      
    };
    
    async componentDidUpdate(_, prevState) {
      if (
        prevState.imgSearch !== this.state.imgSearch ||
        prevState.page !== this.state.page
      ) {
        this.setState({ isLoading: true });
        try {
          const response = await axios({
             url: 'https://pixabay.com/api/',
            params: {
              key: '31354257-dee15866aed277984dcd7ccaa',
              q: this.state.imgSearch,
              image_type: 'photo',
              orientation: 'horizontal',
              safesearch: true,
              per_page: 12,
              page: this.state.page,
            },
          })
          
  
          if (response.totalHits === 0) {
            return toast.error('Sorry, didn`t find, try another');
          }
  
          if (response.data.hits.length) {
            return this.setState(prevState => ({
              images: [...prevState.images, ...response.data.hits],
            }));
          } else {
            return toast.error(
              'Sorry, there are no images matching your search query.'
            );
          }
        } catch (error) {
          this.setState({ error});
        } finally {
          this.setState({ isLoading: false });
        }
      }
    }
 
    FormSubmitHandler = imgSearch => {
      this.setState ({imgSearch,
        images: [],
        page: 1,
       });
       
      };
      
  toggleModal = (image) => {
    this.setState({ modalImg: image });
  };

  loadMore = event => {
    event.preventDefault();
    this.setState(pr => ({
      page: pr.page + 1,
    }));
  };
    render() {
      const { images, modalImg, isLoading } = this.state;
  
  

  
   
  
    
      
    
    
    return (
      
      <Container>
        <Form  onSubmit={this.FormSubmitHandler}/>
        <ImageGallery images={images} onClick={this.toggleModal} />
        {isLoading === 'true' && <Loader />}
       
        {modalImg && <Modal image={modalImg} onModalClose={this.toggleModal} />}
        {images.length >= 12 && <Button loadMore ={this.loadMore}/>
      }
        <ToastContainer />
         
 </Container>
        




    );
    }
  
}


