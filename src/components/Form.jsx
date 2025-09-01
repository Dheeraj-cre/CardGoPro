import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ onChange }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "Your Name",
      role: "Your Role",
      designation: "Designation",
      company: "Company Name",
      email: "your@email.com",
      phone: "123-456-7890",
      location: "Location", // ✅ fixed typo
      title: "Title"
    },
  });

  // Subscribe to changes instead of using values directly
  React.useEffect(() => {
    const subscription = watch((values) => {
      onChange(values); // ✅ fires only when form values change
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div className="form-box">
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit(() => {})}>
        {[
          "name",
          "role",
          "designation",
          "company",
          "email",
          "phone",
          "location",
          "title",
        ].map((field) => (
          <div key={field}>
            <label>{field}:</label>
            <input type="text" {...register(field)} />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Form;
