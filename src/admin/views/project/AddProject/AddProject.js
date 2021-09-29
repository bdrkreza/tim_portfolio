import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { CardBody, Col, Container, FormGroup, Row } from "reactstrap";
import "./addProject.scss";
import DynamicContent from "./DynamicContent";
import FileUpload from "./FileUpload";

export default function AddProject() {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [imgFile, setImgFile] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  console.log(imgFile);

  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };

  const handleImageChange = (e) => {
    setMultipleFiles(e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("qty", data.qty);
    const featureJson = JSON.stringify(data.users);
    formData.append("feature", featureJson);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("photos", multipleFiles[i]);
    }

    setLoading(true);

    fetch("http://localhost:5000/api/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Create service successfully");
        }
        setLoading(false);
      });
    reset();
  };

  return (
    <div className="header bg-gradient-info pb-8  pt-md-8">
      <Container fluid>
        <div className="header-body">
          {/* Card stats */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg="6">
                <div className="heading">Project Title</div>
                <CardBody>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <fieldset class="form-fieldset ui-input __third">
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Enter Project Name"
                          />
                          <label for="name">
                            <span data-text="name">Feature One</span>
                            {errors.name && (
                              <span className="text-danger">is required</span>
                            )}
                          </label>
                        </fieldset>
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <fieldset class="form-fieldset ui-input __third">
                          <input
                            {...register("qty", { required: true })}
                            type="number"
                            placeholder="Enter Project quantity"
                          />
                          <label for="qty">
                            <span data-text="qty">project quantity</span>
                            {errors.qty && (
                              <span className="text-danger">is required</span>
                            )}
                          </label>
                        </fieldset>
                      </FormGroup>
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
                </CardBody>
              </Col>

              <Col lg="6">
                <FileUpload
                  handleImageChange={handleImageChange}
                  selectedFiles={selectedFiles}
                  control={control}
                />
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
}
