
import { createStackNavigator  } from 'react-navigation';
import Profile from '../components/screens/Profile';
import Home from '../components/screens/Home';
import Gallery from "../components/screens/Gallery";
import TodoContainer from "../components/screens/Todo/TodoContainer";

const RootStack = createStackNavigator ({
    Home: { screen: Home },
    Profile: { screen: Profile },
    Gallery: { screen: Gallery },
    Todo: { screen: TodoContainer },
  },
  {
    initialRouteName: 'Todo',
  }
);

export default RootStack;