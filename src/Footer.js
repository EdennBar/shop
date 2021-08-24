import './index.css';
const Footer = () => {
  const links = [];
  return (
    <div>
    <div className="footer-shop-row">

      <div className="column">
        <ul>
          <li className="list-of-footer">
            <a className="link" href="">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li className="list-of-footer">
            <a className="link" href="">Our Board</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li className="list-of-footer">
            <a className="link" href="">Our Staff</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li className="list-of-footer">
            <a className="link" href="">Contact Us</a>
          </li>
        </ul>
      </div>
     
      </div>
      </div>

      );
}

export default Footer;