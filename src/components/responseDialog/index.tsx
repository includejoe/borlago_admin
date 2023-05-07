import { SetStateAction } from "react";
import { MdError, MdCheckCircle } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

import { Wrapper } from "./styles";

interface ResponseDialogProps {
  type: string;
  message: string;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const ResponseDialog: React.FC<ResponseDialogProps> = ({
  type,
  message,
  show,
  setShow,
}) => {
  const close = () => {
    setShow(false);
  };

  const error = (
    <>
      <MdError className="icon error" />
      <p>{message}</p>
      <IoMdCloseCircle className="icon close" onClick={close} />
    </>
  );

  const success = (
    <>
      <MdCheckCircle className="icon success" />
      <p>{message}</p>
      <IoMdCloseCircle className="icon close" onClick={close} />
    </>
  );

  return (
    <Wrapper show={show} error={type === "error"}>
      {type === "error" ? error : success}
    </Wrapper>
  );
};

export default ResponseDialog;
