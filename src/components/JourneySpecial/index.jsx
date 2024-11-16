import { useState } from "react";
import { Layout } from "../../Layout";
import { FormAdd } from "./formAdd"; // Assuming this is the correct name of your form component

export const JourneySpecial = () => {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(!showForm); // Show the form when the button is clicked
  };

  return (
    <Layout>
      <button onClick={handleButtonClick}>Show Form</button>
      {showForm && <FormAdd />}
    </Layout>
  );
};
