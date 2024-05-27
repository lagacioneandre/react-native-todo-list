import * as SplashScreen from 'expo-splash-screen';
import { App } from './pages/App';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <App />
  );
}
