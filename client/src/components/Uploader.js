import React from "react";
import ImageUploader from "react-images-upload";
import firebase from "./OAuth/firebase";

const Uploader = () => {
  const ref = firebase.storage().ref();

  const fileChangedHandler = e => {
    console.log("e is: ", e[0]);
    console.log("e target is: ", e.target);

    const file = e[0];
    const name = +new Date() + "-" + file.name;
    const metadata = { contentType: file.type };

    const task = ref.child(name).put(file, metadata);
    task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => console.log("url is: ", url));
  };

  return (
    <div>
      <ImageUploader
        withIcon={true}
        buttonText="Add a Photo"
        onChange={fileChangedHandler}
        imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
        maxFileSize={5242880}
      />
    </div>
  );
};

export default Uploader;
// class Uploader extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { pictures: [] };
//     this.onDrop = this.onDrop.bind(this);
//   }

//   onDrop(picture) {
//     console.log("picture is: ", picture);
//     this.setState({
//       pictures: this.state.pictures.concat(picture)
//     });
//   }

//   fileChangedHandler = e => {
//     console.log("e is: ", e[0]);
//     console.log("e target is: ", e.target);

//     const file = e[0];
//     const name = +new Date() + "-" + file.name;
//     const metadata = { contentType: file.type };

//     const task = ref.child(name).put(file, metadata);
//     task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => console.log("url is: ", url));
//   };

//   render() {
//     console.log("this.state: ", this.state);
//     const hasPictures = this.state.pictures.length;
//     return (
//       <div>
//         {hasPictures ? (
//           <img src={this.state.pictures[0].name} alt="added" />
//         ) : (
//           <ImageUploader
//             withIcon={true}
//             buttonText="Add a Photo"
//             onChange={this.fileChangedHandler}
//             imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
//             maxFileSize={5242880}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default Uploader;
