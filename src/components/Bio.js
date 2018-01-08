import React, {Component} from 'react';
import cat from '../images/cat.jpg';
import me from '../images/me.jpg';
import '../styles/bio.css';

class Bio extends Component {
  render () {
    return (
      <div className="backgroundForMobile">
        <h1>Bio</h1>
        <div className="info1">
          <img alt="Stefanie" className="bioPhoto me" src={me}/>
          <p className="bioParagraph1">
            Hailing from the great city of Memphis in Tennessee, Stefanie has interests ranging from good barbeque to listening to live blues and jazz. Her passion for education, the arts, and sciences began in early life during volunteer work, exploring the outdoors through hiking, biking, swimming, and climbing.
          </p>
          <p className="bioParagraph2">
          After graduating from University of North Texas in 2012, she subbed in LISD and GCISD and then taught Art 1 at The Colony High School for two years. After discovering her passion for code, she left education and joined The Iron Yard, where she specialized in React/ Redux and Alexa applications. She is now a full-stack software engineer for Dallas-based Tradestation and a TA for SMU's coding bootcamp.
          </p>
        </div>
        <img alt="Daniel the cat" className="bioPhoto cat" src={cat}/>
        <div className="info2">
          <p className="bioParagraph bioParagraph3">
            Currently, Stefanie lives in a cozy spot in the Dallas area, living with her cat, Daniel (shown above), her boyfriend, and a roomate. On weekends, she codes, paints, and finds time to practice digital art. She frequents tech meetups, makerspaces, craft fairs, animation, gaming, and board game conventions, curio shops and book stores, and museums around town.
          </p>
        </div>
      </div>
    )
  }
}
export default Bio;
