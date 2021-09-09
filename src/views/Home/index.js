import './Home.css';

import { Navbar } from './components/layout';
import Featured from './components/Featured/Featured';


export default function Home(props) {
    return (
        <div className="home">
            <Navbar />
            <Featured type="filme"/>
        </div>
        
    );
}