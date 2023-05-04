import { useTranslation } from "react-i18next";

import { Button } from "@/src/components/button";
import { PageContainer } from "@src/commonStyles";
import { useThemeContext } from "@/src/contexts/themeContext";

const HomePage = () => {
  const { t } = useTranslation();
  const { toggleTheme } = useThemeContext();

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <PageContainer>
      <Button onClick={changeTheme}>{t("btn.theme")}</Button>
    </PageContainer>
  );
};

export default HomePage;
