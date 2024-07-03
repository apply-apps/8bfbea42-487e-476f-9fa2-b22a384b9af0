// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';

const mockTranslations = {
    'hello': 'здравствуйте',
    'world': 'мир',
    'good morning': 'доброе утро',
    'good night': 'спокойной ночи',
    'thank you': 'спасибо',
    'apple': 'яблоко',
    'orange': 'апельсин',
    // Add more translations as needed
};

function translate(text, targetLanguage) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lowerCasedText = text.trim().toLowerCase();
            resolve(mockTranslations[lowerCasedText] || 'Translation not found');
        }, 500);
    });
}

export default function App() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = async () => {
        const result = await translate(text, 'ru');
        setTranslatedText(result);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Translator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text in English"
                value={text}
                onChangeText={setText}
            />
            <Button title="Translate" onPress={handleTranslate} />
            {translatedText ? (
                <View style={styles.translationBox}>
                    <Text style={styles.translationText}>{translatedText}</Text>
                </View>
            ) : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        padding: 10,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
    },
    translationBox: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
    },
    translationText: {
        fontSize: 18,
        color: '#333333',
    },
});