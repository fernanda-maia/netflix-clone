import './Slider.css';

import { useRef, useState } from 'react';

import SlideItem from 'views/Home/components/SlideItem'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';


const Slider = (props) => {
    const { movies } = props;
    
    const sliderRef = useRef();
    const [ isEnd, setIsEnd ] = useState(true);
    const [ isMoved, setIsMoved ] = useState(false);

    function handleClick(direction) {
        
        const distance = sliderRef.current.getBoundingClientRect();
        const size = distance.width
        
        let total = 0;
        
        if(distance.right < size && direction === "left") {
            total = distance.x + (size * 0.15);  
            
        } else if(distance.right > (size * 0.14) && direction === "right") {
            total = distance.x - (size * 0.15)
            
        } 
        
        setIsMoved((total >> 0) < 0);
        setIsEnd((total >> 0) > (-size * 0.86));
        
        sliderRef.current.style.transform = `translateX(${total}px)`
    }

    return(
        <div className="slider">
            <span className="slider-title">
                Minha Lista
                <ArrowForwardIos className="see-all-icon"/>
                <span className="see-all">Ver Tudo</span>
            </span>

            <div className="wrapper">
               <span className="slider-btn left"
                     style={{display: !isMoved && 'none'}} 
                     onClick={() => handleClick("left")}>
                   <ArrowBackIos className="arrow-icon"/>
                </span> 

                <div className="container" ref={ sliderRef }>
                    {movies.map((m) => <SlideItem  key={ m.id } movie={m}/>)}
                </div>

                <span className="slider-btn right"
                      style={{display: !isEnd && 'none'}} 
                      onClick={() => handleClick("right")}>
                    <ArrowForwardIos className="arrow-icon"/>
                </span> 
            </div>
        </div>
    );
}

export default Slider;