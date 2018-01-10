import React, {Component} from 'react';


//this is a placeholder component for when there are no images in a section.
class NoImages extends Component {
  render(){
    return (
      <div>
        <h3>Oopsie! This is embrasssing!</h3>
        <p>There's nothing here yet!</p>
        <p>Why don't you go have a look at the other sections...</p>
      </div>
    )
  }
}
export default NoImages;
