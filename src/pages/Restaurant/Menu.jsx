import React from 'react'

//Components
import MenuCollection from '../../Components/Restaurant/MenuCollection'

const Menu = () => {
  return (
    <div className="px-3 flex flex-wrap gap-4">
        <MenuCollection 
            image={["https://b.zmtcdn.com/data/menus/382/50382/598077ec2bc2e6829b2c9df65e00e73e.jpg", "https://b.zmtcdn.com/data/menus/382/50382/4426b31cbc97e6a321fbe199ff0bf2ee.jpg", "https://b.zmtcdn.com/data/menus/382/50382/598077ec2bc2e6829b2c9df65e00e73e.jpg"]}
            title="Items"
            pages="3"
            /> 
            <MenuCollection 
            image={["https://b.zmtcdn.com/data/menus/382/50382/598077ec2bc2e6829b2c9df65e00e73e.jpg", "https://b.zmtcdn.com/data/menus/382/50382/4426b31cbc97e6a321fbe199ff0bf2ee.jpg", "https://b.zmtcdn.com/data/menus/382/50382/598077ec2bc2e6829b2c9df65e00e73e.jpg"]}
            title="Items"
            pages="3"
            />     
    </div>
  )
}

export default Menu