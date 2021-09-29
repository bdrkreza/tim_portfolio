const FileUpload = ({ handleImageChange, selectedFiles, control }) => {
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
          name="image"
          multiple
          onChange={(e) => handleImageChange(e)}
        />

        {/* <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              onChange={(e) => {
                field.onChange(e.target.files);
              }}
              multiple
            />
          )}
        /> */}

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
