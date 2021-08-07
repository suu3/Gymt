import { NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Inputs from "./inputFormat"
  
export default function WritingScreen({navigation})
  {
    const obj={
      sports :"",
      location :"",
      id:"",
      date :"",
      title :"",
      contents:""
    }
  
    const [sports,setSports]=useState("");
    const [location,setLocation]=useState("");
    const [id,setId]=useState("");
    const [title,setTitle]=useState("");
    const [contents,setContents]=useState("");
    const handleSelects=(label,value)=>{
     
      if(label==="종목"){
       setSports(value);
       obj.sports=value;
     } 
     else{
       setLocation(value);
       obj.location=value;
     }
    }
    
    const handle=(event)=>{
      switch(event.target.name){
        case "titleInput" :{
          setTitle(event.target.value);
          obj.title=event.target.value;
          break;
        }
        case "contentsInput" :{
          setContents(event.targetvalue);
          obj.contents=event.target.value;
          break;
        }
        case "idInput" :{
          setId(event.targetvalue);
          obj.id=event.target.value;
          break;
        }
      }
    }
  
  
    const submit =()=>{
      return(navigation.navigate("wh"))
    }
    
    return(
      <NativeBaseProvider>
         <ScrollView>
      <Inputs data={obj}
              handle={handle}
              handleSelects={handleSelects}
             submit={submit}
                />
           </ScrollView> 
        </NativeBaseProvider>
    )
    
  }