import { Link } from 'react-router-dom';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';


const Logo = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? logoLight : logoLight}
        alt='AIMass'
        width='96'
        height='24'
      />
    </Link>
  );
};

export default Logo;
