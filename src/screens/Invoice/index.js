import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import { example } from '../../redux/actions/example';
import { connect } from 'react-redux';



class Invoice extends Component {
  
  
    componentDidMount(){
      this.setState(
       // {location: this.props.getLocation('')},
      
      )
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
                  <Text style={styles.uName}>Invoice</Text>
                </View>
                
              </View>
            
            </LinearGradient>

            
              <View style={styles.boxCont1}>
              <ScrollView>
              <View style={styles.innerBox}>
                <View style={styles.rowinnerBox}>
                  <View style={styles.invoicetextBox}>
                    <Text style={styles.headerText}>Invoice No.: </Text>
                    <Text style={styles.dataText}>12345</Text>
                  </View>

                  <View style={styles.datetextBox}>
                    <Text style={styles.headerText}>Date: </Text>
                    <Text style={styles.dataText}>23rd July, 2020</Text>
                  </View>
                </View>
                
                <View style={styles.rowinnerBox}>
                  <View style={styles.invoicetextBox}>
                    <Text style={styles.headerText}>GSTIN: </Text>
                    <Text style={styles.dataText}>ABC123</Text>
                  </View>
                </View>

                <View style={styles.rowinnerBox}>
                  <Text></Text>
                </View>

                <View style={styles.rowinnerBox}>
                  <View style={styles.invoicetextBox}>
                    <Text style={styles.headerText}>Name: </Text>
                    <Text style={styles.dataText}>Patient Name</Text>
                  </View>
                </View>

                <View style={styles.rowinnerBox}>
                  <View style={styles.invoicetextBox}>
                    <Text style={styles.headerText}>Address: </Text>
                    <Text style={styles.dataText}>Address</Text>
                  </View>
                </View>

                <View style={styles.rowinnerBox}>
                  <View style={styles.invoicetextBox}>
                    <Text style={styles.headerText}>Phone: </Text>
                    <Text style={styles.dataText}>Phone</Text>
                  </View>
                </View>

                <View style={styles.rowinnerBox}>
                  <View style={styles.invoicetextBox}>
                    <Text style={styles.headerText}>Details: </Text>
                    <Text style={styles.dataText}>Details</Text>
                  </View>
                </View>
                
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
  return {
    example1:state.example.example,
  };
};

export default connect(mapStateToProps, {
example
})(Invoice);



