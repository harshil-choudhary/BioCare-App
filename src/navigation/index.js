import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icons} from '../utils';

//Screens
import Login from '../screens/Login';               //for login test
import Otp from '../screens/OtpScreen';             //for login test
import SocialLogin from '../screens/SocialLogin';   //for login test
import Home from '../screens/Home';
import Pharmacy from '../screens/Pharmacy';
import Reports from '../screens/Reports';
import Videos from '../screens/Videos';
import Profile from '../screens/Profile';
import Offers from '../screens/Offer';
import FindAndBook from '../screens/FindAndBook';
import DoctorCatagories from '../screens/DoctorCatagories';
import TimeSlot1 from '../screens/TimeSlot1';
import TimeSlot2 from '../screens/TimeSlot2';
import TimeSlot3 from '../screens/TimeSlot3';
import DocDetailedCategory from '../screens/DoctorListCategory';
import DocFilteration from '../screens/DoctorFilteration';
import ClinicalScreen from '../screens/ClinicalScreen';
import DoctorScreen from '../screens/DoctorScreen';
import LabDetailedCategory from '../screens/LabListCategory';
import Prescription_Picker from '../screens/PrescriptionPicker';
import AddMember from '../screens/AddMember';
import Members from '../screens/Members'
import Notifications from '../screens/Notifications'
import Settings from '../screens/Settings'
import Payments from '../screens/Payments'
import Reminders from '../screens/Reminders'
import Consultation from '../screens/Consultation'
import MedicalRecords from '../screens/MedicalRecords'
import FillProfile from '../screens/FillProfile';
import AboutUs from '../screens/AboutUs';
import Insurance from '../screens/Insurance';
import LabTest from '../screens/LabTest';
import LabReports from '../screens/LabReports';
import viewpdf from '../screens/LabReports/viewpdf';
import SelectPrescription from '../screens/SelectPrescription';
import MyOrder from '../screens/MyOrder';
import Appointments from '../screens/Appointments';
import NewCart from '../screens/NewCart'
import UploadReport from '../screens/UploadReport';
import COVID19 from '../screens/COVID19';
import ChangePass from '../screens/ChangePass';
import Vaccination from '../screens/Vaccination';
import PastHistory from '../screens/PastHistory';
import LabDetails from '../screens/LabDetails';
import PharmDetails from '../screens/PharmDetails';
import MyDoctors from '../screens/MyDoctors';
import MyAddresses from '../screens/MyAddresses';
import FindPharmacy from '../screens/FindPharmacy';
import PharmacyCatagories from '../screens/PharmacyCategory';
import FindDoctors from '../screens/FindDoctors';
import FindLabs from '../screens/FindLabs';
import BookLab from '../screens/BookLab';
import OrderDetails from '../screens/OrderDetails';
import LabReportsFilter from '../screens/LabReportsFilter';
import MyOrdersFilter from '../screens/MyOrdersFilter';
import ChatListScreen from '../screens/ChatListScreen';
import Chat from '../screens/Chat';
import Invoice from '../screens/Invoice';
import VaccinationDetails from '../screens/VaccinationDetails';
import ViewPrescription from '../screens/ViewPrescription';
import LabBookings from '../screens/LabBookings';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function AppHome() {
  return (
    <Tab.Navigator
      initialRouteName="AppHome"
      tabBarOptions={{
        activeTintColor: 'rgb(85,136,231)',
        style: {height: 65, borderTopRightRadius: 20, borderTopLeftRadius: 20},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.homeIcon} style={{height:40, width:40,marginTop:7,}}/>;
            } else if (focused == false) {
              return <Image source={Icons.homeIcon2} style={{height:30, width:30}} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="FindPharmacy"
        component={FindPharmacy}
        options={{
          tabBarLabel: 'Pharmacy',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.pharmacyIcon2} style={{height:30, width:30}}/>;
            } else if (focused == false) {
              return <Image source={Icons.pharmacyIcon} style={{height:30, width:30}}/>;
            }
          },
        }}
      />
      <Tab.Screen
        name="Reports"
        component={FindLabs}
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.recordsIcon2} style={{height:30, width:30}}/>;
            } else if (focused == false) {
              return <Image source={Icons.recordsIcon} style={{height:30, width:30}}/>;
            }
          },
        }}
      />
      <Tab.Screen
        name="Video"
        component={Videos}
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.videoIcon2} style={{height:30, width:30}}/>;
            } else if (focused == false) {
              return <Image source={Icons.videoIcon} style={{height:30, width:30}}/>;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />                
        <Stack.Screen name="SocialLogin" component={SocialLogin} />   
        <Stack.Screen name="Otp" component={Otp} />                   
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name="Pharmacy" component={Pharmacy}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Offer" component={Offers} />
        <Stack.Screen name="FindBook" component={FindAndBook} />
        <Stack.Screen name="DoctorCategory" component={DoctorCatagories} />
        <Stack.Screen name="TimeSlot1" component={TimeSlot1} />
        <Stack.Screen name="TimeSlot2" component={TimeSlot2} />
        <Stack.Screen name="TimeSlot3" component={TimeSlot3} />
        <Stack.Screen name="ClinicalScreen" component={ClinicalScreen} />
        <Stack.Screen name="DocDetailedCategory" component={DocDetailedCategory} />
        <Stack.Screen name="DocFilteration" component={DocFilteration} />
        <Stack.Screen name="DoctorScreen" component={DoctorScreen} />
        <Stack.Screen name="LabDetailedCategory" component={LabDetailedCategory} />
        <Stack.Screen name="Prescription_Picker" component={Prescription_Picker} />
        <Stack.Screen name="Members" component={Members}/>
        <Stack.Screen name="AddMember" component={AddMember}/>
        <Stack.Screen name="Notifications" component={Notifications}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Payments" component={Payments}/>
        <Stack.Screen name="Reminders" component={Reminders}/>
        <Stack.Screen name="Consultation" component={Consultation}/>
        <Stack.Screen name="MedicalRecords" component={MedicalRecords}/>
        <Stack.Screen name="FillProfile" component={FillProfile}/>
        <Stack.Screen name="AboutUs" component={AboutUs}/>
        <Stack.Screen name="Insurance" component={Insurance}/>
        <Stack.Screen name="LabTest" component={LabTest}/>
        <Stack.Screen name="LabReports" component={LabReports}/>
        <Stack.Screen name="viewpdf" component={viewpdf}/>
        <Stack.Screen name="Reports" component={Reports}/>
        <Stack.Screen name="SelectPrescription" component={SelectPrescription}/>
        <Stack.Screen name="MyOrder" component={MyOrder}/>
        <Stack.Screen name="Appointments" component={Appointments}/>
        <Stack.Screen name="NewCart" component={NewCart}/>
        <Stack.Screen name="UploadReport" component={UploadReport}/>
        <Stack.Screen name="COVID19" component={COVID19}/>
        <Stack.Screen name="ChangePassword" component={ChangePass}/>
        <Stack.Screen name="Vaccination" component={Vaccination}/>
        <Stack.Screen name="PastHistory" component={PastHistory}/>
        <Stack.Screen name="LabDetails" component={LabDetails}/>
        <Stack.Screen name="PharmDetails" component={PharmDetails}/>
        <Stack.Screen name="MyDoctors" component={MyDoctors}/>
        <Stack.Screen name="MyAddresses" component={MyAddresses}/>
        <Stack.Screen name="FindPharmacy" component={FindPharmacy}/>
        <Stack.Screen name="FindDoctors" component={FindDoctors}/>
        <Stack.Screen name="FindLabs" component={FindLabs}/>
        <Stack.Screen name="BookLab" component={BookLab}/>
        <Stack.Screen name="OrderDetails" component={OrderDetails}/>
        <Stack.Screen name="LabReportsFilter" component={LabReportsFilter}/>
        <Stack.Screen name="MyOrdersFilter" component={MyOrdersFilter}/>
        <Stack.Screen name="ChatListScreen" component={ChatListScreen}/>
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="Invoice" component={Invoice}/>
        <Stack.Screen name="PharmacyCatagories" component={PharmacyCatagories}/>
        <Stack.Screen name="VacinationDetails" component={VaccinationDetails}/>
        <Stack.Screen name="ViewPrescription" component={ViewPrescription}/>
        <Stack.Screen name="LabBookings" component={LabBookings}/>
        <Stack.Screen name="Videos" component={Videos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
