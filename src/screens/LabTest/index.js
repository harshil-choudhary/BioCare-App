import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView,CheckBox} from 'react-native';


import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList} from 'react-native-gesture-handler';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { testList } from '../../redux/actions/testList';
import { connect } from 'react-redux';

const banners = [
  {
    id: '1',
    image: Images.Banner1,
  },
  {
    id: '2',
    image: Images.Banner2,
  },
];



var tests=[];

class LabTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      Test: [],
      check:{},
      value:'',
      test_id:'',
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
checkBox_Test = (id) => {
  const checkCopy = {...this.state.check}
  if (checkCopy[id]) checkCopy[id] = false;
  else checkCopy[id] = true;
  this.setState({ check: checkCopy });
  console.log("Check"+this.state.check+"Check")
}

addToTestArray(){
  tests.push( this.state.test_id);
  console.log("Updated tests : " + tests);
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
                  <Text style={styles.uName}>Lab Test</Text>
                </View>
                <View style={styles.settingIconWrapper} />
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
          <View style={styles.BannerWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={banners}
              renderItem={({item}) => <Image source={item.image} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={this.state.data}        //this.state.data is used to implement search
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.labcatImg} source={Icons.recordsIcon} />
                  <View style={styles.textBox}>
                    <Text style={styles.specialText}>{item.name}</Text>
                  </View>
                  <CheckBox
        
                    value = { this.state.check[item.id] }
                    onChange = {() => {this.checkBox_Test(item.id);this.setState({test_id:item.id});this.addToTestArray();}}
                  />
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.bottomBtnContainer}>
              
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    this.props.navigation.push("LabDetailedCategory",{
                      tests:JSON.stringify(tests), 
                      city:this.props.route.params.city, 
                      category: this.props.route.params.category
                    })
                  }}>
                  <LinearGradient
                    colors={['#5FBEF4', '#75E4F7']}
                    start={{x: 0.1, y: 2}}
                    end={{x: 1.5, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={[styles.applyBtnContainer, {marginTop: 20}]}>
                    <Text style={styles.btnText}>Apply</Text>
                  </LinearGradient>
                </TouchableOpacity>
            
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
})(LabTest);
