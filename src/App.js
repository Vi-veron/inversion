import "./App.css";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";
import AppRouter from "./components/AppRouter/AppRouter";
import { ToastProvider } from "@zendeskgarden/react-notifications";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import themeCreator from "config/theme";

function App() {
  const topProps = {
    style: { top: DEFAULT_THEME.space.base * 3 },
  };
  const bottomProps = {
    style: { bottom: DEFAULT_THEME.space.base * 3 },
  };
  const placementProps = {
    "top-start": topProps,
    top: topProps,
    "top-end": topProps,
    "bottom-start": bottomProps,
    bottom: bottomProps,
    "bottom-end": bottomProps,
  };
  return (
    <div className="App">
      <ThemeProvider focusVisibleRef={null} theme={themeCreator(DEFAULT_THEME)}>
        <ToastProvider placementProps={placementProps} zIndex={1}>
          <AppRouter />
        </ToastProvider>
      </ThemeProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClickgit
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
