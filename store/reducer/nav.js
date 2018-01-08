import { NavigationActions } from 'react-navigation';
import { LoginScreen } from '../../routes';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
const AppNavigator = StackNavigator(LoginScreen);

const initState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

export default (state = initState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
