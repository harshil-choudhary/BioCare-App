import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList, BorderlessButton} from 'react-native-gesture-handler';
import { ListItem, SearchBar } from 'react-native-elements';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';

import { testList } from '../../redux/actions/testList';
import { connect } from 'react-redux';

const testCatTypes = [
  {
    test_cat_id: '1',
    test_cat_name: 'Prescribed',
  },
  {
    test_cat_id: '2',
    test_cat_name: 'Self Test',
  },
 
];

var tests=[];

class Reports extends Component {

  addfilter(item){
    this.setState({filter_id: item.test_cat_id})

  }
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      Test: [],
      value:'',
      city:'',
      filter_id:'',
      appointment_type:'',
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.testList("")
        this.setState({
          data: this.props.testList1,
          loading: false,
        });
        this.arrayholder = this.props.testList1;
  }



  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

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
                  <Text style={styles.uName}>Reports</Text>
                </View>
               
              </View>
              
            </LinearGradient>
            
            <View style={styles.inputWrapper}>
              <Image source={Icons.searchIcon} />
              <TextInput
                onChangeText={text => this.searchFilterFunction(text)}
                style={styles.searchinp}
                placeholder="Search for tests"
              />
            </View>
          </View>
          <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={testCatTypes}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        this.addfilter(item)
                      }}>
                      <Text style={[styles.catText, {backgroundColor: this.state.filter_id == item.test_cat_id? '#5588e7': 'white'}]}>{item.test_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.test_cat_id}
                />
              </View>
          <View style={styles.topText}>
            <Text style={styles.texthead}>Top Lab Tests</Text>
          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={this.props.testList1}        //this.state.data is used to implement search
            
              //ListHeaderComponent={this.renderHeader}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.labcatImg} source={Images.report_test} />
                  <View style={styles.textBox}>
                    <Text style={styles.specialText}>
                      
                      {item.name}
                      </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>{
                      tests.push( item.id);
                      // console.log(tests)
                      this.props.navigation.push('LabDetailedCategory', {tests:JSON.stringify(tests), city: this.state.city, appointment_type : this.state.appointment_type})
                    }
                    }>
                    <Image source={Icons.goIcon} style={styles.iconStyle} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.testList.testList)
  return {
    testList1:state.testList.testList
  };
};

export default connect(mapStateToProps, {
 testList
})(Reports);
