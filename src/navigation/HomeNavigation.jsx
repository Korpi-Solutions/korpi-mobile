import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import PomodoroScreen from '../screens/PomodoroScreen';
import VideoScreen from '../screens/Videoscreen';

const Drawer = createDrawerNavigator();

export default function HomeNavigation() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: true }}
				/>
				<Drawer.Screen
					name="Pomodoro"
					component={PomodoroScreen}
				/>
				<Drawer.Screen
					name="Videos"
					component={VideoScreen}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
