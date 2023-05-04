import {
  MdHome,
  MdLogout,
  MdGroup,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

import { useSideBarContext } from "@contexts/sideBarContext";
import { useTheme } from "@utils/theme";
import { SideBarWrapper, List, Link, Logout } from "./styles";

const SideBar = () => {
  const { isShowing } = useSideBarContext();
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <SideBarWrapper isShowing={isShowing}>
      <List>
        <li>
          <Link to="/">
            <MdHome className="icon" />
            {t("sideBar.home")}
          </Link>
        </li>

        <li>
          <Link to="/collectors/">
            <MdPerson className="icon" />
            {t("sideBar.collectors")}
          </Link>
        </li>

        <li>
          <Link to="/collector-units/">
            <MdGroup className="icon" />
            {t("sideBar.collectorUnits")}
          </Link>
        </li>

        <li>
          <Link to="/settings/">
            <MdSettings className="icon" />
            {t("sideBar.settings")}
          </Link>
        </li>

        <li>
          <Logout>
            <MdLogout color={theme.color.error} className="icon" />
            {t("sideBar.logout")}
          </Logout>
        </li>
      </List>
    </SideBarWrapper>
  );
};

export default SideBar;
