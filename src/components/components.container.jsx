import React from "react";
import Content from "./content"
class Container extends React.Component{
    render()
    {
      return(
       <div className="box">
              <Content item="random"></Content>
       </div>
      )
    }
}
export default Container;