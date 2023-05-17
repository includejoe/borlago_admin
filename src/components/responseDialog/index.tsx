import { MdError, MdCheckCircle } from "react-icons/md";

import { Wrapper } from "./styles";

interface ResponseDialogProps {
  type: string;
  message: string;
  show: boolean;
}

const ResponseDialog: React.FC<ResponseDialogProps> = ({
  type,
  message,
  show,
}) => {
  const error = (
    <>
      <MdError className="icon error" />
      <p>{message}</p>
    </>
  );

  const success = (
    <>
      <MdCheckCircle className="icon success" />
      <p>{message}</p>
    </>
  );

  return <Wrapper show={show}>{type === "error" ? error : success}</Wrapper>;
};

export default ResponseDialog;
