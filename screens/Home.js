import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Linking } from 'react-native';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Card item={articles[4]} full onPress={() => Linking.openURL('https://www.highlandscoffee.com.vn/vn/highlands-coffee-la-cua-chung-minh-.html')}/>
          <Card item={articles[0]} horizontal  />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
          <Block flex row>
            <Card item={articles[3]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[5]} />
          </Block>
          {/* <Card item={articles[3]} horizontal /> */}
          <Card item={articles[6]} full />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
