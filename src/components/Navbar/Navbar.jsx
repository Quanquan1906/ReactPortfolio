import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const menuClass = menuOpen
        ? "collapse navbar-collapse show"
        : "collapse navbar-collapse";
    return (
       <>Navbar</>
    );
};
