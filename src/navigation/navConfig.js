
import { DrawerNavigator  } from 'react-navigation';
import Profile from '../components/screens/Profile';
import Home from '../components/screens/Home';
import Gallery from "../components/screens/Gallery";
import TodoContainer from "../components/screens/Todo/TodoContainer";

const RootStack = DrawerNavigator ({
    Home: { screen: Home },
    Profile: { screen: Profile },
    Gallery: { screen: Gallery },
    Todo: { screen: TodoContainer },
  },
  {
    initialRouteName: 'Todo',
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#2f8b8c',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  }
);

export default RootStack;