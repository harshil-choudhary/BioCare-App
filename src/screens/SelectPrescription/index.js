import React, { Component } from 'react';
import {
	Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView,
	StyleSheet, FlatList,
	StatusBar, Alert, CameraRoll,Dimensions,ActivityIndicator
} from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './style';
import { Icons, Images } from '../../utils';
import AwesomeAlert from 'react-native-awesome-alerts';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;
import { TextInput } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';
import { my_appointments } from '../../redux/actions/my_appointments';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { getProfile } from '../../redux/actions/getProfile';
import { saveOrder } from '../../redux/actions/saveOrder';



class SelectPrescription extends Component {
	state = { showBookingAlert: false, token:'',photos: null, selectedPhoto: null, Prescription: [], filter: [], address: '',
		res:{"fileName": "IMG_20200705_032712139.jpg", "fileSize": 3508150, "height": 3456, "isVertical": true, "originalRotation": 0, "path": "/storage/DAD4-8821/DCIM/Camera/IMG_20200705_032712139.jpg", "timestamp": "2020-07-04T21:57:12Z", "type": "image/jpeg", "uri": "content://com.google.android.apps.photos.contentprovider/-1/1/content%3A%2F%2Fmedia%2Fexternal%2Fimages%2Fmedia%2F80171/ORIGINAL/NONE/image%2Fjpeg/1022994555", "width": 4608}, 
	avatarSource: null,
	isUploading:false ,
	pharmacy_id:'',
	delivery_type:'',
	city:'',
	address:'',
	name:'',
	doctor_name:'',
	prescription_type:1,
	prescriptionIsSelected : false

};
	selectImage = async () => {
		ImagePicker.showImagePicker({ noData: true, mediaType: 'photo' }, (response) => {
			console.log('Response = ', response);
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				this.setState({prescriptionIsSelected:true});
				this.setState({
					avatarSource: response.uri,res: response,
				});
				// this.uploadImage(response.uri);
			}
		});
	}
	// uploadImage=async(image_uri)=>{


	// }
	state={
		prescriptionIsSelected:false,
		prescription_id:'',
	}

	renderViewButton(prescription_items, item){
	if (prescription_items!=null){
		return(
			<TouchableOpacity
				activeOpacity={1}
				style={styles.viewBtn}
				onPress={() => {

					//if (item.prescription_items!=null)
					this.props.navigation.replace('ViewPrescription', { prescription_id: item.id, prescription : item })
				}}>
				<Text style={styles.tnc}>View</Text>
			</TouchableOpacity>
		)

	}
}

	renderBottomWrapper(){
		if (this.state.prescriptionIsSelected){
			return(
				<View style={styles.bfbottomWrapper}>
							{/* {this.state.isUploading && <ActivityIndicator/>} */}
							<TouchableOpacity
								activeOpacity={1}
								// onPress={() => (docPicker())}>
								onPress={this.selectImage}>
								<Text style={styles.feedbackTextbtn}>Upload</Text>
							</TouchableOpacity>
							<LinearGradient
								colors={['#5588e7', '#75e4f7']}
								start={{ x: 0.1, y: 0.1 }}
								end={{ x: 0.3, y: 1.9 }}
								locations={[0.1, 0.6]}
								style={styles.bookTextbtnWrapper2}>
								<TouchableOpacity
									activeOpacity={1}
									style={styles.bookBtn}
									onPress={() => {
										// this.setState({prescriptionIsSelected:false})
									this.props.saveOrder(this.state, this.state.avatarSource)
									this.props.navigation.replace('MyOrder')
								}}>
									<Text style={[styles.bookTextbtn2, { color: '#ffffff' }]}>
										Place Order
									</Text>
								</TouchableOpacity>
							</LinearGradient>
						</View>
			)
		}
		else{
			return(
				<View style={styles.bfbottomWrapper}>
							{/* {this.state.isUploading && <ActivityIndicator/>} */}
							<TouchableOpacity
								activeOpacity={1}
								// onPress={() => (docPicker())}>
								onPress={this.selectImage}>
								<Text style={styles.feedbackTextbtn}>            Cancel          </Text>
							</TouchableOpacity>
							<LinearGradient
								colors={['#5588e7', '#75e4f7']}
								start={{ x: 0.1, y: 0.1 }}
								end={{ x: 0.3, y: 1.9 }}
								locations={[0.1, 0.6]}
								style={styles.bookTextbtnWrapper}>
								<TouchableOpacity
									activeOpacity={1}
									style={styles.bookBtn}
									onPress={() => {
										this.selectImage()
										// console.log('Prescription', 'Selected Prescription has been added to cart')
										// this.props.navigation.replace('MyAddresses', { prescription_id: this.state.prescription_id, pharm_id : this.props.route.params.pharm_id, pharmacy_category:this.props.route.params.pharmacy_category, city:this.props.route.params.city, delivery_type:this.props.route.params.delivery_type })
										}}>
									<Text style={[styles.bookTextbtn, { color: '#ffffff' }]}>
										Upload Prescription
									</Text>
								</TouchableOpacity>
							</LinearGradient>
						</View>
			)	
		}
	}

	renderList(){
		if (this.state.prescriptionIsSelected){
			return (this.state.avatarSource && <Image source={{ uri: this.state.avatarSource }} style={{ width:'100%', height: 150, resizeMode: 'contain' }} />)
		}
		else{
			return (<ScrollView>
							<FlatList
								showsVerticalScrollIndicator={false}
								data={this.props.my_appointments1}
								renderItem={({ item }) => (
									<>
										<View style={styles.innerBox}>
											<View style={styles.circle}></View>
											<View style={styles.innerTextcont}>
												<Text style={styles.name}>
													{item.doctor_name}
												</Text>
												<Text style={styles.relation}>
													{item.patient_name}
												</Text>
												<Text style={styles.age}>
													{item.date}
													{/* 12-23-34 */}
												</Text>
											</View>
											<View style={styles.buttoncontainer}>
												
									
												<TouchableOpacity
													activeOpacity={1}
													style={styles.selectBtn}
													onPress={() => {
			
														console.log("Prescription with prescription id " + item.id +"is selected")
														this.setState({prescription_id: item.id}) 
														this.props.saveOrder(this.state, this.state.avatarSource)
														this.showBookingAlert()
														this.props.navigation.replace('MyOrder')
													}}>
													<Text style={styles.tnc}>Order</Text>
												</TouchableOpacity>
												{this.renderViewButton(JSON.parse(JSON.stringify(item.prescription_items, typeof value === 'undefined' ? null : value)),item)}
											</View>
										</View>
									</>
								)}
								keyExtractor={item => item.s_id}
							/>
						</ScrollView>
						);
		}
	}


	async _getStorageValue() {
		var value = await AsyncStorage.getItem('token')
		var my_id = await AsyncStorage.getItem('my_id')
		var name = await AsyncStorage.getItem('name')
		if (value != null) {
			this.setState({ token: value, patient_id: my_id })
			this.props.my_appointments(value, my_id)
			this.setState({ token: value, patient_id: my_id, name: name })
			if (!my_id){
				this.props.navigation.push('Members')
			  }
			  var value2 = this.props.getProfile(value, my_id)
			  if (value2){
			  	this.setState({address: this.props.getProfile1.city+', '+this.props.getProfile1.state+', '+this.props.getProfile1.country+','+this.props.getProfile1.pincode })
			  }
		}
		else
			return value
	}
	componentDidMount() {
		this.setState({pharmacy_id: this.props.route.params.pharm_id,pharmacy_category: this.props.route.params.pharmacy_category,city: this.props.route.params.city,delivery_type: this.props.route.params.delivery_type})
		this._getStorageValue()
	}

	uploadImage = () => {
		//this.props.uploadPrescription(this.state.token, this.state.avatarSource, this.props.route.params.pharmacy_id)
		this.setState({prescriptionIsSelected:false});
	}

	showBookingAlert = () => {
		this.setState({
		  showBookingAlert: true
		});
	  };
	 
	  hideBookingAlert = () => {
		this.setState({
		  showBookingAlert: false
		});
	  };


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.wrapper}>
					<LinearGradient
						colors={['#5588e7', '#75e4f7']}
						start={{ x: 0.16, y: 0.1 }}
						end={{ x: 1.1, y: 1.1 }}
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
								<Text style={styles.uName}>Select Prescription</Text>
							</View>
							<TouchableOpacity
								activeOpacity={1}
								style={styles.settingIconWrapper}
								onPress={() => {
									this.props.navigation.push("Members", {screen: 'SelectPrescription'})
								}}>
								<Text style={styles.dropName}>{this.state.name}</Text>
							</TouchableOpacity>
						</View>
					</LinearGradient>
					<View style={styles.boxCont1}>
					<View style={styles.innerBoxWrapper}>
						<TextInput style={styles.innerBox2}
						placeholder={'Enter Address'}
						placeholderTextColor="#787878"
						value={this.state.address}
						onChangeText={address => this.setState({ address })}
						/>
					</View>
						<View style={styles.listWrapper}>
							{this.renderList()}
						</View>
					</View>

					{this.renderBottomWrapper()}
					<AwesomeAlert
						show={this.state.showBookingAlert}
						showProgress={false}
						title={this.props.route.params.pharm_name}
						message="Booking Successful"
						closeOnTouchOutside={true}
						closeOnHardwareBackPress={false}
						//showCancelButton={true}
						showConfirmButton={true}
						confirmText="Okay"
						confirmButtonColor="#5588e7"
						onConfirmPressed={() => {
							this.hideBookingAlert();
						}}
					/>
				</View>
			</View>
		);
	}
}
const mapStateToProps = (state) => {
	// console.log(state.my_appointments.my_appointments)
	return {
		my_appointments1: state.my_appointments.my_appointments,
		getProfile1:state.getProfile.getProfile,
		saveOrder1:state.saveOrder.saveOrder,
	};
};
export default connect(mapStateToProps, {
	my_appointments, getProfile,saveOrder
})(SelectPrescription);
