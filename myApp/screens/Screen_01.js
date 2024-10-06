import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Screen_01({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={require("../assets/data_buoi6_link1/ant-design_arrow-left-outlined.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Chat
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/data_buoi6_link1/bi_cart-check.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 15,
            }}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.message}>
          <Text style={styles.textMessage}>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
          </Text>
        </View>
        
        <View style={styles.products}>
            <View style={styles.productItem}>
              <Image
                source={require('../assets/data_buoi6_link1/screen01/ca_nau_lau.png')}
                style={styles.imageInProduct}
              />
              <Text style={styles.desInProduct}>
                Ca nấu lẩu mini
                <br></br>
                <Text style={{color: 'red', fontSize: 14}}>Shop Devang</Text>
              </Text>
              <TouchableOpacity style={styles.btnInProduct}>
                <Text style={{color: 'white'}}>
                  Chat
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.productItem}>
              <Image
                source={require('../assets/data_buoi6_link1/screen01/ga_bo_toi.png')}
                style={styles.imageInProduct}
              />
              <Text style={styles.desInProduct}>
                1KG KHÔ GÀ BƠ TỎI
                <br></br>
                <Text style={{color: 'red', fontSize: 14}}>Shop LTD Food</Text>
              </Text>
              <TouchableOpacity style={styles.btnInProduct}>
                <Text style={{color: 'white'}}>
                  Chat
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.productItem}>
              <Image
                source={require('../assets/data_buoi6_link1/screen01/xa_can_cau.png')}
                style={styles.imageInProduct}
              />
              <Text style={styles.desInProduct}>
                Xe Cần cẩu đa năng
                <br></br>
                <Text style={{color: 'red', fontSize: 14}}>Shop Thế giới đồ chơi</Text>
              </Text>
              <TouchableOpacity style={styles.btnInProduct}>
                <Text style={{color: 'white'}}>
                  Chat
                </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.productItem}>
              <Image
                source={require('../assets/data_buoi6_link1/screen01/do_choi_dang_mo_hinh.png')}
                style={styles.imageInProduct}
              />
              <Text style={styles.desInProduct}>
                Đò chơi dạng mô hình
                <br></br>
                <Text style={{color: 'red', fontSize: 14}}>Shop Thế giới đồ chơi</Text>
              </Text>
              <TouchableOpacity style={styles.btnInProduct}>
                <Text style={{color: 'white'}}>
                  Chat
                </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.productItem}>
              <Image
                source={require('../assets/data_buoi6_link1/screen01/lanh_dao_gian_don.png')}
                style={styles.imageInProduct}
              />
              <Text style={styles.desInProduct}>
                Lãnh đạo giản đơn
                <br></br>
                <Text style={{color: 'red', fontSize: 12}}>Shop Minh Long Book</Text>
              </Text>
              <TouchableOpacity style={styles.btnInProduct}>
                <Text style={{color: 'white'}}>
                  Chat
                </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.productItem}>
              <Image
                source={require('../assets/data_buoi6_link1/screen01/hieu_long_con_tre.png')}
                style={styles.imageInProduct}
              />
              <Text style={styles.desInProduct}>
                Hiểu lòng con trẻ
                <br></br>
                <Text style={{color: 'red', fontSize: 12}}>Shop Minh Long Book</Text>
              </Text>
              <TouchableOpacity style={styles.btnInProduct}>
                <Text style={{color: 'white'}}>
                  Chat
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.productItem}>
            <Image
              source={require('../assets/data_buoi6_link1/screen01/xa_can_cau.png')}
              style={styles.imageInProduct}
            />
            <Text style={styles.desInProduct}>
              Xe Cần cẩu đa năng
              <br></br>
              <Text style={{color: 'red', fontSize: 14}}>Shop Thế giới đồ chơi</Text>
            </Text>
            <TouchableOpacity style={styles.btnInProduct}>
              <Text style={{color: 'white'}}>
                Chat
              </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.productItem}>
            <Image
              source={require('../assets/data_buoi6_link1/screen01/do_choi_dang_mo_hinh.png')}
              style={styles.imageInProduct}
            />
            <Text style={styles.desInProduct}>
              Đò chơi dạng mô hình
              <br></br>
              <Text style={{color: 'red', fontSize: 14}}>Shop Thế giới đồ chơi</Text>
            </Text>
            <TouchableOpacity style={styles.btnInProduct}>
              <Text style={{color: 'white'}}>
                Chat
              </Text>
            </TouchableOpacity>
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
  btnBack: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  body: {
    width: "100%",
    height: "auto",
  },
  image: {
    width: 300,
    height: 600,
    resizeMode: "contain",
  },
  message: {
    width: "100%",
    height: 60,
    backgroundColor: "#DCDCDC",
    top: 0,
    margin: 0,
  },
  textMessage: {
      color: '#1E90FF',
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      alignItems: 'center',
  },
  products: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  productItem: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 5
  },
  imageInProduct: {
    width: 68,
    height: 68,
    resizeMode: 'contain'
  },
  desInProduct: {
    backgroundColor: 'white',
    width: 150,
    height: 65,
    fontSize: 16,
    fontWeight: '700'
  },
  btnInProduct: {
    backgroundColor: 'red',
    width: 70,
    height: 30,
    alignItems: 'center',
    marginRight: 20,
    justifyContent: 'center'
  }
});
