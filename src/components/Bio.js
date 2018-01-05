import React, {Component} from 'react';
import cat from '../images/cat.jpg';
import me from '../images/me.jpg';

class Bio extends Component {
  render () {
    return (
      <div>
        <h1>Bio</h1>
        <div className="info1">
          <img src={cat}/>
          <img src={me}/>
          <p>
            Hailing from the great city of Memphis in Tennessee, Stefanie has interests ranging from good barbeque to listening to live blues and jazz. Her passion for education, the arts, and sciences began in early life during volunteer work, exploring the outdoors through hiking, biking, swimming, and climbing, and classes at school.
          </p>
        </div>
        <div className="info2">
          <p>
            Currently, Stefanie lives in a cozy spot of the Dallas area, living with her cat, Daniel, her boyfriend, and a roomate. On weekends, she codes, paints, and finds time to practice digital art. She frequents art contests, craft fairs, curio shops and book stores, and museums around town.
          </p>
        </div>
      </div>
    )
  }
}
export default Bio;
