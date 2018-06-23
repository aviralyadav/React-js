import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlace from './src/screens/FindPlace/FindPlace';
import SharePlace from './src/screens/SharePlace/SharePlace';
import configurationStore from './src/store/configurationStore';
import placeDetail from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configurationStore();


/// register component
Navigation.registerComponent("awesome-ui.AuthScreen", 
  () => AuthScreen, 
  store, 
  Provider
);
Navigation.registerComponent("awesome-ui.FindPlace", 
  () => FindPlace, 
  store, 
  Provider
);
Navigation.registerComponent("awesome-ui.SharePlace", 
  () => SharePlace, 
  store, 
  Provider
);
Navigation.registerComponent("awesome-ui.PlaceDetailScreen",
  () => placeDetail,
  store,
  Provider
);
Navigation.registerComponent("awesome-ui.SideDrawer",
  () => SideDrawer
);

////start new application navigation
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-ui.AuthScreen",
    title: "Login"
  }
});

