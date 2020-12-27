import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppText } from '../components'
import { AntDesign, Entypo } from '@expo/vector-icons';
import colors from '../config/colors'

export default function Churchscreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.visitflanders.com/nl/binaries/024421fd-4d5c-4d79-9f06-ab5d91523e42_tcm14-132143.jpg' }} style={styles.image} />
      <View style={styles.containerInfo}>
        <AppText style={styles.title}>Sint-Baafs</AppText>
        <AppText style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh felis, auctor et tempus eu, luctus eget lacus.</AppText>
      </View>
      <ScrollView style={styles.links}>
        <View style={styles.containerLinks}>
          <View style={styles.block}>
            <AntDesign name="infocirlce" size={34} color={colors.gold} />
            <AppText style={styles.info}>Info en regels over deze kerk</AppText>
          </View>
          <View style={styles.block}>
            <Entypo name="camera" size={34} color={colors.gold} />
            <AppText style={styles.info}>QR code scanner</AppText>
          </View>
          <View style={styles.block}>
            <Entypo name="map" size={34} color={colors.gold} />
            <AppText style={styles.info}>Grondplan van deze kerk</AppText>
          </View>
          <View style={styles.block}>
            <Entypo name="calendar" size={34} color={colors.gold} />
            <AppText style={styles.info}>Evenementen</AppText>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    flex: 1,
  },
  containerInfo: {
    marginRight: 20,
    marginLeft: 20,
  },
  containerLinks: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 40,
  },
  block: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  links: {
    backgroundColor: colors.lightgrey,
    marginTop: 30,
    height: 'auto',
    borderRadius: 20,
    padding: 10,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 30,
    color: colors.white,
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 140,
    color: colors.white,
    marginLeft: 30,
  },
  image: {
    width: '100%',
    height: 375,
    borderRadius: 20,
    marginBottom: 15,
  },
})