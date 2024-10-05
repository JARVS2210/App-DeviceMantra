import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Colors from '../../../constants/Colors';

const SimpleCard = ({navigation, title, imagePath, description, isButtonEnabled, buttonName, navTarget }) => {
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
        <View style={[styles.cardButtonContainer, !isButtonEnabled ? {display:'none'} : {}]}>
          <Button 
            title={buttonName}
            onPress={() => {navigation.navigate(navTarget)}} // if button is enabled it must be provided the navigation link
            color={Colors.primary}
          />
        </View>
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
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 1,
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
    margin: 0,
    paddingVertical: 2,
    textAlign: 'justify'
  },
  cardButtonContainer: {
    paddingBottom: 10,
    paddingHorizontal: 20
  }
})