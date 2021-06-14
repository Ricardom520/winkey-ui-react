import React from 'react';
import { Link } from 'react-router-dom';

import './index.less';

const ListsMenus: React.SFC = () => {
  return (
    <ul className='ListsMenus'>
      <li>
        <Link to='/components'>
          组件
        </Link>
      </li>
    </ul>
  )
}

export default ListsMenus;