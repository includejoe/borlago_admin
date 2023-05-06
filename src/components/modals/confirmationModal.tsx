import { useRef, SetStateAction } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

import { Button } from "@components/button";
import { useTheme } from "@/src/utils/theme";
import { ModalContainer, ModalWrapper } from "./styles";

interface ConfirmationModalProps {
  show: boolean;
  message: string;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  yesAction: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  show,
  yesAction,
  setShowModal,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    config: {
      duration: 150,
    },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      setShowModal(false);
    }
  };

  const handleYes = () => {
    setShowModal(false);
    yesAction();
  };

  return show ? (
    <ModalContainer ref={ref} onClick={closeModal}>
      <animated.div style={animation}>
        <ModalWrapper>
          <h4 className="message-text">{message}</h4>

          <div className="buttons-area">
            <Button color={theme.color.error} onClick={handleYes}>
              {t("btn.yes")}
            </Button>
            <Button onClick={() => setShowModal(false)}>{t("btn.no")}</Button>
          </div>
        </ModalWrapper>
      </animated.div>
    </ModalContainer>
  ) : null;
};

export default ConfirmationModal;
