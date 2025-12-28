import type { FC } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
};

const MainForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    },
  });

  const onSubmitForm = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form noValidate validated={isValid} onSubmit={handleSubmit(onSubmitForm)}>
      <fieldset>
        <legend>Datos de contacto</legend>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="firstName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              {...register("firstName", { required: "Firstname is required" })}
            />
            <Form.Text muted>{errors.firstName?.message}</Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="lastName">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: "Lastname is required" })}
            />
            <Form.Text muted>{errors.lastName?.message}</Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="age">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              {...register("age", {
                required: "Age is required",
                valueAsNumber: true,
              })}
            />
            <Form.Text muted>{errors.age?.message}</Form.Text>
          </Form.Group>
        </Row>

        <Button type="submit">Submit form</Button>
      </fieldset>
    </Form>
  );
};

export default MainForm;
