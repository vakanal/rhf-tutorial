import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  subTitle: string;
  title: string;
  text?: string;
};

const FormLayout: FC<Props> = ({ children, subTitle, text, title }) => {
  return (
    <>
      <h2 className="h4 mb-2">{title}</h2>
      <p className="text-muted mb-4">{subTitle}</p>
      {text && <p className="mb-4">{text}</p>}
      <section aria-label="Form content">
        {children}
      </section>
    </>
  );
};

export default FormLayout;
