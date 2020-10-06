import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen111767Navigator from '../features/BlankScreen111767/navigator';
import BlankScreen011765Navigator from '../features/BlankScreen011765/navigator';
import BlankScreen211763Navigator from '../features/BlankScreen211763/navigator';
import BlankScreen111760Navigator from '../features/BlankScreen111760/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen111767: { screen: BlankScreen111767Navigator },
BlankScreen011765: { screen: BlankScreen011765Navigator },
BlankScreen211763: { screen: BlankScreen211763Navigator },
BlankScreen111760: { screen: BlankScreen111760Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
