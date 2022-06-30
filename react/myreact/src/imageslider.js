import React from "react";

export class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        "https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=620&quality=85&auto=format&fit=max&s=045337444a23fba8351dbf0a1469c387",
        "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
      ],
      index: 0,
      visible: true,
    };
  }

  previousButton = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  nextButton = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  render() {
    return (
      <div>
        <h2> below are images: </h2>
        <img
          src={this.state.images[this.state.index]}
          alt="An array of images"
        />
        <button onClick={this.previousButton}>Previus Button</button>
        <button onClick={this.nextButton}>Next Button</button>
      </div>
    );
  }
}
