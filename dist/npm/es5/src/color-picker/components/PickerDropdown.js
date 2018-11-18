'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _SvPanel = require('./SvPanel');

var _SvPanel2 = _interopRequireDefault(_SvPanel);

var _HueSlider = require('./HueSlider');

var _HueSlider2 = _interopRequireDefault(_HueSlider);

var _AlphaSlider = require('./AlphaSlider');

var _AlphaSlider2 = _interopRequireDefault(_AlphaSlider);

var _libs = require('../../../libs');

var _locale = require('../../locale');

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerDropdown = function (_Component) {
  (0, _inherits3.default)(PickerDropdown, _Component);

  function PickerDropdown(props) {
    (0, _classCallCheck3.default)(this, PickerDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (PickerDropdown.__proto__ || Object.getPrototypeOf(PickerDropdown)).call(this, props));
  }

  (0, _createClass3.default)(PickerDropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          color = _props.color,
          showAlpha = _props.showAlpha,
          onPick = _props.onPick,
          onClear = _props.onClear,
          showPicker = _props.showPicker;

      var currentColor = color.value;
      return React.createElement(
        _libs.Transition,
        { name: 'el-zoom-in-top' },
        React.createElement(
          _libs.View,
          { show: showPicker },
          React.createElement(
            'div',
            { className: 'el-color-dropdown el-color-picker__panel' },
            React.createElement(
              'div',
              { className: 'el-color-dropdown__main-wrapper' },
              React.createElement(_HueSlider2.default, {
                ref: 'hue',
                color: color,
                vertical: true,
                onChange: function onChange(color) {
                  return _this2.props.onChange(color);
                }
              }),
              React.createElement(_SvPanel2.default, {
                ref: 'sl',
                color: color,
                onChange: function onChange(color) {
                  return _this2.props.onChange(color);
                }
              })
            ),
            showAlpha && React.createElement(_AlphaSlider2.default, { ref: 'alpha', color: color }),
            React.createElement(
              'div',
              { className: 'el-color-dropdown__btns' },
              React.createElement(
                'span',
                { className: 'el-color-dropdown__value' },
                currentColor
              ),
              React.createElement(
                'a',
                {
                  href: 'JavaScript:',
                  className: 'el-color-dropdown__link-btn',
                  onClick: function onClick() {
                    return onClear();
                  }
                },
                _locale2.default.t('el.colorpicker.clear')
              ),
              React.createElement(
                'button',
                {
                  className: 'el-color-dropdown__btn',
                  onClick: function onClick() {
                    return onPick();
                  }
                },
                _locale2.default.t('el.colorpicker.confirm')
              )
            )
          )
        )
      );
    }
  }]);
  return PickerDropdown;
}(_libs.Component);

var _default = PickerDropdown;
exports.default = _default;


PickerDropdown.propTypes = {
  color: _libs.PropTypes.object.isRequired,
  showPicker: _libs.PropTypes.bool,
  showAlpha: _libs.PropTypes.bool,
  onPick: _libs.PropTypes.func,
  onClear: _libs.PropTypes.func,
  onChange: _libs.PropTypes.func
};

PickerDropdown.defaultProps = {
  onPick: function onPick() {},
  onClear: function onClear() {},
  onChange: function onChange() {}
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PickerDropdown, 'PickerDropdown', 'src/color-picker/components/PickerDropdown.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/color-picker/components/PickerDropdown.jsx');
}();

;