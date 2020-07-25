import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity,FlatList} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

import { getOffers } from '../../redux/actions/getOffers';
import { connect } from 'react-redux';



class Offers extends Component {
  state = {offers : []}

  componentDidMount(){
    this.setState({offers: this.props.getOffers('')})
  }

  offerRender(){
    if (this.props.getOffers1==null){
      return(
        <View style={styles.docListWrapper}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={this.props.getOffers1}
        renderItem={({item}) => (
          <>
          <View style={styles.boxCont1}>
            <View style={styles.boxUpper}>
              <Text style={styles.title}>
                {item.offer_image}
              </Text>
              <Text style={styles.description}>
                
              </Text>
            </View>
            <View style={styles.boxLower}>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 1.1, y: 1.1}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn1}>
                <View style={styles.boxBtn11}>
                  <Text style={styles.code}></Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.3, y: 1.9}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn2}>
                <Text style={[styles.btnText, {color: '#ffffff'}]}>Avail</Text>
              </LinearGradient>
            </View>
          </View>
      </>
      )}
      keyExtractor={item => item.id}
    />
      </View>
      )}
    else
    {
      return(
        <View style={styles.docListWrapper}>
          <Text style={styles.cmngSoon}>No Active Offers</Text>
        </View>
      )
    }
  }

  render() {
    return (
      
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{x: 0.16, y: 0.1}}
              end={{x: 1.1, y: 1.1}}
              locations={[0.16, 50]}
              style={styles.upperCont}>
              <View style={styles.upperWrapper}>
                <TouchableOpacity
                  style={styles.backIconWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Icons.BackIcon} />
                </TouchableOpacity>
                <View style={styles.imageWrapper}>
                  <Text style={styles.uName}>Offers</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>

          </View>
          {this.offerRender()}
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.getOffers.getOffers)
  return {
    getOffers1:state.getOffers.getOffers
  };
};

export default connect(mapStateToProps, {
 getOffers
})(Offers);

