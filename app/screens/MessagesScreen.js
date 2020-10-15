import React, {useState} from 'react';
import { FlatList, StyleSheet, Platform, StatusBar, SafeAreaView, View } from 'react-native';
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';

const initialMessages =[
    {
        id:1,
        title:"T1",
        desc:"D1",
        image: require("../assets/jacket.jpg")
    },
    {
        id:2,
        title:"T2",
        desc:"D2",
        image: require("../assets/jacket.jpg")
    },
    {
        id:3,
        title:"T3",
        desc:"D3",
        image: require("../assets/jacket.jpg")
    },
    
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete= message =>{
        //Delete message from messages array
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages)
        //delete message from server
    }
    return (

        <SafeAreaView style={styles.screen}>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (<ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
            onPress={() => console.log()}
            renderRightActions={() => <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
        />
        )}
        ItemSeparatorComponent ={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>{
            setMessages([
                {
                    id:4,
                    title:"T4",
                    desc:"D4",
                    image: require("../assets/jacket.jpg")
                },
            ])
        }}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS == 'android'?StatusBar.currentHeight:0
    }
})

export default MessagesScreen;