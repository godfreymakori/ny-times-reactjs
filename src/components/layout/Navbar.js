import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({heading}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                 {heading}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    heading: 'NewYork Times Popular Articles',
};

Navbar.propTypes = {
    heading: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
