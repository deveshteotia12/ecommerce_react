import React from "react";
import MenuItems from "../menu-items/homepage.menu-items"
import Items from "../../items"
import "./homepage.directory.scss"
class Directory extends React.Component
{
  constructor()
  {
    super()
    this.state={
      sections: Items
    }
  }
  render()
  {
    return(
        <div className="directory-menu">
          {
            this.state.sections.map((e)=>(<MenuItems key={e.id} item={e.title} imageURL={e.imageUrl} size={e.size} linkUrl={e.linkUrl}></MenuItems>))
          }
        </div>
    )
  }
}
export default Directory;
