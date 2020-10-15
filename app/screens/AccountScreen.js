import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'
import colors from '../config/colors';
const items= [
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
     {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor: colors.secondary
        }
    }
]
function AccountScreen(props) {
    return (
       <Screen style={styles.screen}>
           <View style={styles.container}>
            <ListItem title="fred" subTitle="fred@gmail.com" image={require('../assets/jacket.jpg')}/>
           </View>
           
           <View style={styles.container}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.title}
                    renderItem={({item}) =>
                    <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}/>
                }
                ItemSeparatorComponent={ListItemSeparator}
                />
           </View>
           <ListItem title="Logout" IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}/>
       </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor: colors.colorLight
    }

})
export default AccountScreen;