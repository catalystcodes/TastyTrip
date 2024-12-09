import { NavigationContainer } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { persistor, store } from "../../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "../../context";
import { PaperProvider } from "react-native-paper";

const AppManager = ({ children }: { children: ReactNode }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <PaperProvider> */}
          <AuthProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <StatusBar backgroundColor="black" />
                {children}
              </NavigationContainer>
            </SafeAreaProvider>
          </AuthProvider>
          {/* </PaperProvider> */}
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default AppManager;
