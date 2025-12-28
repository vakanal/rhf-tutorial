import type { FC } from "react";
import MainLayout from "@layouts/MainLayout";
import FormLayout from "@layouts/FormLayout";
import WizardFormAlt from "@components/WizardFormAlt";
//import WizardForm from "@components/WizardForm";
//import MainForm from "@components/MainForm";

const App: FC = () => {
  return (
    <MainLayout footer="Created By AGR" header="RHF Tutorial">
      {/* 
      <FormLayout title="Main Form" subTitle="The first form">
        <MainForm />
      </FormLayout>
      */}
      <FormLayout title="Steps Form" subTitle="The steps form">
        <WizardFormAlt />
      </FormLayout>
    </MainLayout>
  );
};

export default App;
