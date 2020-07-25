import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';




class NewCart extends Component {
  state={cartItem:[]}

  checkOutButton(){
    if (this.state.cartItem.length>0){
      return (<View style={styles.bottomBtnContainer}>
              
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.props.navigation.push('MyAddresses')}>
                  <LinearGradient
                    colors={['#5FBEF4', '#75E4F7']}
                    start={{x: 0.1, y: 2}}
                    end={{x: 1.5, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={[styles.applyBtnContainer, {marginTop: 20}]}>
                    <Text style={styles.btnText}>Checkout</Text>
                  </LinearGradient>
                </TouchableOpacity>
            
            </View>)
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
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>Cart</Text>
                </View>
                
              </View>
              
            </LinearGradient>

            
              <View style={styles.docContWrapper}>
              <ScrollView>
                

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.cartItem}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          
                            <View style={styles.circle}>
                              <Image
                                style={styles.pharmdetailImg}
                                source={Images.pharm}
                              />
                            </View>
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                Patient Name
                              </Text>
                              <Text style={styles.docSubNameText}>
                                Doctor Name and
                              </Text>
                              <Text style={styles.docprofText}>
                                Hospital
                              </Text>
                              <Text style={styles.tnc}>
                                5 items
                              </Text>
                            </View>
                            <View>
                            
                            <View style={styles.bottom2Wrapper}>
                            <TouchableOpacity
                                  activeOpacity={1}
                                  style={styles.boxBtn2}
                                  onPress={() =>
                                    console.log('Cart','Item Deleted')
                                  }>
                                  <Image 
                                    style={styles.DeleteIcon}
                                    source={Icons.DeleteIcon}/>
                                </TouchableOpacity> 
                              <Text style={styles.orderdetails}>June 06, 2020</Text>
                                <TouchableOpacity
                                  activeOpacity={1}
                                  style={styles.boxBtn2}
                                  onPress={() =>
                                    console.log('Cart','Prescription')
                                  }>
                                  <LinearGradient
                                    colors={['#5588e7', '#75e4f7']}
                                    start={{x: 0.1, y: 0.1}}
                                    end={{x: 0.3, y: 1.9}}
                                    locations={[0.1, 0.6]}
                                    style={styles.boxBtn2}>
                                    <Text
                                      style={styles.PrescText}>
                                      View Prescription
                                    </Text>
                                  </LinearGradient>
                                </TouchableOpacity>        
                              
                            </View>
                            </View>
                          </View>
                        
                          
                          
                          
                      </>
                    )}
                    keyExtractor={item => item.s_id}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        {this.checkOutButton()}
        
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.pharmacy.pharmacy)
  return {
    pharmacy1:state.pharmacy.pharmacy
  };
};

export default connect(mapStateToProps, {
 pharmacy
})(NewCart);


