import { useHistory } from "react-router-dom";
import Email from './Email';
import Gallery from './Gallery';
import './index.css';

const Home = () => {
  let history = useHistory();

  return (
    <div className="menu-section">

      <div className="sneaker-navigation">

        <a href={"#catalog"} onClick={() => {
          history.push("/Catalogsearch");
        }}>
          <img src="images/sneaker_navigation.jpeg" className="imgNavigation" />
        </a>


      </div>
      <div style={{ height: '50px' }}></div>
      <Gallery></Gallery>
      <Email></Email>


    </div>

  );
}

export default Home;
