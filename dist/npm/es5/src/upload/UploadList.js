'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _src = require('../../src');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UploadList = function (_Component) {
  (0, _inherits3.default)(UploadList, _Component);

  function UploadList(props) {
    (0, _classCallCheck3.default)(this, UploadList);
    return (0, _possibleConstructorReturn3.default)(this, (UploadList.__proto__ || Object.getPrototypeOf(UploadList)).call(this, props));
  }

  (0, _createClass3.default)(UploadList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _context = this.context,
          onPreview = _context.onPreview,
          onRemove = _context.onRemove;
      var _props = this.props,
          listType = _props.listType,
          fileList = _props.fileList;

      var isFinished = function isFinished(status) {
        return status === 'success';
      };
      return React.createElement(
        _libs.Transition,
        {
          name: 'list'
        },
        React.createElement(
          'ul',
          {
            className: this.classNames((0, _defineProperty3.default)({
              'el-upload-list': true
            }, 'el-upload-list--' + listType, true))
          },
          fileList.map(function (file) {
            return React.createElement(
              'li',
              {
                className: _this2.classNames((0, _defineProperty3.default)({
                  'el-upload-list__item': true
                }, 'is-' + file.status, true)),
                key: file.uid
              },
              ['picture-card', 'picture'].includes(listType) && isFinished(file.status) && React.createElement('img', {
                className: 'el-upload-list__item-thumbnail',
                src: file.url,
                alt: ''
              }),
              React.createElement(
                'a',
                {
                  className: 'el-upload-list__item-name',
                  onClick: function onClick() {
                    return onPreview(file);
                  }
                },
                React.createElement('i', { className: 'el-icon-document' }),
                file.name
              ),
              React.createElement(
                'label',
                {
                  className: 'el-upload-list__item-status-label'
                },
                React.createElement('i', {
                  className: _this2.classNames({
                    'el-icon-upload-success': true,
                    'el-icon-circle-check': listType === 'text',
                    'el-icon-check': ['picture-card', 'picture'].includes(listType)
                  })
                })
              ),
              React.createElement('i', { className: 'el-icon-close', onClick: function onClick() {
                  return onRemove(file);
                } }),
              React.createElement(
                _libs.View,
                {
                  className: 'el-upload-list__item-actions',
                  show: listType === 'picture-card' && isFinished(file.status)
                },
                React.createElement(
                  'span',
                  null,
                  React.createElement(
                    'span',
                    {
                      onClick: function onClick() {
                        return onPreview(file);
                      },
                      className: 'el-upload-list__item-preview'
                    },
                    React.createElement('i', { className: 'el-icon-view' })
                  ),
                  React.createElement(
                    'span',
                    {
                      className: 'el-upload-list__item-delete',
                      onClick: function onClick() {
                        return onRemove(file);
                      }
                    },
                    React.createElement('i', { className: 'el-icon-delete2' })
                  )
                )
              ),
              file.status === 'uploading' && React.createElement(_src.Progress, {
                strokeWidth: listType === 'picture-card' ? 6 : 2,
                type: listType === 'picture-card' ? 'circle' : 'line',
                percentage: parseInt(file.percentage, 10),
                status: isFinished(file.status) && file.showProgress ? 'success' : ''
              })
            );
          })
        )
      );
    }
  }]);
  return UploadList;
}(_libs.Component);

var _default = UploadList;
exports.default = _default;


UploadList.contextTypes = {
  onPreview: _libs.PropTypes.func,
  onRemove: _libs.PropTypes.func
};

UploadList.propTypes = {
  listType: _libs.PropTypes.string,
  fileList: _libs.PropTypes.array
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UploadList, 'UploadList', 'src/upload/UploadList.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/upload/UploadList.jsx');
}();

;