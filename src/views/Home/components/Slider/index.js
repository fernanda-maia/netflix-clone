import { useRef, useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

import SlideItem from 'views/Home/components/SlideItem'
import { Row, Title, SeeAll, SliderWrapper, SliderContainer, SliderButton } from './Styled';


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
        <Row>
            <Title>
                Minha Lista
                <ArrowForwardIos className="see-all-icon"/>
                <SeeAll />
            </Title>

            <SliderWrapper>
               <SliderButton className="left"
                     style={{display: !isMoved && 'none'}} 
                     onClick={() => handleClick("left")}>
                   <ArrowBackIos className="arrow-icon"/>
                </SliderButton> 

                <SliderContainer ref={ sliderRef }>
                    {movies.map((m) => <SlideItem  key={ m.id } movie={m}/>)}
                </SliderContainer>

                <SliderButton className="right"
                      style={{display: !isEnd && 'none'}} 
                      onClick={() => handleClick("right")}>
                    <ArrowForwardIos className="arrow-icon"/>
                </SliderButton> 
            </SliderWrapper>
        </Row>
    );
}

export default Slider;