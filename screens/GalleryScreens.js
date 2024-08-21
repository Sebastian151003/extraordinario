import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Image, Text, StyleSheet } from 'react-native';

export default function GalleryScreen({ navigation }) {
  const [number, setNumber] = useState('');
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const fetchedCharacters = [];
    for (let i = 0; i < number; i++) {
      const id = Math.floor(Math.random() * 150) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      fetchedCharacters.push({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
        ability: data.abilities[0].ability.name,
      });
    }
    setCharacters(fetchedCharacters);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Introduzca un número"
        value={number}
        onChangeText={setNumber}
        style={styles.input}
      />
      <Button title="Obtener personaje" onPress={fetchCharacters} />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>Name: {item.name}</Text>
            <Text>Height: {item.height}</Text>
            <Text>Weight: {item.weight}</Text>
            <Text>Ability: {item.ability}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  card: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
});