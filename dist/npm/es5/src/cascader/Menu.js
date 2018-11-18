'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var CascaderMenu = function (_Component) {
  (0, _inherits3.default)(CascaderMenu, _Component);

  function CascaderMenu(props) {
    (0, _classCallCheck3.default)(this, CascaderMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CascaderMenu.__proto__ || Object.getPrototypeOf(CascaderMenu)).call(this, props));

    _this.state = {
      inputWidth: 0,
      options: [],
      props: {},
      visible: false,
      activeValue: [],
      value: [],
      expandTrigger: 'click',
      changeOnSelect: false,
      popperClass: ''
    };
    return _this;
  }

  (0, _createClass3.default)(CascaderMenu, [{
    key: 'parent',
    value: function parent() {
      return this.context.component;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.parent().initMenu(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props, state) {
      if (state.value !== this.state.value || state.visible !== this.state.visible) {
        this.setState({ activeValue: this.state.value });
      }
    }
  }, {
    key: 'select',
    value: function select(item, menuIndex) {
      var activeValue = this.state.activeValue;

      if (item.__IS__FLAT__OPTIONS) {
        activeValue = item.value;
      } else {
        if (!menuIndex) {
          activeValue = [item.value];
        } else {
          activeValue.splice(menuIndex, activeValue.length - 1, item.value);
        }
      }

      this.forceUpdate();
      this.parent().handlePick(activeValue);
    }
  }, {
    key: 'handleMenuLeave',
    value: function handleMenuLeave() {}
  }, {
    key: 'activeItem',
    value: function activeItem(item, menuIndex) {
      var activeOptions = this.activeOptions();

      this.state.activeValue.splice(menuIndex, activeOptions.length, item.value);

      this.forceUpdate();

      if (this.parent().props.changeOnSelect) {
        this.parent().handlePick(this.state.activeValue, false);
      } else {
        this.parent().handleActiveItemChange(this.state.activeValue);
      }
    }

    /* Computed Methods */

  }, {
    key: 'activeOptions',
    value: function activeOptions() {
      var _this2 = this;

      var activeValue = this.state.activeValue;
      var configurableProps = ['label', 'value', 'children', 'disabled'];
      var formatOptions = function formatOptions(options) {
        options.forEach(function (option) {
          if (option.__IS__FLAT__OPTIONS) return;
          configurableProps.forEach(function (prop) {
            var value = option[_this2.parent().props.props[prop] || prop];
            if (value) option[prop] = value;
          });
          if (Array.isArray(option.children)) {
            formatOptions(option.children);
          }
        });
      };
      var loadActiveOptions = function loadActiveOptions(options) {
        var activeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var level = activeOptions.length;
        activeOptions[level] = options;
        var active = activeValue[level];
        if (active) {
          options = options.filter(function (option) {
            return option.value === active;
          })[0];
          if (options && options.children) {
            loadActiveOptions(options.children, activeOptions);
          }
        }
        return activeOptions;
      };

      formatOptions(this.state.options);

      return loadActiveOptions(this.state.options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _parent$props = this.parent().props,
          expandTrigger = _parent$props.expandTrigger,
          popperClass = _parent$props.popperClass;
      var _state = this.state,
          activeValue = _state.activeValue,
          visible = _state.visible;

      var activeOptions = this.activeOptions();

      var menus = activeOptions.map(function (menu, menuIndex) {
        var isFlat = false;

        var items = menu.map(function (item, index) {
          var events = {};

          if (item.__IS__FLAT__OPTIONS) isFlat = true;

          if (!item.disabled) {
            if (item.children) {
              var triggerEvent = {
                click: 'onClick',
                hover: 'onMouseEnter'
              }[expandTrigger];
              events[triggerEvent] = function () {
                _this3.activeItem(item, menuIndex);
              };
            } else {
              events.onClick = function () {
                _this3.select(item, menuIndex);
              };
            }
          }

          return React.createElement(
            'li',
            (0, _extends3.default)({ key: index, className: _this3.classNames({
                'el-cascader-menu__item': true,
                'el-cascader-menu__item--extensible': item.children,
                'is-active': item.value === activeValue[menuIndex],
                'is-disabled': item.disabled
              })
            }, events),
            item.label
          );
        });

        var menuStyle = {};

        if (isFlat) {
          menuStyle.minWidth = _this3.inputWidth + 'px';
        }

        return React.createElement(
          'ul',
          { key: menuIndex, className: _this3.classNames({
              'el-cascader-menu': true,
              'el-cascader-menu--flexible': isFlat
            }), style: menuStyle },
          items
        );
      });

      return React.createElement(
        _libs.Transition,
        { name: 'el-zoom-in-top' },
        React.createElement(
          _libs.View,
          { show: visible },
          React.createElement(
            'div',
            { className: this.classNames('el-cascader-menus', popperClass) },
            menus
          )
        )
      );
    }
  }]);
  return CascaderMenu;
}(_libs.Component);

var _default = CascaderMenu;
exports.default = _default;


CascaderMenu.contextTypes = {
  component: _libs.PropTypes.any
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CascaderMenu, 'CascaderMenu', 'src/cascader/Menu.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/cascader/Menu.jsx');
}();

;