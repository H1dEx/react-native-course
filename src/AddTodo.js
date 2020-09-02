import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native';

export function AddTodo(props) {
    const [formValue, setValue] = useState('')
    
    function pressHandler() {
        if (formValue.trim()) {
            props.onSubmit(formValue);
            setValue('');
        } else {
            Alert.alert('Field must not be empty')
        }
    }
    
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={text => setValue(text)}
                       value={formValue}
                       autoCapitalize='none'
                       autoCorrect={false}
            />
            <Button title={'Create'} onPress={pressHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderRadius: 5,
        padding: 7,
        borderBottomColor: "navy",
        borderBottomWidth: 2,
        borderStyle: 'solid'
    }
})