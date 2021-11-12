import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent.js';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

 

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite} /> 
                {/*Assigns the selectedCampsite object that is in the local state 
                to the attribute named "campsite". Because the attribute named "campsite" 
                is in the CampsiteInfo react component JSX tag, it is now available to be passed
                 to the CampsiteInfo component as "props" (properties)*/ }           
             </div>
        );
    }
}

export default Directory;