import React from "react";
import ImageUploader from "react-images-upload";

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  render() {
    console.log("this.state: ", this.state);
    const hasPictures = this.state.pictures.length;
    return (
      <div>
        {hasPictures ? (
          <img src={this.state.pictures[0].name} alt="added" />
        ) : (
          <ImageUploader
            withIcon={true}
            buttonText="Add a Photo"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        )}
      </div>
    );
  }
}

export default Uploader;
