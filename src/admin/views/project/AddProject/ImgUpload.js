import React from "react";

export default function ImgUpload({ MultipleFileChange, setTitle }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="enter title for your gallery"
        className="form-control"
      />

      <div class="box">
        <div class="js--image-preview">
          <img src="" alt="" />
        </div>
        <div class="upload-options">
          <label>
            <input
              type="file"
              multiple
              class="image-upload"
              onChange={(e) => MultipleFileChange(e)}
              accept="image"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
