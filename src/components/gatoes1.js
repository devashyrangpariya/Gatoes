import { useNavigation } from '@react-navigation/native'
import React,{useRef} from 'react'
import {WebView} from 'react-native-webview'
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
function Home() {
  const scrollRef = useRef();
  const navigation = useNavigation()
  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    })
  }

  return (
    <ScrollView ref={scrollRef}>
      <View style={styles.Conatener}>
        {/*--------------------------- Header---------------------------- */}
        <View style={styles.Header}>
          {/*--------------------------Logo------------------------------ */}
          <View style={styles.main}>
            <TouchableOpacity style={styles.Logo} ><Image source={require('../../assets/logo.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.Login}>
                <Image source={require('../../assets/user.png')} />
                <Text style={styles.loginText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* --------------------------Title------------------------------- */}
          <View style={styles.titleConatener}>
            <Text style={styles.title}><Text>Your favourite<Text style={{ color: '#F66754', }}> restaurants</Text> and takeaways, <Text style={{ color: '#119477', }}>delivered to your door</Text></Text></Text>
            <Text style={{ paddingBottom: 10, }}>Enter your location to find local restaurants</Text>
            <View style={styles.inputcontainer}>
              <Image source={require('../../assets/location.png')} style={styles.Location} />
              <TextInput placeholder='Type your location here...' style={styles.input} />
              <TouchableOpacity style={styles.button}><Image source={require('../../assets/gps.png')} style={{ height: 30, width: 30 }} /></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.Search}>
              <Text style={{ color: '#fff', }}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*------------------------- Center ---------------------- */}
        <View style={styles.Center}>
          <View>
            <Text style={styles.centerTitle}>How <Text style={{ color: '#F66754', }}>Gatoes</Text> Works?</Text>
          </View>
          {/* --------------------Step-1-------------------- */}
          <View style={styles.stepConatener}>
            <Image source={require('../../assets/step_1.png')} style={styles.stepImg}></Image>
            <Text style={styles.Step}>Step 1</Text>
            <View style={styles.titledes}>
              <Text style={styles.stepTitle}>Order your favourite food at your home</Text>
            </View>
          </View>
          {/* --------------------Step-2-------------------- */}
          <View style={styles.stepConatener}>
            <Image source={require('../../assets/step_2.png')} style={styles.stepImg}></Image>
            <Text style={styles.Step}>Step 2</Text>
            <View style={styles.titledes}>
              <Text style={styles.stepTitle}>Choose from the best restaurants around you</Text>
            </View>
          </View>
          {/* --------------------Step-3-------------------- */}
          <View style={styles.stepConatener}>
            <Image source={require('../../assets/step_3.png')} style={styles.stepImg}></Image>
            <Text style={styles.Step}>Step 3</Text>
            <View style={styles.titledes}>
              <Text style={styles.stepTitle}>Fast delivery at your doorstep</Text>
            </View>
          </View>
        </View>
        {/*-------------------------========= Footer ==========---------------------- */}
        <View style={styles.Footer}>
          <View style={styles.footerConatener}>
            <View style={styles.footerTop}>
              <View>

                <TouchableOpacity onPress={onPressTouch} style={styles.footerArrow}>
                  <Image style={{ height: 16, width: 16, }} source={require('../../assets/arrow.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPressTouch} style={styles.footerLogo}>
                  <Image source={require('../../assets/footer-logo.png')}></Image>
                </TouchableOpacity>
                <View style={styles.socButten}>
                  <TouchableOpacity onPress={()=>navigation.navigate('WebView')}>
                  <Image  source={require('../../assets/apple-store.png')} style={{ marginRight: 10, }} />
                  </TouchableOpacity>
                  <Image source={require('../../assets/google-play.png')}></Image>
                </View>
                <View style={{ marginLeft: 15, }}>
                  <View style={styles.discover}>
                    <Text style={styles.discoverText}>Discover Gatoes</Text>
                    <Text style={styles.discoverDes}>About us  Become a parther Ride with us</Text>
                  </View>
                  <View style={styles.discover}>
                    <Text style={styles.discoverText}>Help</Text>
                    <Text style={styles.discoverDes}>Contact us FAQs</Text>

                  </View>
                  <View style={styles.discover}>
                    <Text style={styles.discoverText}>Legal</Text>
                    <Text style={styles.discoverDes}>Terms &amp; Conditions Refund &amp; Cancellation</Text>
                    <Text style={styles.discoverDes}>Privacy Policy Cookie Policy</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* <LinkDirect/> */}
            <View style={styles.footerBootte}>
              <View>
                <View style={styles.Icone}>
                  <View style={styles.ImgConatener}>
                    <Image source={require('../../assets/fb-icon.png')} style={styles.imgfb} />
                  </View>
                  <View style={styles.ImgConatener}>
                    <Image source={require('../../assets/insta.png')} style={styles.imgInsta} />
                  </View>
                  <View style={styles.ImgConatener}>
                    <Image source={require('../../assets/linkedin.png')} style={styles.imgli} />
                  </View>
                </View>
                <View style={styles.CopRightConatener}>
                  <Text style={styles.Footercopyright}>© 2022 Gatoes. All Rights Reserved</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Conatener: {},
  // ------------------Header------------------//
  Header: {
    padding: 15,
    backgroundColor: '#fff2f1',
    height: 430,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    alignItems: 'center',
  },
  // Login //
  Login: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    fontSize: 16,
  },
  loginText: {
    color: '#f66754',
  },
  // ----------------Title---------------------//
  titleConatener: {
    marginTop: 50,
  },
  title: {
    fontSize: 29,
    marginBottom: 27,
  },
  // ----------------Input---------------------//

  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  // Input //
  input: {
    height: 50,
    paddingLeft: 10,
    width: width - 115,
  },
  // Location & Button //
  Location: {
    height: 30,
    width: 30,
    paddingLeft: 10,
  },
  button: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  // ----------Search-------------//
  // Search Button //
  Search: {
    height: 48,
    backgroundColor: '#f66754',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    fontSize: 18,
    color: '#fff'
  },

  //--------------------------- Ceanter -------------------------------//

  Center: {
    padding: 15,
    paddingTop: 40,
    paddingBottom: 77,
    flexDirection: 'column',
  },
  // ---------Title---------- //
  centerTitle: {
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'center',
  },
  // ----------Step----------- //
  stepConatener: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Images //
  stepImg: {
    width: 260,
    height: 185,
    marginTop: 10,
    marginBottom: 10,
  },
  // Step1-2-3 //
  Step: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#A1A0A9',
    fontSize: 18,
  },
  // TitleDes //
  titledes: {
    width: 260,
    height: 56,
    marginBottom: 8,
  },
  // Step Title //
  stepTitle: {
    fontSize: 24,
    textAlign: 'center',
  },

  //--------------------------- Footer -------------------------------//

  Footer: {

  },
  footerTop: {
    height: 435,
    backgroundColor: '#23212d',
    position: "relative",
    // borderColor:'#fff',
    borderWidth: 0.4,
    borderBottomColor: '#dadad'
  },
  footerArrow: {
    height: 52,
    width: 52,
    backgroundColor: '#f66754',
    zIndex: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -25,
    right: 170,
  },
  footerLogo: {
    alignItems: 'center',
    // justifyContent:'center',
    marginTop: 30,
    marginBottom: 15,
  },
  socButten: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginLeft: 10,
  },
  app: {
    // width: 48,
    // height: 160,
    marginRight: 10,
  },
  discover: {
    marginBottom: 20,
    paddingTop: 10,
  },
  discoverText: {
    color: '#716D82',
    fontSize: 14,
    // fontWeight:500,
    marginRight: 15,
    paddingBottom: 10,
    textTransform: 'uppercase'

  },
  discoverDes: {
    color: '#E1DFE8',
    paddingBottom: 10,
  },

  footerBootte: {
    height: 107,
    paddingTop: 27,
    backgroundColor: '#1d1b27',
  },
  Icone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent:'space-between',
  },
  imgfb: {
    height: 26,
    width: 14,
    // padding: 16,
  },
  imgInsta: {
    height: 26,
    width: 26,
  },
  imgli: {
    height: 26,
    width: 26,
  },
  ImgConatener: {
    paddingLeft: 8,
    paddingRight: 8,

  },
  CopRightConatener: {
    alignItems: 'center',
    paddingTop: 10,
  },
  Footercopyright: {
    fontSize: 16,
    color: '#716D82',
  }
})

