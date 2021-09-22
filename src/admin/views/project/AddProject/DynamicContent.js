import React from "react";
import { Button, Col, FormGroup, Row } from "reactstrap";
export default function DynamicContent({
  register,
  errors,
  useFieldArray,
  control,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  return (
    <div>
      {fields.map((item, index) => (
        <div key={item.id}>
          <Row>
            <Col md="6">
              <FormGroup>
                <fieldset class="form-fieldset ui-input __third">
                  <input
                    {...register(`users.${index}.feature`, { required: true })}
                    type="text"
                    placeholder="Enter Project Feature"
                    defaultValue={item.feature}
                  />
                  <label for="feature">
                    <span data-text="feature">Feature One</span>
                    {errors.feature && (
                      <span className="text-danger">is required</span>
                    )}
                  </label>
                </fieldset>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <fieldset class="form-fieldset ui-input __third">
                  <input
                    {...register(`users.${index}.feature_2`, {
                      required: true,
                    })}
                    type="text"
                    placeholder="Enter project Feature Two"
                    defaultValue={item.feature_2}
                  />
                  <label for="Feature Two">
                    <span data-text="Feature">Featute Two</span>
                    {errors.feature_2 && (
                      <span className="text-danger">is required</span>
                    )}
                  </label>
                </fieldset>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <fieldset class="form-fieldset ui-input __third">
                  <input
                    key={item.id} // important to include key with field's id
                    {...register(`users.${index}.tools`, { required: true })}
                    type="text"
                    placeholder="Enter project Tools"
                    defaultValue={item.tools}
                  />

                  <label for="tools" className="tools d-flex ">
                    <span data-text="Tools">Tools</span>
                    {errors.tools && (
                      <span className="text-danger">is required</span>
                    )}
                    <button
                      onClick={() => remove(index)}
                      className="addremove bg-dark"
                    >
                      <i className="tim-icons icon-simple-remove text-danger" />
                    </button>
                  </label>
                </fieldset>
              </FormGroup>
            </Col>
          </Row>
        </div>
      ))}
      <div className="add_btn">
        <Button
          onClick={() =>
            append({ feature: "", feature_2: "", tools: "", file: "" })
          }
          className=""
        >
          Add
        </Button>
      </div>
    </div>
  );
}
