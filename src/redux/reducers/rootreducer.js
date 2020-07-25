import { combineReducers } from "redux"
import example from "./example"
import clinic from "./clinic"
import pharmacy from "./pharmacy"
import labs from "./labs"
import pharmacy_details from "./pharmacy_details"
import my_appointments from "./my_appointments"
import my_doctors from "./my_doctors"
import my_reports from "./my_reports"
import my_orders from "./my_orders"
import my_payments from "./my_payments"
import covid_form from "./covid_form"
import uploaded_reports from "./uploaded_reports"
import vaccination_list from "./vaccination_list"
import past_history from "./past_history"
import family_members from "./family_members"
import myAddress from "./myAddress"
import getLocation from "./getLocation"
import getOffers from "./getOffers"
import lab_profile from "./lab_profile"
import get_available_dates from "./get_available_dates"
import videoList from "./videoList"
import get_available_time_slots from "./get_available_time_slots"
import notifications from "./notifications"
import testList from "./testList"
import getProfile from "./getProfile"
import add_family_member from "./add_family_member"
import save_covid_form from "./save_covid_form"
import lab_categories from "./lab_categories"
import pharmacy_categories from "./pharmacy_categories"
import doctors from "./doctors"
import onlineConsultation from "./onlineConsultation"
import myPrescriptions from "./myPrescriptions"
import saveOrder from "./saveOrder"
import lab_bookings from "./lab_bookings"
import cancelAppointment from "./cancelAppointment"
import cancelLabBooking from "./cancelLabBooking"
import past_history_save from "./past_history_save"

const rootReducer = combineReducers({
  example: example,
  clinic:clinic,
  pharmacy:pharmacy,
  labs:labs,
  pharmacy_details:pharmacy_details,
  my_appointments:my_appointments,
  my_doctors:my_doctors,
  my_reports:my_reports,
  my_payments:my_payments,
  covid_form:covid_form,
  uploaded_reports:uploaded_reports,
  vaccination_list:vaccination_list,
  past_history:past_history,
  family_members:family_members,
  myAddress:myAddress,
  getLocation:getLocation,
  getOffers:getOffers,
  my_orders:my_orders,
  lab_profile:lab_profile,
  get_available_dates:get_available_dates,
  videoList:videoList,
  get_available_time_slots:get_available_time_slots,
  notifications:notifications,
  testList:testList,
  getProfile:getProfile,
  add_family_member:add_family_member,
  save_covid_form:save_covid_form,
  lab_categories:lab_categories,
  pharmacy_categories:pharmacy_categories,
  doctors:doctors,
  onlineConsultation:onlineConsultation,
  myPrescriptions:myPrescriptions,
  saveOrder:saveOrder,
  lab_bookings:lab_bookings,
  cancelAppointment:cancelAppointment,
  cancelLabBooking:cancelLabBooking,
  past_history_save:past_history_save,
})

export default rootReducer
