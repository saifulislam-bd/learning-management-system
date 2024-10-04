import { Button } from "../ui/button";
import FormControls from "./formControls";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button type="submit" className="w-full mt-5" disabled={isButtonDisabled}>
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
