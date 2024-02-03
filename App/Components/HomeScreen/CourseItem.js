import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function CourseItem({ item }) {
  return (
    <View style={{ padding: 10, backgroundColor: Colors.WHITE, marginRight: 15, borderRadius: 15 }}>
      <Image source={{ uri: item?.assets?.url }} style={{ width: 210, height: 120, borderRadius: 15 }} />

      <View style={{ padding: 7 }}>
        <Text style={{ fontSize: 17 }}>{item.name}</Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
          <Feather name="book-open" size={18} color="black" />
          <Text>{item?.chapters?.length} Chap</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
          <Entypo name="time-slot" size={18} color="black" />
          <Text>{item?.time} Temps</Text>
        </View>
      </View>

      <View>
        <Text style={{ marginTop: 5, color: Colors.PRIMARY }}>{item.price === 0 ? 'Gratuit' : item.price}</Text>
      </View>
    </View>
  );
}
