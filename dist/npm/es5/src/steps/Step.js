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

var _libs = require('../../libs');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Step = function (_Component) {
  (0, _inherits3.default)(Step, _Component);

  function Step(props) {
    (0, _classCallCheck3.default)(this, Step);
    return (0, _possibleConstructorReturn3.default)(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));
  }

  (0, _createClass3.default)(Step, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          icon = _props.icon,
          description = _props.description,
          status = _props.status,
          direction = _props.direction,
          style = _props.style,
          lineStyle = _props.lineStyle,
          stepNumber = _props.stepNumber;

      var directionClass = 'is-' + direction;
      var statusClass = 'is-' + status;
      var iconNode = icon ? React.createElement('i', { className: 'el-icon-' + icon }) : React.createElement(
        'div',
        null,
        stepNumber
      );

      return React.createElement(
        'div',
        {
          style: this.style(style),
          className: this.className('el-step', directionClass)
        },
        React.createElement(
          'div',
          {
            className: this.classNames('el-step__head', statusClass, {
              'is-text': !icon
            })
          },
          React.createElement(
            'div',
            {
              className: this.classNames('el-step__line', directionClass, {
                'is-icon': icon
              })
            },
            React.createElement('i', { className: 'el-step__line-inner', style: lineStyle })
          ),
          React.createElement(
            'span',
            { className: 'el-step__icon' },
            status !== 'success' && status !== 'error' ? iconNode : React.createElement('i', {
              className: 'el-icon-' + (status === 'success' ? 'check' : 'close')
            })
          )
        ),
        React.createElement(
          'div',
          { className: 'el-step__main' },
          React.createElement(
            'div',
            {
              ref: 'title',
              className: this.classNames('el-step__title', statusClass)
            },
            title
          ),
          React.createElement(
            'div',
            { className: this.classNames('el-step__description', statusClass) },
            description
          )
        )
      );
    }
  }]);
  return Step;
}(_libs.Component);

Step.defaultProps = {
  status: 'wait'
};
var _default = Step;
exports.default = _default;


Step.propTypes = {
  title: _libs.PropTypes.string,
  icon: _libs.PropTypes.string,
  description: _libs.PropTypes.oneOfType([_libs.PropTypes.string, _libs.PropTypes.node]),
  status: _libs.PropTypes.string,
  direction: _libs.PropTypes.string,
  style: _libs.PropTypes.object,
  lineStyle: _libs.PropTypes.object,
  stepNumber: _libs.PropTypes.number
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Step, 'Step', 'src/steps/Step.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/steps/Step.jsx');
}();

;