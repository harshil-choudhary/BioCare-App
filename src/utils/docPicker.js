
  export async function docPicker(){
   return new Promise((res, rej) =>
    CameraRoll.getPhotos(params)
      .then(data => {
        const assets = data.edges;
        const photos = assets.map(asset => asset.node.image);
           this.setState({ photos });
           res({ photos });
      })
      .catch(rej)
  );
  }  