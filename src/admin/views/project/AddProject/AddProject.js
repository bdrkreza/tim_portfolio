import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { CardBody, Col, Container, Row } from "reactstrap";
import { multipleFilesUpload } from "Server/API";
import "./addProject.scss";
import DynamicContent from "./DynamicContent";
import FileUpload from "./FileUpload";

export default function AddProject() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [imgFile, setImgFile] = useState("");

  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };

  const handleImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImgFile((prevState) => [...prevState, newImage]);
    }

    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const UploadMultipleFiles = async (data) => {
    const formData = new FormData();
    formData.append("titile", data);
    for (let i = 0; i < imgFile.length; i++) {
      formData.append("img", imgFile[i]);
    }

    await multipleFilesUpload(formData, mulitpleFileOptions);
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      users: [{ feature: "", feature_2: "", tools: "" }],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    UploadMultipleFiles(data);
    reset();
  };

  return (
    <div className="header bg-gradient-info pb-8  pt-md-8">
      <Container fluid>
        <div className="header-body">
          {/* Card stats */}

          <Row>
            <Col lg="6">
              <div className="heading">Project Title</div>
              <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col lg="6">
                      <fieldset class="form-fieldset ui-input __first">
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          placeholder="Enter project name"
                        />
                        <label for="name">
                          <span data-text="name">Project Name</span>
                          {errors.name && (
                            <span className="text-danger ml-2">
                              is required
                            </span>
                          )}
                        </label>
                      </fieldset>
                    </Col>

                    <Col lg="6">
                      <fieldset class="form-fieldset ui-input __first">
                        <input
                          {...register("qty", { required: true })}
                          type="text"
                          placeholder="Enter Project quantity"
                          tabindex="0"
                        />
                        <label for="name">
                          <span data-text="quantity">Project Quantity</span>
                          {errors.qty && (
                            <span className="text-danger ml-2">
                              is required
                            </span>
                          )}
                        </label>
                      </fieldset>
                    </Col>
                  </Row>
                  <DynamicContent
                    register={register}
                    errors={errors}
                    useFieldArray={useFieldArray}
                    control={control}
                  />
                  <div class="form-footer">
                    <button class="btn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </CardBody>
            </Col>

            <Col lg="6">
              <FileUpload
                handleImageChange={handleImageChange}
                selectedFiles={selectedFiles}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
