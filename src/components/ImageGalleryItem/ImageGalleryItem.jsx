import PropTypes from 'prop-types';
import { ListItem, Img } from './ImageGalleryItem.Styled'; 


 export const ImageGalleryItem = ({ webformatURL, largeImg, onClick  }) => {
    return (
        <ListItem>
        <Img src={webformatURL} onClick={() => onClick(largeImg)} alt="" />
    </ListItem>
)

}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

  


