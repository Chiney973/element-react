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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

var _libs = require('../../libs');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover(props) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.state = {
      showPopper: false
    };
    return _this;
  }

  (0, _createClass3.default)(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var trigger = this.props.trigger,
          popper = this.refs.popper;

      this.element = _reactDom2.default.findDOMNode(this);
      this.reference = _reactDom2.default.findDOMNode(this.refs.reference);

      if (this.reference === null) return;

      if (trigger === 'click') {
        this.reference.addEventListener('click', function () {
          _this2.setState({
            showPopper: !_this2.state.showPopper
          });
        });

        document.addEventListener('click', function (e) {
          if (!_this2.element || _this2.element.contains(e.target) || !_this2.reference || _this2.reference.contains(e.target) || !popper || popper.contains(e.target)) return;

          _this2.setState({
            showPopper: false
          });
        });
      } else if (trigger === 'hover') {
        this.reference.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        this.reference.addEventListener('mouseleave', this.handleMouseLeave.bind(this));

        popper.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        popper.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      } else {
        if (this.reference.nodeName === 'INPUT' || this.reference.nodeName === 'TEXTAREA') {
          this.reference.addEventListener('focus', function () {
            _this2.setState({ showPopper: true });
          });
          this.reference.addEventListener('blur', function () {
            _this2.setState({ showPopper: false });
          });
        } else {
          this.reference.addEventListener('mousedown', function () {
            _this2.setState({ showPopper: true });
          });
          this.reference.addEventListener('mouseup', function () {
            _this2.setState({ showPopper: false });
          });
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.visible !== this.props.visible) {
        this.setState({
          showPopper: props.visible
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reference.parentNode.replaceChild(this.reference.cloneNode(true), this.reference);
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      clearTimeout(this.timer);

      this.setState({
        showPopper: true
      });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      var _this3 = this;

      this.timer = setTimeout(function () {
        _this3.setState({
          showPopper: false
        });
      }, 200);
    }
  }, {
    key: 'onEnter',
    value: function onEnter() {
      if (this.refs.arrow) {
        this.refs.arrow.setAttribute('x-arrow', '');
      }

      this.popperJS = new _popper2.default(this.reference, this.refs.popper, {
        placement: this.props.placement,
        modifiers: {
          computeStyle: {
            gpuAcceleration: false
          }
        }
      });
    }
  }, {
    key: 'onAfterLeave',
    value: function onAfterLeave() {
      this.popperJS.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          transition = _props.transition,
          popperClass = _props.popperClass,
          width = _props.width,
          title = _props.title,
          content = _props.content,
          visibleArrow = _props.visibleArrow;


      return React.createElement(
        'span',
        null,
        React.createElement(
          _libs.Transition,
          { name: transition, onEnter: this.onEnter.bind(this), onAfterLeave: this.onAfterLeave.bind(this) },
          React.createElement(
            _libs.View,
            { show: this.state.showPopper },
            React.createElement(
              'div',
              { ref: 'popper', className: this.className('el-popover', popperClass), style: this.style({ width: Number(width) }) },
              title && React.createElement(
                'div',
                { className: 'el-popover__title' },
                title
              ),
              content,
              visibleArrow && React.createElement('div', { ref: 'arrow', className: 'popper__arrow' })
            )
          )
        ),
        React.cloneElement(React.Children.only(this.props.children), { ref: 'reference' })
      );
    }
  }]);
  return Popover;
}(_libs.Component);

Popover.defaultProps = {
  visibleArrow: true,
  transition: 'fade-in-linear',
  trigger: 'click',
  placement: 'bottom',
  width: 150
};
var _default = Popover;
exports.default = _default;


Popover.propTypes = {
  width: _libs.PropTypes.oneOfType([_libs.PropTypes.number, _libs.PropTypes.string]),
  placement: _libs.PropTypes.oneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']),
  trigger: _libs.PropTypes.oneOf(['click', 'focus', 'hover']),
  title: _libs.PropTypes.string,
  content: _libs.PropTypes.oneOfType([_libs.PropTypes.node, _libs.PropTypes.string]),
  popperClass: _libs.PropTypes.string,
  transition: _libs.PropTypes.string,
  visible: _libs.PropTypes.bool,
  visibleArrow: _libs.PropTypes.bool
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Popover, 'Popover', 'src/popover/Popover.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/popover/Popover.jsx');
}();

;