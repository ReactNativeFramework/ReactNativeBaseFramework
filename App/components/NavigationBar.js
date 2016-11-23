/**
 * Created by atide on 16/11/2.
 */

import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import commonStyle from '../style/CommonStyle';

const windowWidth = Dimensions.get('window').width;

const defaultNavigationHeight = 50;
const defaultButtonHeight = defaultNavigationHeight - 25;//左侧图片的高度


const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: commonStyle.MAIN_COLOR,
    height: defaultNavigationHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: commonStyle.GRAY_COLOR,
    flexDirection: 'row'
  },
  navigationBarTitleContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 80,
    right: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBarTitle: {
    color: commonStyle.TEXT_COLOR,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  leftButton: {
    paddingHorizontal: 8,
    height: defaultNavigationHeight,
    // backgroundColor: 'red',//test
    justifyContent: 'center',//主轴
    alignItems: 'flex-end'
  },
  rightButton: {
    paddingHorizontal: 8,
    height: defaultNavigationHeight,
    // backgroundColor: 'red',//test
    justifyContent: 'center',//主轴
    alignItems: 'flex-start'//

  },
  rightButtonTextStyle: {
    color: commonStyle.TEXT_GRAY_COLOR,
    textAlign: 'right',
    fontSize: 16,
    marginRight: 10
  },
  image: {
    height: defaultButtonHeight,
    width: defaultButtonHeight
  }
});

const defaultNavigationBarProps = {
  hideNav: false,
  hideLeftButton: false,
  hideRightButton: false,
  leftButtonImage:require('../img/return.png'),
  title:'标题'
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, props.navigationBarProps);
    this.renderRight = this.renderRight.bind(this);
    this.renderLeftButton = this.renderLeftButton.bind(this);
    this.renderRightButton = this.renderRightButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, nextProps.navigationBarProps);
  }

  renderLeftButton() {
    if (this.navigationBarProps.hideLeftButton) {
      return null;
    }
    var {onLeftPressed} = this.props;
    return (
      <TouchableOpacity onPress={onLeftPressed} style={[styles.leftButton, this.navigationBarProps.leftButton]}>
        <Image style={styles.image} resizeMode="contain" source={this.navigationBarProps.leftButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderRightButton() {
    if (this.navigationBarProps.hideRightButton) {
      return null;
    }
    //优先image, text次之
    var {onRightPressed} = this.props;
    var component;
    if (this.navigationBarProps.rightButtonImage) {
      component = (
        <Image style={styles.image} resizeMode="contain" source={this.navigationBarProps.rightButtonImage}/>
      );
    }
    else if (this.navigationBarProps.rightTitle && this.navigationBarProps.rightTitle !== '') {
      component = (
        <Text style={[styles.rightButtonTextStyle, this.navigationBarProps.rightButtonTextStyle]}>{this.navigationBarProps.rightTitle}</Text>
      );
    } else {
      return null;
    }

    return (
      <TouchableOpacity onPress={onRightPressed} style={[styles.rightButton, this.navigationBarProps.rightButton]}>
        {component}
      </TouchableOpacity>
    );
  }

  renderRight() {
    return (
      <View style={{flexDirection: 'row'}}>
        {this.renderRightButton()}
      </View>
    );
  }

  render() {
    var {hideNav, title} = this.navigationBarProps;
    if (hideNav) {
      return null;
    }
    return (
      <View style={[styles.navigationBar, this.navigationBarProps.navigationBar]}>
        {this.renderLeftButton()}
        {this.renderRight()}
        <View style={styles.navigationBarTitleContainer}>
          <Text numberOfLines={1} style={[styles.navigationBarTitle, this.navigationBarProps.navigationBarTitle]}>{title}</Text>
        </View>
      </View>
    );
  }
}

export default NavigationBar;
