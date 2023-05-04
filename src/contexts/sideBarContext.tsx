import { createContext, useContext, useReducer } from "react";

interface SideBarStateInterface {
  isShowing: boolean;
}

interface SideBarActionInterface {
  type: "TOGGLE_SIDEBAR";
}

interface SideBarContextInterface extends SideBarStateInterface {
  toggleSideBar: () => void;
}

const initialState: SideBarStateInterface = {
  isShowing: false,
};

if (localStorage.getItem("sideBar")) {
  if (localStorage.getItem("sideBar") === "show") {
    initialState.isShowing = true;
  } else {
    initialState.isShowing = false;
  }
}

function themeReducer(
  state: SideBarStateInterface,
  action: SideBarActionInterface
): SideBarStateInterface {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        isShowing: !state.isShowing,
      };
    default:
      return state;
  }
}

const SideBarContext = createContext<SideBarContextInterface>({
  isShowing: initialState.isShowing,
  toggleSideBar: () => null,
});

// eslint-disable-next-line
export function useSideBarContext() {
  return useContext<SideBarContextInterface>(SideBarContext);
}

export function SideBarContextProvider(props: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  function toggleSideBar(): void {
    state.isShowing
      ? localStorage.setItem("sideBar", "show")
      : localStorage.setItem("sideBar", "!show");

    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  }

  return (
    <SideBarContext.Provider
      value={{
        isShowing: state.isShowing,
        toggleSideBar,
      }}
      {...props}
    />
  );
}
