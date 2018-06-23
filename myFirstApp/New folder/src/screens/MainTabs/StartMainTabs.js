import { Navigation } from 'react-native-navigation';

const mainTabs = () => { 
    Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-ui.FindPlace",
                    label: "Find Place",
                    title:"Find Place",
                    icon: require('../img/find.png'),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: require('../img/menu.png'),
                                title: 'Menu',
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-ui.SharePlace",
                    label: "Share Place",
                    title:"Share Place",
                    icon: require('../img/shareicon.png'),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: require('../img/menu.png'),
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "awesome-ui.SideDrawer"
                }
            }
        });
}
export default mainTabs;
    



