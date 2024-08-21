import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';

export default function CompareScreen() {
  const [character1, setCharacter1] = useState(null);
  const [character2, setCharacter2] = useState(null);
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');

  const fetchCharacter = async (id, setCharacter) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setCharacter({
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      height: data.height,
      ability: data.abilities[0].ability.name,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Introduzca el ID del primer personaje"
        value={id1}
        onChangeText={setId1}
        style={styles.input}
      />
      <Button title="Obten el primer personaje" onPress={() => fetchCharacter(id1, setCharacter1)} />

      <TextInput
        placeholder="Introduzca el ID del segundo personaje"
        value={id2}
        onChangeText={setId2}
        style={styles.input}
      />
      <Button title="Obtener segundo personaje" onPress={() => fetchCharacter(id2, setCharacter2)} />

      {character1 && character2 && (
        <View style={styles.comparison}>
          <View style={styles.card}>
            <Image source={{ uri: character1.image }} style={styles.image} />
            <Text>Name: {character1.name}</Text>
            <Text>Height: {character1.height}</Text>
            <Text>Ability: {character1.ability}</Text>
          </View>

          <View style={styles.card}>
            <Image source={{ uri: character2.image }} style={styles.image} />
            <Text>Name: {character2.name}</Text>
            <Text>Height: {character2.height}</Text>
            <Text>Ability: {character2.ability}</Text>
          </View>
        </View>
      )}
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
  comparison: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});