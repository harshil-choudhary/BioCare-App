import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';


const pharmCatTypes = [
  {
    pharm_cat_id: '1',
    pharm_cat_name: 'Nearby',
  },
  {
    pharm_cat_id: '2',
    pharm_cat_name: 'Open',
  },
  {
    pharm_cat_id: '3',
    pharm_cat_name: 'Rating',
  },

];

// const ;

class Pharmacy extends Component {

  state = {Pharm : [], filter_id:'', city:'',delivery_type:'0' }
  
  componentDidMount(){
    this.setState({Pharm: this.props.pharmacy(this.props.route.params.city, '')})
    this.setState({delivery_type: this.props.route.params.delivery_type})
  }

  addfilter(item){
    this.setState({filter_id: item.pharm_cat_id})
    var filter = '&filter='+item.pharm_cat_name
    this.props.pharmacy(this.props.route.params.city, filter)

  }

  render() {
   console.log(this.state.delivery_type)
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
                  <Text style={styles.uName}>Select Pharmacy</Text>
                </View>
                
              </View>
              <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={pharmCatTypes}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        this.addfilter(item)
                      }}>
                      <Text style={[styles.catText, {backgroundColor: this.state.filter_id == item.pharm_cat_id? '#5588e7': 'white'}]}>{item.pharm_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.pharm_cat_id}
                />
              </View>
            </LinearGradient>

            
              <View style={styles.docContWrapper}>
              <ScrollView>
                

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.pharmacy1}
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
                              <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                  this.props.navigation.replace('PharmDetails',{pharm_id : item.id, city:this.props.route.params.city, delivery_type:this.props.route.params.delivery_type});
                              }}>
                      

                                <Text style={styles.docNameText}>
                                  {item.name}
                                </Text>
                                
                                <Text style={styles.docSubNameText}>
                                  {item.address}
                                </Text>
                              </TouchableOpacity>
                            </View>
                            <View>
                            
                            <View style={styles.bottom2Wrapper}>
                              <TouchableOpacity
                                activeOpacity={1}
                                style={styles.boxBtn2}
                                onPress={() =>
                                  this.props.navigation.replace('SelectPrescription',{pharm_name: item.name, pharm_id : item.id, city:this.props.route.params.city, delivery_type:this.state.delivery_type})
                                }>
                                <LinearGradient
                                  colors={['#5588e7', '#75e4f7']}
                                  start={{x: 0.1, y: 0.1}}
                                  end={{x: 0.3, y: 1.9}}
                                  locations={[0.1, 0.6]}
                                  style={styles.boxBtn2}>
                                  <Text
                                    style={[styles.btnText, {color: '#ffffff'}]}>
                                    Order
                                  </Text>
                                </LinearGradient>
                              </TouchableOpacity>
                              <Text></Text>
                              <Text></Text>
                              <Text style={styles.orderdetails}>{item.avg_rating} Rating</Text>
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
})(Pharmacy);