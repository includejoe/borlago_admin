import { useThemeContext } from "../../contexts/themeContext";
import { PageContainer } from "../../commonStyles";

const HomePage = () => {
  const { toggleTheme } = useThemeContext();

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <PageContainer>
      <h1>BorlaGo Administrator Dashboard</h1>
      <h1>Home Page</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </PageContainer>
  );
};

export default HomePage;
