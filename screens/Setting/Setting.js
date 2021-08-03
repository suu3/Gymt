import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const Width = Dimensions.get('window').width;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin: 10px 10px;
  margin-bottom: 20px;
`;
const Container = styled.View`
  padding: 0 20px;
  padding-top: 20px;
  background-color: white;
  width: 100%;
  height: 100%;
`;
const BG = styled.Image`
  width: ${Width / 2.5};   
  height: ${Width / 2.5};
  border-radius: 50%;
  border: 2px solid black;
  margin-bottom: 20px;
`;

const Edit = styled.View``;
const MyPost= styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PostBox= styled.View`
  border: 1px solid grey;
`;

const PostColumn= styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  border: 1px solid grey;
`;

export default function Settings() {
  const [password, setPassword] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  const [selectedGun, setSelectedGun] = useState();
  const [selectedDo, setSelectedDo] = useState();

  return (
    <Container>
      <Edit>
        <View >
          <Title>내 정보</Title>
        </View>
        <View style={styles.settingForm}>
        <BG source={require('../../image/user.png')}></BG>
        <View stlye={styles.formColumn}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>비밀번호 변경
              <Feather style={styles.icon} name="edit" size={18} color="black" />
            </Text>
            <TextInput
              value={password}
              placeholder="********"
              onChangeText={setPassword}
              style={styles.formInput}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.formElement}>
            <Text style={styles.formLabel}>위치
              <Feather style={styles.icon} name="edit" size={18} color="black" />
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedCity}
              onValueChange={(itemValue) =>
                setSelectedCity(itemValue)
              }>
              <Picker.Item label="광양시" value="광양시" />
              <Picker.Item label="여주시" value="여주시" />
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={selectedGun}
              onValueChange={(itemValue) =>
                setSelectedGun(itemValue)
              }>
              <Picker.Item label="진도군" value="여주시" />
              <Picker.Item label="장흥군" value="장흥군" />
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={selectedDo}
              onValueChange={(itemValue) =>
                setSelectedDo(itemValue)
              }>
              <Picker.Item label="하당동" value="하당동" />
              <Picker.Item label="여청동" value="여청동" />
              <Picker.Item label="쌍봉동" value="쌍봉동" />
            </Picker>
          </View>
        </View>
        </View>
      </Edit>
      <MyPost>
        <Text style={styles.semiTitle}>내가 쓴 글</Text>
        <PostBox>
          <PostColumn>
            <Text style={styles.numColumn}>번호</Text>
            <Text>제목</Text>
          </PostColumn>
          <PostColumn>
            <Text style={styles.numColumn}>1</Text>
            <Text>나주 피트니스에서 농구 같이 하실 분!</Text>
          </PostColumn>
        </PostBox>
      </MyPost>
    </Container>
  );
};

const styles = StyleSheet.create({
  numColumn: {
    width: '20%'
  },
  semiTitle: {
    fontWeight: 600,
    margin: 15,
    fontSize: 20
  },
  icon: {
    marginLeft: 3
  },
  settingForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    marginBottom: 20
  },
  formLabel: {
    fontWeight: 600,
    display:'flex',
    alignItems: 'center'
  },
  formInput: {
    marginTop: 5,
    height: 35,
    minWidth: 200,
    borderRadius:10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 13
  },
  picker: {
    padding: 8,
    borderRadius: 10,
    marginTop: 5
  }
});
