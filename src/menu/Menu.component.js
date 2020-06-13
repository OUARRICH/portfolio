import React from 'react';
import classNames from 'classnames';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import {menuItems} from './items';

import './Menu.component.css';

const Menu = ({open, onClickMenuItem, selectedMenuItem}) => (
    <ul className={classNames("App__menu", {"App__menu--open": open}, {"App__menu--close": !open})}>
        {
        menuItems.map(item => <Link to={item.url} key={`Link__${item.value}`}>
            <li onClick={() => onClickMenuItem(item)} key={item.value} className={classNames("App__menu__item", 
                {"App__menu__item--selected": item.value === selectedMenuItem}
            )}>
                {item.text}
            </li>
        </Link>)
        }
    </ul>
);

export default Menu;