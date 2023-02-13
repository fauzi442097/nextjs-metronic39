import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


interface IMenuItem {
    name: string,
    url: string,
}

interface IMenu extends IMenuItem {
    icon: string,
    subMenu?: Array<IMenuItem> 
}

interface ISubMenu {
    subMenu: Array<IMenuItem>,
    parentName: string
}

const MenuItem = ({name, url}: IMenuItem) => {
    const router = useRouter();
    return (
        <div className="menu-item">
            <Link className={`menu-link ${router.pathname === url ? 'active': ''}`} href={url}>
                <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                </span>
                <span className="menu-title">{name}</span>
            </Link>
        </div>
    )
}

const SubMenu = ({ subMenu, parentName } : ISubMenu) => {
    return (
        <div className="menu-sub menu-sub-accordion">
            {subMenu.map((value:any, i:number) => (
                    value.subMenu ? (
                    <div key={value.id} data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">{value.name}</span>
                            <span className="menu-arrow" />
                        </span>

                        <SubMenu subMenu={value.subMenu} parentName={parentName}/>
                    </div>
                    ) : (
                        (i > 4 ) ? (
                            <div key={value.id} className="menu-inner flex-column collapse" id={`kt_app_sidebar_menu_${parentName}_collapse`}>
                                <MenuItem name={value.name} url={value.url}/>
                            </div>
                        ) : (
                            <MenuItem key={value.id} name={value.name} url={value.url}/>
                        )   
                    )
                )    
            )}

            {
                subMenu.length > 5 && (
                    <div className="menu-item">
                        <div className="menu-content">
                            <a className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href={`#kt_app_sidebar_menu_${parentName}_collapse`} data-kt-toggle-text="Show Less">
                                <span data-kt-toggle-text-target="true">Show {subMenu.length - 4} More</span>
                                <span className="svg-icon toggle-on svg-icon-2 me-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                        <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="svg-icon toggle-off svg-icon-2 me-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                        <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                        <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const Menu =(({name, icon, subMenu}: IMenu) => {    
    
    const [ activeLink, setActiveLink ] = useState(false);

    const refMenu = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if ( refMenu.current ) setActiveLink(Boolean(refMenu.current.querySelector(".active"))) 
    }, [])

    return (
        <div ref={refMenu} data-kt-menu-trigger="click" className={`menu-item menu-accordion ${activeLink ? 'open show hover' : ''}`}>
            <span className="menu-link">
              <span className="menu-icon">
                <i className={`${icon} fs-2`} />
              </span>
              <span className="menu-title">{name}</span>
              {
                subMenu && <span className="menu-arrow" />
              }
            </span>

            {subMenu && <SubMenu subMenu={subMenu} parentName={name}/>}
        </div>
    )
})

export default Menu