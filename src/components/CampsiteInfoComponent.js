import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments) { //if argument comments contain something (as opposed to nothing which would evaluate to falsy) enter loop, otherwise return a blank <div>.
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => ( //Argument "comments" is an array from campsites.js. It is made available/passed into this function by the render function/method below.  JSX can only accept one return value from the .map loop so to make the comment.text and comment.author appear on different lines, they must be wrapped in an outer <div> with <p> and line break <br/> to provide proper spacing. Multiple <div>s can be used around the comment.text and comment.date, but they must be in one outer return <div> (spacing is not as nice with this method).
            <div key={comment.id}>
              <p>{comment.text} <br /> --{comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}</p>
            </div>
          ))}
        </div>
      );
    }
    return (<div />);
  }

  render() {
    if (this.props.campsite) {
      return (
        <div className="row">
          {this.renderCampsite(this.props.campsite)}{" "}
          {this.renderComments(this.props.campsite.comments)} {/*This is passing the "comments" array from the campsites.js file into the renderComments method/function. "comments" array is being made available as "props" to this CampsiteInfoComponent.js file because the CampsiteInfo component is called with an attribute named "campsite" inside the JSX tag in the DirectoryComponent.js file, which passes it as "props" to this file.*/}
        </div>
      );
    }
    return (<div />);
  }
}

export default CampsiteInfo;
