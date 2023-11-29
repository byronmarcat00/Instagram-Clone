import React from "react";
import { View,Text , StyleSheet, Image} from "react-native";
import colors from './src/theme/colors';
import font from './src/theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const App = () =>{

  return (
    <View style ={styles.post}>

      {/* header */}

      <View style={styles.header}>
        <Image 
        
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.userAvatar}
        onError={(error) => console.error('Image load error:', error)}
        />

        <Text style={styles.userName}>Byron</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
           style={styles.threeDots}
/>
      </View>
      {/* content */}
      <Image
  source={{
    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  }}
  style={styles.image}
  onError={(error) => console.error('Image load error:', error)}
/>

      {/* footer */}
      <View  style={styles.footer}>

      <View style={styles.iconContainer}>
  <AntDesign
    name={'hearto'}
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Ionicons
    name="chatbubble-outline"
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Feather
    name="send"
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Feather
    name="bookmark"
    size={24}
    style={{marginLeft: 'auto'}}
    color={colors.black}
  />
      </View>

      {/*likes */}

      <Text style={styles.text}> 

        Liked by {' '}
        <Text style={styles.bold}> kasdfjkdfjds</Text> and {' '}
        <Text style={styles.bold}> 66 others</Text> 


      </Text>


      {/* Post Description */}
      <Text style={styles.text} >

    
      <Text style ={styles.bold}> fkasfjkasdfds</Text> 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quaerat ratione quia inventore animi? Voluptatibus, tenetur. Non nulla omnis modi, minus deleniti culpa cupiditate expedita autem minima quo molestias eius!

      </Text>


      {/* Comments*/}
      <Text>View all 16 Comments</Text>

      <View style={styles.comment}> 
      
      <Text style={styles.commentText}>

        <Text style={styles.bold}> dafdfdsfd</Text>Lorem jfkdsjfkdsafds dfdasf dafdfdsfd

      </Text>
      <AntDesign
    name={'hearto'}
    style={styles.icon}
    color={colors.black}
  />
      </View>


      {/* Posted date */}
      <Text> 19 December, 2021</Text>


      </View>
      
      
      
    </View>
  )
}


const styles = StyleSheet.create({
  post:{

  },
  image:{
    width:'100%',
    aspectRatio:1,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
  },
  userAvatar:{
    width:50,
    height:50,
    borderRadius:25,
    marginRight:10,
  },
  userName:{
    fontWeight:font.weight.bold,
    color:colors.black,
  },
  threeDots:{
    marginLeft:'auto'
  },
  footer:{
    padding:10,
  },
  iconContainer:{
    flexDirection:'row',
    marginBottom:5,
    
  },
  icon:{
    marginHorizontal:5,

  }
,
text:{
  color:colors.black,
  lineHeight:18,
},
bold:{
  fontWeight:font.weight.bold
},
commentText:{
color:colors.black,
flex:1,
lineHeight:18,
}
,
comment:{
  flexDirection:'row',
  alignItems: 'center',

},



})
export default App;
