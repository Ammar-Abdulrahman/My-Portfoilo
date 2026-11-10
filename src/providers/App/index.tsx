import MainPage from "@Pages/index";
import { ThemeProvider } from "@Context/ThemeContext";
import "@Localization/i18n";

const App = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
