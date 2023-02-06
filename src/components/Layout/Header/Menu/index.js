import React from "react";
import { useStaticQuery,graphql, Link } from "gatsby";
import { MenuWrapper , MenuItem, SubMenuItemWrapper } from "./style";

const Menu = () => {
    const result = useStaticQuery(graphql `
        fragment menuItemData on ContentfulMenuItem {
        id 
        label
            page {
                ... on ContentfulPage {
                    slug
                }
                ... on ContentfulBlog {
                    slug
                }
            }
        }
        
        query MyQuery {
        contentfulMenu {
            menuItems {
            ...menuItemData
            subMenuItems {
            ...menuItemData
            }
            }
        }
        }
    `);

    return (
        <MenuWrapper>
        {result.contentfulMenu.menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id}>
            {!menuItem.subMenuItems?.map ? (
               <Link to={`/${menuItem.page.slug}`}>
                {menuItem.label}
               </Link>  
            ):(
                <SubMenuItemWrapper>
                    <div>{menuItem.label}</div>
                    <div>
                        {menuItem.subMenuItems?.map((subMenuItem) =>( 
                            <div key={subMenuItem.id}>
                                <Link to={`/${subMenuItem.page.slug}`}>
                                    {menuItem.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </SubMenuItemWrapper>
            )}
           </MenuItem>
        ))}
      </MenuWrapper>
    ); 
};

export default Menu;