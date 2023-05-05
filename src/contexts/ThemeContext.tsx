import { createContext, useContext, useReducer } from "react";

interface ThemeStateInterface {
  isDark: boolean;
}

interface ThemeActionInterface {
  type: "TOGGLE_THEME";
}

interface ThemeContextInterface extends ThemeStateInterface {
  toggleTheme: () => void;
}

const initialState: ThemeStateInterface = {
  isDark: false,
};

if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme") === "dark") {
    initialState.isDark = true;
  } else {
    initialState.isDark = false;
  }
}

const ThemeContext = createContext<ThemeContextInterface>({
  isDark: initialState.isDark,
  toggleTheme: () => null,
});

function themeReducer(
  state: ThemeStateInterface,
  action: ThemeActionInterface
): ThemeStateInterface {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        isDark: !state.isDark,
      };
    default:
      return state;
  }
}

// eslint-disable-next-line
export function useThemeContext() {
  return useContext<ThemeContextInterface>(ThemeContext);
}

export function ThemeContextProvider(props: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  function toggleTheme(): void {
    state.isDark
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");

    dispatch({
      type: "TOGGLE_THEME",
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark: state.isDark,
        toggleTheme,
      }}
      {...props}
    />
  );
}
