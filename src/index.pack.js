/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import React from 'react'
// import Chatkit from '@pusher/chatkit'
// import MessageList from './components/MessageList'
// import SendMessageForm from './components/SendMessageForm'
// import RoomList from './components/RoomList'
// import NewRoomForm from './components/NewRoomForm'

// import { tokenUrl, instanceLocator, userId, roomId, secretKey } from './config'
// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             messages: []
//         }
//     }

//     componentDidMount() {
//         const chatManager = new Chatkit.ChatManager({
//             instanceLocator,
//             key: secretKey
//             userId: userId,
//             tokenProvider: new Chatkit.TokenProvider({
//                 url: tokenUrl
//             })
//         })

//         chatManager.connect()
//         .then(currentUser => {
//             currentUser.subscribeToRoom({
//                 roomId: roomId,
//                 hooks: {
//                     onNewMessage: message => {
//                         console.log('message.text', message.text)
//                         this.setState({
//                             messages: [...this.state.messages, message]
//                         })
//                     }
//                 }
//             })
//         })
//     }

//     render() {
//         return (
//             <div className="app">
//                 <RoomList />
//                 <MessageList messages={this.state.messages} />
//                 <SendMessageForm />
//                 <NewRoomForm />
//             </div>
//         );
//     }
// }

// export default App


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/kevan/Desktop/other_github_dirs/scrimba-chatkit-react/node_modules/react-dom/index.js'");

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/kevan/Desktop/other_github_dirs/scrimba-chatkit-react/node_modules/react/index.js'");

/***/ })

/******/ });