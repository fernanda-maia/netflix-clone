import './Featured.css';

import PropTypes from 'prop-types';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';

import Netflix from 'assets/images/netflix-icon.svg';

const Featured = ({ type }) =>{
    return (
        <div className="featured">
            <img src="https://cinemaedebate.files.wordpress.com/2009/10/um-estranho-no-ninho-foto-5.jpg"
                 alt="Um estranho no ninho"/>
            <div className="movie-info">
                <div className="type">
                    <img src={ Netflix } alt="Netflix Logo" />
                    {type}
                </div>
                <img src="data:image/png;base64,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" alt="Title" />
                <p className="movie-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more 
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="actions">
                    <button>
                        <PlayArrow className="nav-icon" />Assistir
                    </button>
                    <button className="more-info-btn">
                        <InfoOutlined className="nav-icon" />Mais informações
                    </button>
                </div>
            </div>
        </div>
    );
}

Featured.propTypes = {
    type: PropTypes.string.isRequired
}

export default Featured;