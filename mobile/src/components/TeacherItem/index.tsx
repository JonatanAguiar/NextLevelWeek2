import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                   style={styles.avatar}
                   source={{ uri: 'https://instagram.fpoa6-1.fna.fbcdn.net/v/t51.2885-19/s320x320/56168130_1033118103553298_3158838211577380864_n.jpg?_nc_ht=instagram.fpoa6-1.fna.fbcdn.net&_nc_ohc=v6d3-KGVB7cAX827CHb&oh=733b4da6731373881101f398e03dc735&oe=5F9BFBA7' }}
                />
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Jonatan Koroch de Aguiar</Text>
                <Text style={styles.subject}>Programação Java</Text>
            </View>
        </View>
    );
}

export default TeacherItem;