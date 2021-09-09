import React,{useState} from 'react'
import { View, Text , StyleSheet, FlatList, StatusBar,Dimensions , Image, ImageBackground} from 'react-native'
const {width,height} = Dimensions.get('screen');


const ScrollBar = () => {
    const [data, setData] = useState([
        {
            id: 1,
            img:'https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-old-tv-vector-illustration-isolated-on-white-background-television-clip-art-png-image_1745797.jpg',
            title:'Electonics',
            subTitle:' 5 ads posted'
        },
        {
            id:2,
            
            img:'https://cdn.yourpng.com/uploads/preview/bed-clipart-vector-png-images-download-38-11617867313ti5myekuxw.png',
            title:'Furniture',
            subTitle: '1 ads posted'
        },
        {
            id:3,
            
            img:'http://icon-library.com/images/jobs-icon-png/jobs-icon-png-18.jpg',
            title:'Job',
            subTitle: '3 ads posted'
        },
        {
            id:4,
            
            img:'https://shmector.com/_ph/7/941754939.png',
            title:'Real state',
            subTitle: '2 ads posted'
        },
        {
            id:5,
            
            img:'https://vectorforfree.com/wp-content/uploads/2020/04/Stay-Home-_Work_-From_-Home_VectorForFree.png',
            title:'Services',
            subTitle: '3 ads posted'
        },
    ]
    )
    return (
        <View style={styles.container}>
        <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem ={({item,index})=>( 
            <View style={{width:width,height:'100%',alignItems:'center',justifyContent:'center'}}>
            <View key={index} style={styles.main}>
                
                <Image 
                source={{uri:item.img}}
                style={{width:60, height:50 , resizeMode:'contain'}}/>
                <Text style={{fontWeight:'bold',fontSize:16}}>{item.title}</Text>
                <Text style={{color:'grey'}}>{item.subTitle}</Text>
              
            </View>
   
            
            </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        SnapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval ={Dimensions.get('screen').width}

        />
        
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        //marginTop: StatusBar.currentHeight || 0,
        height:height*0.18,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
  },

    main:{
        flex:1,
        backgroundColor:'white',
        height:100,
        borderRadius:10,
        padding:20,
        marginVertical:10,
        marginHorizontal:15,
        width: width*0.8,
        elevation:10,
        alignItems:'center'
}

})


export default ScrollBar
