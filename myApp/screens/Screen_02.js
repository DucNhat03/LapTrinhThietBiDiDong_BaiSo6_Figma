import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Screen02({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity 
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
              }}
              onPress={() => {navigation.navigate('Screen01')}}
            >
            <Image
              source={require("../assets/data_buoi6_link1/ant-design_arrow-left-outlined.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBox}>
          <Image
            source={require("../assets/data_buoi6_link1/whh_magnifier.png")}
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              top: 7,
              left: 10,
            }}
          />
          <TextInput style={styles.inputText}></TextInput>
        </View>
        <View>
          <Image
            source={require("../assets/data_buoi6_link1/bi_cart-check.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 0,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/data_buoi6_link1/daubacham.png")}
            style={{
              width: 25,
              height: 5,
              marginRight: 5,
            }}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.rowProdcuts}>
          <View style={styles.productItem}>
            <View>
              <Image source={require('../assets/data_buoi6_link1/screen02/daucam1.png')}
              style={{width: 160, height: 160, resizeMode: 'contain',marginTop: -30,}} 
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Dây cáp chuyển từ USB sang PS2</Text>
            </View>
            <View> 
              <Text style={{fontSize: 12}}>Đánh giá</Text>
            </View>
            <View>
              <Text style={{fontSize: 12}}>
              Đơn giá
              </Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View>
              <Image source={require('../assets/data_buoi6_link1/screen02/dauchuyendoi1.png')}
              style={{width: 160, height: 160, resizeMode: 'contain', marginTop: -30,}} 
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Dây cáp chuyển từ USB sang PS2</Text>
            </View>
            <View> 
              <Text style={{fontSize: 12}}>Đánh giá</Text>
            </View>
            <View>
              <Text style={{fontSize: 12}}>
              Đơn giá
              </Text>
            </View>
          </View>
          
        </View>
        <View style={styles.rowProdcuts}>
          <View style={styles.productItem}>
            <View>
              <Image source={require('../assets/data_buoi6_link1/screen02/dauchuyendoi1.png')}
              style={{width: 160, height: 160, resizeMode: 'contain',marginTop: -30,}} 
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Dây cáp chuyển từ USB sang PS2</Text>
            </View>
            <View> 
              <Text style={{fontSize: 12}}>Đánh giá</Text>
            </View>
            <View>
              <Text style={{fontSize: 12}}>
              Đơn giá
              </Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View>
              <Image source={require('../assets/data_buoi6_link1/screen02/giacchuyen1.png')}
              style={{width: 160, height: 160, resizeMode: 'contain', marginTop: -30,}} 
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Dây cáp chuyển từ USB sang PS2</Text>
            </View>
            <View> 
              <Text style={{fontSize: 12}}>Đánh giá</Text>
            </View>
            <View>
              <Text style={{fontSize: 12}}>
              Đơn giá
              </Text>
            </View>
          </View>
          
        </View>
        <View style={styles.rowProdcuts}>
          <View style={styles.productItem}>
            <View>
              <Image source={require('../assets/data_buoi6_link1/screen02/daynguon1.png')}
              style={{width: 160, height: 160, resizeMode: 'contain',marginTop: -30,}} 
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Dây cáp chuyển từ USB sang PS2</Text>
            </View>
            <View> 
              <Text style={{fontSize: 12}}>Đánh giá</Text>
            </View>
            <View>
              <Text style={{fontSize: 12}}>
              Đơn giá
              </Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View>
              <Image source={require('../assets/data_buoi6_link1/screen02/carbusbtops21.png')}
              style={{width: 160, height: 160, resizeMode: 'contain', marginTop: -30,}} 
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Dây cáp chuyển từ USB sang PS2</Text>
            </View>
            <View> 
              <Text style={{fontSize: 12}}>Đánh giá</Text>
            </View>
            <View>
              <Text style={{fontSize: 12}}>
              Đơn giá
              </Text>
            </View>
          </View>
          
        </View>
      
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#00BFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBox: {
    width: 200,
    height: 35,
    placeholderTextColor: "gray",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  inputText: {
    width: "100%",
    height: 35,
    fontSize: 16,
    borderRadius: 5,
    placeholderTextColor: "gray",
    paddingLeft: 35,
  },
  body: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
  },
  rowProdcuts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 200,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  productItem: {
    width: '45%',
    height: 200,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  }
});
