import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class ResultsFeed extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <Card>
          <CardHeader 
            title="they all do very bad things. It should be called 'Badfellas'"
            subtitle="by Crispin Smith"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}> 
            There is nothing 'Good' about the 'fellas' in this movie. 
          </CardText>
        </Card>


        <Card>
          <CardHeader 
            title="they all do very bad things. It should be called 'Badfellas'"
            subtitle="by Crispin Smith"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}> 
            There is nothing 'Good' about the 'fellas' in this movie. 
          </CardText>
        </Card>


        <Card>
          <CardHeader 
            title="they all do very bad things. It should be called 'Badfellas'"
            subtitle="by Crispin Smith"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}> 
            There is nothing 'Good' about the 'fellas' in this movie. 
          </CardText>
        </Card>


        <Card>
          <CardHeader 
            title="they all do very bad things. It should be called 'Badfellas'"
            subtitle="by Crispin Smith"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}> 
            There is nothing 'Good' about the 'fellas' in this movie. 
          </CardText>
        </Card>


        <Card>
          <CardHeader 
            title="they all do very bad things. It should be called 'Badfellas'"
            subtitle="by Crispin Smith"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}> 
            There is nothing 'Good' about the 'fellas' in this movie.  
          </CardText>
        </Card>
      </div>
    )
  }
}

export default ResultsFeed;