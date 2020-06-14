import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MenuComponent from './Menu.component';
import { getViewNameFromPathname } from '../shared/utils';
import { urlNameMapping } from './items';

const MenuContainer = ({ open, toogleSideBar, location }) => {
    const [selectedMenuItem, setSeletctedMenuItem] = useState(urlNameMapping[getViewNameFromPathname(location.pathname)]);

    const onClickMenuItem = (item) => {
        setSeletctedMenuItem(item.value);
        toogleSideBar();
    }

    return <MenuComponent 
        open={open}
        onClickMenuItem={onClickMenuItem}
        selectedMenuItem={selectedMenuItem}
    />
}

export default withRouter(MenuContainer);
