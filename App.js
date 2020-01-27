import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsScreen'
import PhotoScreen from './src/screens/PhotoScreen'
import MoreInfoScreen from './src/screens/MoreInfoScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsScreen,
  Photo: PhotoScreen,
  MoreInfo: MoreInfoScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)