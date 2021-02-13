import Menu from '../index'
import '../styles/index.scss'
import React from 'react'
import MenuItem from '../menuItem'
import SubMenu from '../subMenu'

export default ()=><div
style={{
  padding: '20px 40px',
  width: '500px'
}}
>
<h3>
  组件演示
</h3>
<Menu
  defaultIndex="0"
  defaultOpenSubMenus={[]}
  mode="horizontal"
  onSelect={function noRefCheck(){}}
>
  <MenuItem index="2">
    C++
  </MenuItem>
  <MenuItem>
    Java
  </MenuItem>
  <MenuItem disabled >
    disabled
  </MenuItem>
  <SubMenu title="下拉选项">
    <MenuItem>
      node.js
    </MenuItem>
    <MenuItem>
      deno.js
    </MenuItem>
  </SubMenu>
</Menu>
</div>