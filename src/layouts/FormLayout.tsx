import type { FC, ReactNode } from "react";
import Card from "react-bootstrap/Card";

type Props = {
  children: ReactNode;
  subTitle: string;
  title: string;
  text?: string;
};

const FormLayout: FC<Props> = ({ children, subTitle, text, title }) => {
  return (
    <>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-4 text-muted">{subTitle}</Card.Subtitle>
      {text && <Card.Text>{text}</Card.Text>}
      {children}
    </>
  );
};

export default FormLayout;
