import PropTypes, { string, number } from 'prop-types';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';

import { Header, CoverImg, Info, MovieType, Actions, MoreInfoButton } from './Styled';

import Netflix from 'assets/images/netflix-icon.svg';


const Featured = (props) =>{
    const { movie } = props;

    return (
        <Header imgURL={movie.scene}>
            <Info>
                <MovieType>
                    <img src={ Netflix } alt="Logo" />{ movie.type }
                </MovieType>

                <img src={movie.titleImg} alt={movie.title}/>
                <p>{movie.description}</p>

                <Actions>
                    <button>
                        <PlayArrow style={{transform: "scale(1.2)"}}/>Assistir
                    </button>
                    <MoreInfoButton>
                        <InfoOutlined style={{transform: "scale(1.2)"}}/>
                        Mais informações
                    </MoreInfoButton>
                </Actions>
            </Info>
        </Header>
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