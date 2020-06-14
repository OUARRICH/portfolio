import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import {menuItems} from './items';

import './Menu.component.css';

const Menu = ({open, onClickMenuItem, selectedMenuItem}) => (
    <div className={classNames("App__menu", {"App__menu--open": open}, {"App__menu--close": !open})}>
        <div className="App__menu__avatarContainer">
            <div className="App__menu__avatar"></div>
            <h2>Said OUARRICH</h2>
            <p>Développeur JavaScript</p>
            <p>NodeJS</p>
            <p>React - Angular</p>
        </div>
        <ul>
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
    </div>
);

export default Menu;