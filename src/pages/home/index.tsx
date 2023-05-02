import { Button } from "@/src/components/button";
import { PageContainer } from "@src/commonStyles";
import { useThemeContext } from "@/src/contexts/themeContext";

const HomePage = () => {
  const { toggleTheme } = useThemeContext();

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <PageContainer>
      <Button onClick={changeTheme}>TOGGLE THEME</Button>
    </PageContainer>
  );
};

export default HomePage;
