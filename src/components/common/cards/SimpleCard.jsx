import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card, Button, Icon } from 'react-native-elements';
import Colors from '../../../constants/Colors';

const SimpleCard = ({title, imagePath, description}) => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>{title}</Card.Title>
        <Card.Divider />
        <Image
          style={styles.image}
          source={imagePath}
        />
        <Text style={styles.description}>
          {description}
        </Text>
      </Card>
    </View>
  );
}

export default SimpleCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
    paddingHorizontal: 10,
    padding: 0
  },
  cardTitle: {
    fontSize: 14,
    color: Colors.black,
    paddingTop: 10,
    paddingBottom: 0
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    padding: 0
  },
  description: {
    fontSize: 16,
    color: '#555',
    margin: 0
  }
})