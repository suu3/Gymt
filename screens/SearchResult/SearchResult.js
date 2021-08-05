import React, {useEffect} from "react";
import styled from "styled-components/native";
import Title from "../../components/Title";
import { Button,TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import Search from '../Search/Search';
import { useNavigation } from "@react-navigation/native";

// const { width: WIDTH } = Dimensions.get("window");

const TextBox = styled.Text`
    display: flex;
    align-items: center;
`;
const Text = styled.Text`
    margin-left: 5px;
`;

const SemiTitle = styled.Text`
    font-weight: 600;
    margin-bottom: 5px;
`;
const Container = styled.View`
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

const BG = styled.Image`
  margin: 0px 20px;  
  margin-top: 15px;
  border-radius: 10px;
  width: width;
  height: 220px;
  margin-bottom: 10px;
`;

const Result_content = styled.View`
    padding: 0 20px;
    margin-bottom: 20px;
`;



export default function SearchResult({history}){
  const navigation = useNavigation();
  // const goBack= () =>{
  //   history.goBack();
  // };
  return(
    <div>
      {/* <Container>
      <Button onPress={() => navigation.navigate("Search")} title="다시 검색">
      <Button onClick={goBack} title="다시 검색">
        </Button>
      </Container> */}
      <Container>
        <AntDesign name="rightcircle" size={20} color="black" />
        <Title title={"체육관 결과"} />
      </Container>
      <BG source={'https://www.phsisul.org/File/Download/a13a0a4d7fe11880a27a3cee83f239fd'} />
      <Result_content>
        <SemiTitle>경상북도 포항시 오천체육문화타운</SemiTitle>
        <TextBox><FontAwesome name="map-marker" size={18} color="black" /><Text>경북 포항시 남구 냉천로 580</Text></TextBox>
        <TextBox><FontAwesome name="phone" size={18} color="black" /><Text>054-280-9525</Text></TextBox>
        <TextBox><AntDesign name="clockcircle" size={15} color="black" /><Text>07:00 ~ 23:00</Text></TextBox>
        <TextBox><Feather name="check-square" size={15} color="black" /><Text>배드민턴, 탁구, 농구, 축구, 풋살</Text></TextBox>
        <TextBox><FontAwesome name="won" size={15} color="black" /><Text>부분 유료</Text></TextBox>
      </Result_content>
    </div>
  );
    
  };