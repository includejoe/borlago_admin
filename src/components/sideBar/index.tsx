import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdTrash, IoMdChatboxes } from "react-icons/io";
import { MdLogout, MdGroup, MdPerson, MdSettings } from "react-icons/md";

import ConfirmationModal from "@components/modals/confirmationModal";
import { useAuthContext } from "@/src/contexts/authContext";
import { useSideBarContext } from "@contexts/sideBarContext";
import { SideBarWrapper, List, Link, Logout } from "./styles";

const SideBar = () => {
  const { isShowing } = useSideBarContext();
  const { logout } = useAuthContext();
  const { t } = useTranslation();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  return (
    <>
      <ConfirmationModal
        setShowModal={setShowLogoutConfirmation}
        show={showLogoutConfirmation}
        message={t("sideBar.confirmLogout")}
        yesAction={() => {
          logout();
        }}
      />
      <SideBarWrapper isShowing={isShowing}>
        <List>
          <li>
            <Link to="/collectors/">
              <MdPerson className="icon" />
              {t("sideBar.collectors")}
            </Link>
          </li>

          <li>
            <Link to="/units/">
              <MdGroup className="icon" />
              {t("sideBar.collectorUnits")}
            </Link>
          </li>

          <li>
            <Link to="/wcrs/">
              <IoMdTrash className="icon" />
              {t("sideBar.wcr")}
            </Link>
          </li>

          <li>
            <Link to="/chats/">
              <IoMdChatboxes className="icon" />
              {t("sideBar.chat")}
            </Link>
          </li>

          <li>
            <Link to="/settings/">
              <MdSettings className="icon" />
              {t("sideBar.settings")}
            </Link>
          </li>

          <li>
            <Logout onClick={() => setShowLogoutConfirmation(true)}>
              <MdLogout className="icon" />
              {t("sideBar.logout")}
            </Logout>
          </li>
        </List>
      </SideBarWrapper>
    </>
  );
};

export default SideBar;
