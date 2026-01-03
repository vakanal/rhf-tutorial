import type { FC } from "react";
import MainLayout from "@layouts/MainLayout";
import FormLayout from "@layouts/FormLayout";
import WizardForm from "./form/wizard/WizardForm";
//import WizardFormAlt from "@components/WizardFormAlt";
//import WizardForm from "@components/WizardForm";
//import MainForm from "@components/MainForm";

const App: FC = () => {
  return (
    <MainLayout footer="Created By AGR" header="RHF Tutorial">
      {/* 
      <FormLayout title="Main Form" subTitle="The first form">
        <MainForm />
      </FormLayout>
      
      <FormLayout title="Steps Form" subTitle="The steps form">
        <WizardFormAlt />
      </FormLayout>
      */}

      <FormLayout title="Steps Form Alt" subTitle="The alternative steps form">
        <WizardForm />
      </FormLayout>
    </MainLayout>
  );
};

export default App;
