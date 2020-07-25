import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';


//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import { labs } from '../../redux/actions/labs';
import { connect } from 'react-redux';
const labCatTypes = [
  {
    lab_cat_id: '1',
    lab_cat_name: 'Specialised',
  },
  {
    lab_cat_id: '2',
    lab_cat_name: 'Near You',
  },
  {
    lab_cat_id: '3',
    lab_cat_name: 'Online Booking',
  },
  {
    lab_cat_id: '4',
    lab_cat_name: 'Open now',
  },
];


class LabDetailedCategory extends Component {

  state = {Lab : [],
      sponsLab: [], filter_id:''
        
  }

  

  addfilter(item){
    this.setState({filter_id: item.lab_cat_id})

  }

  componentDidMount(){
    // console.log (this.props.route.params.tests+this.props.route.params.city+this.props.route.params.category)
    this.setState({Lab: this.props.labs('')})
   
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
                  <Text style={styles.uName}>Labs</Text>
                </View>
                
              </View>
              <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={labCatTypes}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        this.addfilter(item)
                      }}>
                      <Text style={[styles.catText, {backgroundColor: this.state.filter_id == item.lab_cat_id? '#5588e7': 'white'}]}>{item.lab_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.lab_cat_id}
                />
              </View>
            </LinearGradient>

            
            <View style={styles.docContWrapper}>
              <ScrollView>
                <View style={styles.docCont}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.sponsLab}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper}>
                          <View style={styles.sponserWrapper}>
                            <Text style={styles.sponserText}>SPONSORED</Text>
                          </View>
                          <View style={styles.docSpecsWrapper}>
                            <Image
                              style={styles.labdetailImg}
                              source={Images.lab}
                            />
                            <View style={styles.docNameWrapper}>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => this.props.navigation.replace('LabDetails',{lab_id:item.id})}>
                        
                            
                                <Text style={styles.docNameText}>
                                  {item.name}
                                </Text>
                                <Text style={styles.docSubNameText}>
                                  {item.address}
                                </Text>
                                <Text style={styles.docprofText}>
                                  {item.phone}
                                </Text>
                                <Text style={styles.docExpText}>
                                  {item.email}
                                </Text>
                                </TouchableOpacity>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>50% discount</Text>
                            
                            <View style={styles.locationWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.doclocText}>{item.city}</Text>
                            </View>
                          </View>
                          {/*<View style={styles.bottom1Wrapper}>
                            <Text style={styles.moreText}>Feature 1</Text>
                            <Text style={styles.moreText}>Feature 2</Text>
                            <Text style={styles.moreText}>+2 More</Text>
                          </View>*/}
                          <View style={styles.bottom2Wrapper}>
                            <View style={styles.moneyWrapper}>
                            <Image source={Images.starImg} style={{height:14.76,width:15.52,}}/>
                              <Text style={styles.moneyText}>
                                4.2
                              </Text>
                            </View>
                            <TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() => this.props.navigation.replace('BookLab',{tests:this.props.route.params.tests,lab_id:item.id, lab_name:item.name, lab_phone:item.phone, lab_address:item.address, lab_email:item.email, lab_timings:item.from_time + " to " + item.to_time, lab_owner:item.owner_name})
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{x: 0.1, y: 0.1}}
                                end={{x: 0.3, y: 1.9}}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, {color: '#ffffff'}]}>
                                  Book
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.labs1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          <View
                            style={[styles.docSpecsWrapper, {marginTop: 10}]}>
                            <Image
                              style={styles.labdetailImg}
                              source={Images.lab}
                            />
                            <View style={styles.docNameWrapper}>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => console.log("Lab Details Page")}>
                              <Text style={styles.docNameText}>
                                {item.name}
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.address}
                              </Text>
                              <Text style={styles.docprofText}>
                                {item.phone}
                              </Text>
                              <Text style={styles.docExpText}>
                                {item.email}
                              </Text>
                            </TouchableOpacity>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            {/*<Text style={styles.feedText}>50% discount</Text>*/}
                            
                            <View style={styles.locationWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.doclocText}>{item.city}</Text>
                            </View>
                          </View>
                          {/*<View style={styles.bottom1Wrapper}>
                            <Text style={styles.moreText}>Feature 1</Text>
                            <Text style={styles.moreText}>Feature 2</Text>
                            <Text style={styles.moreText}>+2 More</Text>
                          </View>*/}
                          <View style={styles.bottom2Wrapper}>
                            <View style={styles.moneyWrapper}>
                              <Image source={Images.starImg} style={{height:14.76,width:15.52,}}/>
                              <Text style={styles.moneyText}>
                                {this.avg_rating}
                              </Text>
                            </View>
                            <TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() => this.props.navigation.replace('BookLab',{tests:this.props.route.params.tests,lab_id:item.id, lab_name:item.name, lab_phone:item.phone, lab_address:item.address, lab_email:item.email, lab_timings:item.from_time + " to " + item.to_time, lab_owner:item.owner_name})
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{x: 0.1, y: 0.1}}
                                end={{x: 0.3, y: 1.9}}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, {color: '#ffffff'}]}>
                                  Book
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
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
        <View style={styles.filterBtnWrapper}>
          {/*<TouchableOpacity
            style={styles.filterBtnCont}
            activeOpacity={1}
            onPress={() => this.props.navigation.replace("DocFilteration")}>
            <Image style={styles.filterImg} source={Icons.filterIcon} />
          </TouchableOpacity>*/}
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.labs.labs)
  return {
    labs1:state.labs.labs
  };
};

export default connect(mapStateToProps, {
 labs
})(LabDetailedCategory);


