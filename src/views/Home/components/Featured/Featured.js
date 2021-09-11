import './Featured.css';

import PropTypes, { string, number } from 'prop-types';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';

import Netflix from 'assets/images/netflix-icon.svg';


const Featured = (props) =>{
    const { movie } = props;

    return (
        <div className="featured">
            <img src={movie.scene} alt={movie.title}/>

            <div className="movie-info">
                <div className="type">
                    <img src={ Netflix } alt="Netflix Logo" />
                    { movie.type }
                </div>
                <img src={movie.titleImg} alt={movie.title}/>
                <p className="movie-description">{movie.description}</p>
                <div className="actions">
                    <button>
                        <PlayArrow className="nav-icon" />
                        Assistir
                    </button>
                    <button className="more-info-btn">
                        <InfoOutlined className="nav-icon" />
                        Mais informações
                    </button>
                </div>
            </div>
            
        </div>
    );
}

Featured.propTypes = {
    movie: PropTypes.shape({
        id: number,
        type: string,
        title: string,
        titleImg: string,
        description: string,
        scene: string

    }).isRequired
}

export default Featured;