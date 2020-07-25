import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView,Alert, Modal, FlatList, Button} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;


import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
// import { lab_categories } from '../../redux/actions/lab_categories';

var radio_props1 = [
  {label: 'Physical        ', value: 0 },
  {label: 'Virtual', value: 1 }
];

const data = [
  {
    id: '1',
    name: 'Physician',
  },
  {
    id: '2',
    name: 'Dentist',
  },
];
 
class OrderDetails extends Component {

  state={order_id:'', order_items:[], patient_name:'', doctor_name:'', total_price:'',address:''}
  

   onPress = radio_props => this.setState({radio_props});  

  componentDidMount(){
    this.setState({
     order_id : this.props.route.params.order_id ,
      order_items: this.props.route.params.order_items,
      patient_name: this.props.route.params.patient_name,
      doctor_name:this.props.route.params.doctor_name,
      total_price:this.props.route.params.total_price,
      address:this.props.route.params.address,
    })

  }


  render() {

  


    return (
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
                  <Text style={styles.uName}>Order Details</Text>
                </View>
                
              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            
            <View style={styles.innerBox}>
              <Text style={styles.inputHeads2}>Patient Name : </Text>
              <Text style={styles.inputHeads}>{this.state.patient_name}</Text> 
            </View>

            <View style={styles.innerBox}>
              <Text style={styles.inputHeads2}>Doctor Name : </Text>
              <Text style={styles.inputHeads}>{this.state.doctor_name}</Text> 
            </View>

            <View style={styles.innerBox}>
              <Text style={styles.inputHeads2}>Address : </Text>
              <Text style={styles.inputHeads}>{this.state.address}</Text> 
            </View>

            <View style={styles.innerBox}>
              <Text style={styles.inputHeads2}>Total Price : </Text>
              <Text style={styles.inputHeads}>{this.state.total_price}</Text> 
            </View>
            
            <View style={styles.FlatListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              // data={this.props.myAddress1}
              data={this.state.order_items}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <View style={styles.innerFlatlistBox}>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Name: </Text>
                      <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Quantity: </Text>
                      <Text style={styles.itemText}>{item.qty}</Text>
                    </View>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Instructions: </Text>
                      <Text style={styles.itemText}>{item.instructions}</Text>
                    </View>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Time: </Text>
                      <Text style={styles.itemText}>{item.time}</Text>
                    </View>
                    {/*<View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Price: </Text>
                      <Text style={styles.itemText}>{item.price}</Text>
                     </View>*/}
                  </View>
                </View>
              )}
              keyExtractor={item => item.p_id}
            />
          </View>
            
      
      
          </View>    
          {/*<View style={styles.bottomBtnContainer}>
              
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.push('Invoice')}>
                <LinearGradient
                  colors={['#5FBEF4', '#75E4F7']}
                  start={{x: 0.1, y: 2}}
                  end={{x: 1.5, y: 1.9}}
                  locations={[0.1, 0.6]}
                  style={[styles.applyBtnContainer, {marginTop: 20}]}>
                  <Text style={styles.btnText}>View Invoice</Text>
                </LinearGradient>
              </TouchableOpacity>
          
          </View>*/}
         
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, {

})(OrderDetails);
