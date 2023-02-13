import React, {useRef} from 'react'
import Menu from './menu'
import menus from './menus.json';


const SidebarMenu = () => {
  return (
    <div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" className="app-sidebar-menu-primary menu menu-column menu-rounded menu-sub-indention menu-state-bullet-primary px-6 mb-5">
         {
            menus.map((menu, i) => {
               return (
                  <Menu 
                     key={menu.id}
                     name={menu.name} 
                     url={menu.url} 
                     icon={menu.icon} 
                     subMenu={menu.subMenu}
                  />
               )
            })
         }
      </div>
  )
}

export default SidebarMenu