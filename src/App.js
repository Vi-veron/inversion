import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "config/theme";

function App() {
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
                      style={{ border: "none", cursor: "pointer" }}
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
