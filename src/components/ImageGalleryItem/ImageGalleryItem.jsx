import PropTypes from 'prop-types';
import { List, ListItem, Item} from './ContactList.Styled'; 
import { Button } from './ContactList.Styled';

export const ImageGallery = ({img }) => {
    return (
        <List>   
        {imgs.map(({ img}) => (
            <li class="gallery-item">
            <img src="" alt="" />
          </li>
        ))}
    </List>
)
        }
ImageGallery.propTypes = {
   
    }


