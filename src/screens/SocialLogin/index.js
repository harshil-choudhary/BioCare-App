import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-input';
import SwipeButton from 'rn-swipe-button';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';

class SocialLogin extends Component {
  constructor() {
    super();

    this.state = {
      btn1: Images.socialLoginArrow,
      btn2: Images.socialLoginArrow,
      btn3: Images.socialLoginArrow,
    };
  }

  render() {
    return (
      <>
        <View style={styles.wrapper}>
          <View style={styles.bg}>
            <View style={styles.upperCont}>
              <TouchableOpacity
                style={styles.arrowCont}
                onPress={() => this.props.navigation.goBack()}>
                <Image source={Icons.BackIcon2} />
              </TouchableOpacity>
            </View>
            <View style={styles.textCont}>
              <Text style={styles.heading}>Choose an account</Text>
            </View>
            <View style={styles.socialCont}>
              <View style={styles.socialRow}>
                <View style={styles.iconTxtCont}>
                  <Image source={Images.fbLogo} style={styles.fbLogo}/>
                  <Text style={styles.socialText}>Facebook</Text>
                </View>
                <View style={styles.btnCont}>
                  <SwipeButton
                    height={height * 0.06}
                    width={width * 0.25}
                    thumbIconImageSource={this.state.btn1}
                    onSwipeStart={() =>
                      this.setState({btn1: Images.socialLoginArrow2})
                    }
                    onSwipeFail={() =>
                      this.setState({btn1: Images.socialLoginArrow})
                    }
                    onSwipeSuccess={() => alert('Facebook Login pressed')}
                    containerStyles={styles.btn}
                    railBackgroundColor={'#ffffff'}
                    railFillBackgroundColor={'#59A3EE'}
                    railFillBorderColor={'#59A3EE'}
                    thumbIconBackgroundColor={'#ffffff'}
                    thumbIconStyles={{
                      borderWidth: 0,
                    }}
                    title=""
                  />
                </View>
              </View>
              <View style={styles.socialRow}>
                <View style={styles.iconTxtCont}>
                  <Image source={Images.googleLogo} style={styles.googleLogo}/>
                  <Text style={styles.socialText}>Google</Text>
                </View>
                <View style={styles.btnCont}>
                  <SwipeButton
                    height={height * 0.06}
                    width={width * 0.25}
                    thumbIconImageSource={this.state.btn2}
                    onSwipeStart={() =>
                      this.setState({btn2: Images.socialLoginArrow2})
                    }
                    onSwipeFail={() =>
                      this.setState({btn2: Images.socialLoginArrow})
                    }
                    onSwipeSuccess={() => alert('Google login pressed')}
                    containerStyles={styles.btn}
                    railBackgroundColor={'#ffffff'}
                    railFillBackgroundColor={'#59A3EE'}
                    railFillBorderColor={'#59A3EE'}
                    thumbIconBackgroundColor={'#ffffff'}
                    thumbIconStyles={{
                      borderWidth: 0,
                    }}
                    title=""
                  />
                </View>
              </View>
              <View style={styles.socialRow}>
                <View style={styles.iconTxtCont}>
                  <Image source={Images.appleLogo} style={styles.appleLogo}/>
                  <Text style={styles.socialText}>Apple</Text>
                </View>
                <View style={styles.btnCont}>
                  <SwipeButton
                    height={height * 0.06}
                    width={width * 0.25}
                    thumbIconImageSource={this.state.btn3}
                    onSwipeStart={() =>
                      this.setState({btn3: Images.socialLoginArrow2})
                    }
                    onSwipeFail={() =>
                      this.setState({btn3: Images.socialLoginArrow})
                    }
                    onSwipeSuccess={() => alert('Apple login pressed')}
                    containerStyles={styles.btn}
                    railBackgroundColor={'#ffffff'}
                    railFillBackgroundColor={'#59A3EE'}
                    railFillBorderColor={'#59A3EE'}
                    thumbIconBackgroundColor={'#ffffff'}
                    thumbIconStyles={{
                      borderWidth: 0,
                    }}
                    title=""
                  />
                </View>
              </View>
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
})(SocialLogin);


