import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { toast, Toaster, ToastBar } from "react-hot-toast";
// import themeCreator from "config/theme";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "Open Sans",
        "Source Sans Pro",
        "Lora",
        "Lato",
        "Georgia",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRouter />
        <Toaster
          position="top-right"
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              padding: "16px",
            },
            success: {
              style: {
                color: "green",
              },
            },
            error: {
              style: {
                color: "#713200",
              },
            },
          }}
        >
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {message}
                  {t.type !== "loading" && (
                    <button
                      style={{ border: "none" }}
                      onClick={() => toast.dismiss(t.id)}
                    >
                      {icon}
                    </button>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
      </div>
    </ThemeProvider>
  );
}

export default App;
