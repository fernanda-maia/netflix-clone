import './SlideItem.css';

import Netflix from 'assets/images/netflix-icon.svg';


const SlideItem = (props) => {
    const { id, type, title, titleImg ,description, thumbnail} = props.movie
    return(
        <div className="slide-item">
            <div className="slide-header">
                <img src={Netflix} alt="logo Netflix" className="logo-img" />
                <img src={thumbnail} alt={title} className="scene-img"/>
            </div>
        </div>
    );
}

export default SlideItem;