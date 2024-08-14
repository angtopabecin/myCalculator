import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import { useState } from 'react';


let value = '';
let resultfinish = 0;

export default function App() {

  const [result,setResult] = useState(Number); 
  const [firstNumber,setFirstNumber] = useState(Number);
  const [secondNumber,setSecondNumber] = useState(Number);
  const [logic,setLogic] = useState();
  const [textLogic,setTextLogic] = useState();
  const [minusBool,setMinusBool] = useState();

  

  const numberZero = () =>{
    if(value == null){
      value = '';
    }
    value +='0';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
       value = '-1';
      setResult(Number(value));
      setMinusBool(false);
    }
  }

  const numberOne = () => {
    if(value == null){
      value = 0;
    }
    value +='1';
    setResult(Number(value));
    console.log(value);+654
    if(minusBool == true){
      value = '-1';
      setResult(Number(value));
      setMinusBool(false);
    }
    
  }

  const numberTwo = () => {
    if(value == null){
      value = 0;
    }
    value +='2';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
      value = '-2';
      setResult(Number(value));
      setMinusBool(false);
    }
  }

  const numberThree = () => {
    if(value == null){
      value = '';
    }
    value +='3';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
       value = '-3';
      setResult(Number(value));
      setMinusBool(false);
    }
  }

  const clearDisplay = () =>{
    value = null;
    setResult(null);
    setResult('');
    setTextLogic(null);
    setTextLogic('');
    setFirstNumber(null);
    setFirstNumber('');
    setSecondNumber(null);
    setSecondNumber('');
    console.log(result);
    console.log(value);

  }

  const numberFour = () =>{
    if(value == null){
      value = '';
    }
    value +='4';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
       value = '-4';
      setResult(Number(value));
      setMinusBool(false);
    }
  }

  const numberFive = () =>{
    if(value == null){
      value = '';
    }
    value +='5';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
       value = '-5';
      setResult(Number(value));
      setMinusBool(false);
    }
  }

  const numberSix = () =>{
    if(value == null){
      value = '';
    }
    value +='6';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
      value = '-6';
     setResult(Number(value));
     setMinusBool(false);
   }
  }

  const numberSeven = () =>{
    if(value == null){
      value = '';
    }
    value +='7';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
      value = '-7';
     setResult(Number(value));
     setMinusBool(false);
   }
  }

  const numberEight = () =>{
    if(value == null){
      value = '';
    }
    value +='8';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
      value = '-8';
     setResult(Number(value));
     setMinusBool(false);
   }
  }

  const numberNine = () =>{
    if(value == null){
      value = '';
    }
    value +='9';
    setResult(Number(value));
    console.log(value);
    if(minusBool == true){
      value = '-9';
     setResult(Number(value));
     setMinusBool(false);
   }
  }

  const dotButton = () =>{
    value += '.';
    setResult(Number(value));
  }

  const plusButton = () =>{
    setFirstNumber(null);
    setLogic('plus');
    setTextLogic('+');
    setFirstNumber(Number(result));
    setResult(null);
    value = null;
  }

  const minusButton = () =>{
    setLogic('minus');
    setTextLogic('-');
    setFirstNumber(Number(result));
    setResult(null);
    value = null;
  }

  const divideButton = () =>{
    setLogic('divide');
    setTextLogic('/');
    setFirstNumber(Number(result));
    setResult(null);
    value = null;
  }

  const impactButton  = () =>{
    setLogic('impact');
    setTextLogic('x');
    setFirstNumber(Number(result));
    setResult(0);
    value = null;
  } 

  const hundredButton = () =>{
    setLogic('hundred');
    setTextLogic('%');
    setFirstNumber(Number(result));
    setResult(0);
    value = null;
  }

  const minusValueButton = () =>{
    setMinusBool(true);
  }

  const resultButton = () =>{
    
    switch(logic){
      case 'plus':
        if(result != null){
          setResult(null);
        }
        setSecondNumber(Number(value));
        setResult(Number(firstNumber + Number(value)));
      break;
      case 'minus':
        if(result != null){
          setResult(null);
        }
        setSecondNumber(Number(value));
        setResult(Number(firstNumber - Number(value)));
      break;
      case 'divide':
        if(result != null){
          setResult(null);
        }
        setSecondNumber(Number(value));
        setResult(Number(firstNumber / Number(value)));
      break;
      case 'impact':
        if(result != null){
          setResult(null);
        }
        setSecondNumber(Number(value));
        setResult(Number(firstNumber * Number(value)));
        value = null;
      break;
      case 'hundred':
        if(result != null){
          setResult(null);
        }
        setSecondNumber(Number(value));
        setResult(Number(firstNumber * Number(value) / 100));
        value = null;
      break;

    }
  }

 
  

  return (
    <View style={styles.mainContainer}>

      <View style={styles.textDisplayView}>
        <Text style={styles.textDisplay}>{result}</Text>
        <Text style={{color:'white',fontSize:15,top:'130%',right:'1.5%'}}>{firstNumber}{textLogic}{value}</Text>
      </View>

       
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberOne}>
          <Text style={{fontSize:25,color:'white'}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberTwo}>
          <Text style={{fontSize:25,color:'white'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberThree}>
          <Text style={{fontSize:25,color:'white'}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleLogic} onPress={clearDisplay}>
          <Text style={{fontSize:25,color:'white'}}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberFour}>
          <Text style={{fontSize:25,color:'white'}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberFive}>
          <Text style={{fontSize:25,color:'white'}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberSix}>
          <Text style={{fontSize:25,color:'white'}}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleLogic} onPress={plusButton}>
          <Text style={{fontSize:25,color:'white'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberSeven}>
          <Text style={{fontSize:25,color:'white'}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberEight}>
          <Text style={{fontSize:25,color:'white'}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberNine}>
          <Text style={{fontSize:25,color:'white'}}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleLogic} onPress={minusButton}>
          <Text style={{fontSize:25,color:'white'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={dotButton}>
          <Text style={{fontSize:25,color:'white'}}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={numberZero}>
          <Text style={{fontSize:25,color:'white'}}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={minusValueButton}>
          <Text style={{fontSize:25,color:'white'}}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleLogic} onPress={impactButton}>
          <Text style={{fontSize:25,color:'white'}}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sumButtonStyle} onPress={resultButton}>
          <Text style={{fontSize:25,color:'white'}}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleLogic} onPress={hundredButton}>
          <Text style={{fontSize:25,color:'white'}}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyleLogic} onPress={divideButton}>
          <Text style={{fontSize:25,color:'white'}}>/</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyleLogic:{
    borderWidth:1,
    width:'23%',
    height:90,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginLeft:6.5,
    marginTop:5,
    backgroundColor:'#BD2A2E',
    borderWidth:2,
    borderColor:'white'
  },
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    top:'60%'
  },
  mainContainer:{
    flex:1,
    backgroundColor:'black'
  },
  textDisplay:{
    top:'100%',
    fontSize:50,
    color:'white',
  },
  buttonStyle:{
    borderWidth:1,
    width:'23%',
    height:90,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginLeft:6.5,
    marginTop:5,
    backgroundColor:'#125541',
    borderWidth:2,
    borderColor:'white'
  },
  sumButtonStyle:{
    borderWidth:1,
    width:'47%',
    height:90,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginLeft:6.5,
    marginTop:5,
    backgroundColor:'#125541',
    borderWidth:2,
    borderColor:'white'
  },
  textDisplayView:{
    alignItems:'flex-end',
  }
});
