import "./gesture-handler";
import "./global.css";

import AppManager from "./src/components/organisms/AppManager";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <AppManager>
      <AppRoutes />
    </AppManager>
  );
}
