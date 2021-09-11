import './Home.css';

import Slider from './components/Slider';
import { Navbar } from './components/layout';
import Featured from './components/Featured/Featured';

import { USERS, MOVIES } from 'utils/mocks';
import { HOME_OPTIONS } from 'utils/constants/Links';


export default function Home(props) {
    const user = USERS.find((u) => u.active);

    return (
        <div className="home">
            <Navbar options={ HOME_OPTIONS }
                    active={ user }/>

            <Featured movie={MOVIES[0]}/>
            <Slider user={user} movies={MOVIES}/>
            <Slider user={user} movies={MOVIES}/>
            <Slider user={user} movies={MOVIES}/>
            <Slider user={user} movies={MOVIES}/>
            <Slider user={user} movies={MOVIES}/>
            <Slider user={user} movies={MOVIES}/>
            <Slider user={user} movies={MOVIES}/>
        </div>
        
    );
}