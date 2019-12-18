import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import firebase from "./OAuth/firebase";

const Uploader = () => {
  const [imageUrl, setUrl] = useState("");
  const ref = firebase.storage().ref();

  const fileChangedHandler = e => {
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
