import './Home.css';
import { Navbar } from '../../components/layout';

export default function Home(props) {
    return (
        <div className="home">
            <Navbar />
            Hello Home!
        </div>
    );
}