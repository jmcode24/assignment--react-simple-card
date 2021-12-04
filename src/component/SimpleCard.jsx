import React from 'react';
import Image from './Image';
import Pic from '../images/Moana.jpg'
import Title from './Title';
import Description from './Description';

class SimpleCard extends React.Component {
  render() {
    return (
      <div>
      <div className="container">
        <div className="row no-gutters mt-4 cont-border">
          <div className="col-md-4">
            <Image name={Pic}/>
          </div>

          <div className="col-md-8">
            <div className="p-4 bg-dark text-success">
              <Title name="A Snippet About The Image" />
            </div>

            <div className="text-white bg-info p-2">
              <Description name={<p>On your left hand side is a picture from the disney produced anime Movie titled <strong>Moana</strong>. The movie got it name from one of the leading characters who is a very adventurous and brave girl called Moana, the daughter of a chief living on a Polynesian island in ancient times. Her grandmother told her about a mother island that was responsible for keeping all islands alive which was made possible through the heart of the mother island. A demigod Maui steals the heart of the mother island as a stunt to get attention from his parents which caused the islands to start dying off because the mother island did not have her heart to keep the islands alive. Moana was selected and tasked with making the demigod go back and return the heart of the mother island to it position so that the islands can be restored.</p>} />
            </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
};

export default SimpleCard;