import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
// import { color } from "react-native-reanimated";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block>
                  <Text color="white" size={35} >
                    Hello
                  </Text>
                </Block>
                <Block>
                  <Text color="white" size={37} >
                    Mr.LTS
                  </Text>
                </Block>
                {/* <Block>
                  <Text color="white" size={60}>
                    All Free
                  </Text>
                </Block> */}
                <Block style={styles.subTitle}>
                  <Text color="white" size={25}>
                  Let me know what drink you want today ? Mr. LTS
                  </Text>
                </Block>
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("App")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Drinks for Mr.LTS
                </Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
    
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  logo: {
    width: 300,
    height: 230,
    zIndex: 2,
    position: 'relative',
    marginTop: '-75%'
  },
  title: {
    marginTop:'-5%',
    position: "relative",
    paddingLeft: 1
    
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
