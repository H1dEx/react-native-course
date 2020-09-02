import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {TodoItem} from "./src/TodoItem";
import {FlatList} from "react-native";

export default function App() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now().toString(),
            text
        }
        setTodos((prev) => [...prev, newTodo])
    }
    
    return (
        <View>
            <Navbar title={'New message from props!! Wohoo!'}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                        data={todos}
                        renderItem={({item})=><TodoItem text={item.text}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 30
    }
});
