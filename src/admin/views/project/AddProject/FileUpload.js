const FileUpload = ({ handleImageChange, selectedFiles }) => {
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img className="upimage" src={photo} alt="" key={photo} />;
    });
  };

  return (
    <div className="app">
      <div className="heading">Project Image</div>
      <div>
        <input
          type="file"
          id="file"
          multiple
          onChange={(e) => handleImageChange(e)}
        />
        <div className="file_label-holder">
          <label htmlFor="file" className="file_label">
            <i className="tim-icons icon-camera-18" />
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
    </div>
  );
};

export default FileUpload;
