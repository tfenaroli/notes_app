import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './components/HomeScreen'
import NoteScreen from './components/NoteScreen'

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HomeScreen">
				<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'My Notes' }} />
				<Stack.Screen name="NoteScreen" component={NoteScreen} options={{ title: 'My Note' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
