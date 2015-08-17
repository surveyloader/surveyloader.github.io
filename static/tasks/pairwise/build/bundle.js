/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(2);

	var _radium2 = _interopRequireDefault(_radium);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _globalServicesPre = __webpack_require__(4);

	var _globalServicesColorScheme = __webpack_require__(15);

	var _globalServicesColorScheme2 = _interopRequireDefault(_globalServicesColorScheme);

	var _globalComponentsAspect = __webpack_require__(21);

	var _globalComponentsAspect2 = _interopRequireDefault(_globalComponentsAspect);

	var _globalComponentsButton = __webpack_require__(24);

	var _globalComponentsButton2 = _interopRequireDefault(_globalComponentsButton);

	var App = (function (_React$Component) {
	  function App(props) {
	    _classCallCheck(this, _App);

	    _React$Component.call(this, props);
	    this.state = { choice: 0 };
	  }

	  _inherits(App, _React$Component);

	  var _App = App;

	  _App.prototype.choose = function choose(option) {
	    var _props = this.props;
	    var push = _props.push;
	    var pairwise_tradeoffs = _props.pairwise_tradeoffs;
	    var specs = _props.specs;
	    var $aspect0$ = specs.$aspect0$;
	    var $aspect1$ = specs.$aspect1$;

	    var choice = this.state.choice * 2 + option;
	    this.setState({ choice: choice });
	    if (choice + 1 > pairwise_tradeoffs.length) {
	      var _push;

	      push((_push = {}, _push['pairwise_' + $aspect0$ + '_' + $aspect1$] = choice, _push));
	    }
	  };

	  _App.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var submit = _props2.submit;
	    var pairwise_instructions = _props2.pairwise_instructions;
	    var pairwise_tradeoffs = _props2.pairwise_tradeoffs;
	    var pairwise_like = _props2.pairwise_like;
	    var pairwise_dislike = _props2.pairwise_dislike;
	    var $aspect0$_text = _props2.$aspect0$_text;
	    var $aspect0$_index = _props2.$aspect0$_index;
	    var $aspect0$_rating = _props2.$aspect0$_rating;
	    var $aspect1$_text = _props2.$aspect1$_text;
	    var $aspect1$_index = _props2.$aspect1$_index;
	    var $aspect1$_rating = _props2.$aspect1$_rating;
	    var choice = this.state.choice;

	    return _react2['default'].createElement(
	      'div',
	      { style: [styles.main] },
	      _react2['default'].createElement(
	        'div',
	        { style: [styles.container] },
	        _react2['default'].createElement(
	          'div',
	          { style: [styles.half] },
	          _react2['default'].createElement(_globalComponentsAspect2['default'], {
	            text: $aspect0$_text,
	            rating: $aspect0$_rating,
	            color: _globalServicesColorScheme2['default'].index($aspect0$_index),
	            delta: pairwise_tradeoffs[choice][0]
	          }),
	          _react2['default'].createElement(_globalComponentsAspect2['default'], {
	            text: $aspect1$_text,
	            rating: $aspect1$_rating,
	            color: _globalServicesColorScheme2['default'].index($aspect1$_index),
	            delta: 0
	          }),
	          _react2['default'].createElement(_globalComponentsButton2['default'], {
	            modStyle: { marginTop: 15 },
	            text: pairwise_dislike,
	            handler: function () {
	              return _this.choose.bind(_this)(1);
	            }
	          })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { style: [styles.half] },
	          _react2['default'].createElement(_globalComponentsAspect2['default'], {
	            text: $aspect0$_text,
	            rating: $aspect0$_rating,
	            color: _globalServicesColorScheme2['default'].index($aspect0$_index),
	            delta: 0
	          }),
	          _react2['default'].createElement(_globalComponentsAspect2['default'], {
	            text: $aspect1$_text,
	            rating: $aspect1$_rating,
	            color: _globalServicesColorScheme2['default'].index($aspect1$_index),
	            delta: pairwise_tradeoffs[choice][1]
	          }),
	          _react2['default'].createElement(_globalComponentsButton2['default'], {
	            modStyle: { marginTop: 15 },
	            text: pairwise_like,
	            handler: function () {
	              return _this.choose.bind(_this)(2);
	            }
	          })
	        )
	      )
	    );
	  };

	  _createClass(_App, null, [{
	    key: 'propTypes',
	    value: {
	      push: _react.PropTypes.func.isRequired,
	      pairwise_instructions: _react.PropTypes.string.isRequired,
	      pairwise_like: _globalServicesPre.PrePropType.string.of(['dislike', 'like']),
	      pairwise_dislike: _globalServicesPre.PrePropType.string.of(['dislike', 'like']),
	      pairwise_tradeoffs: _react.PropTypes.array,
	      $aspect0$_text: _react.PropTypes.string.isRequired,
	      $aspect0$_index: _react.PropTypes.number.isRequired,
	      $aspect0$_rating: _globalServicesPre.PrePropType.number.of(_lodash2['default'].range(0, 101)),
	      $aspect1$_text: _react.PropTypes.string.isRequired,
	      $aspect1$_index: _react.PropTypes.number.isRequired,
	      $aspect1$_rating: _globalServicesPre.PrePropType.number.of(_lodash2['default'].range(0, 101))
	    },
	    enumerable: true
	  }, {
	    key: 'outputTypes',
	    value: {
	      pairwise_$aspect0$_$aspect1$_choice: _globalServicesPre.PrePropType.number.of(_lodash2['default'].range(7, 15)),
	      pairwise_$aspect0$_$aspect1$_order: _globalServicesPre.PrePropType.number.of([1, -1]),
	      pairwise_$aspect0$_$aspect1$_sign: _globalServicesPre.PrePropType.number.of([1, -1])
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      pairwise_like: 'I prefer this option',
	      pairwise_dislike: 'I prefer this option',
	      pairwise_tradeoffs: [[4, 4], [1, 4], [4, 1], [1, 8], [2, 4], [4, 1], [8, 1]]
	    },
	    enumerable: true
	  }]);

	  App = _radium2['default'](App) || App;
	  App = _globalServicesPre.Simulate(App) || App;
	  return App;
	})(_react2['default'].Component);

	var styles = {
	  main: {
	    padding: 15,
	    boxSizing: 'border-box'
	  },
	  container: {
	    display: 'flex'
	  },
	  half: {
	    flex: 1,
	    boxSizing: 'border-box',
	    margin: 5,
	    padding: 15,
	    borderRadius: 15,
	    backgroundColor: '#fff'
	  }
	};

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Radium;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _type = __webpack_require__(5);

	var _type2 = _interopRequireDefault(_type);

	var _propType = __webpack_require__(13);

	var _propType2 = _interopRequireDefault(_propType);

	var _simulate = __webpack_require__(14);

	var _simulate2 = _interopRequireDefault(_simulate);

	exports.PreType = _type2['default'];
	exports.PrePropType = _propType2['default'];
	exports.Simulate = _simulate2['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _randexp = __webpack_require__(6);

	var _randexp2 = _interopRequireDefault(_randexp);

	var string = {
	  of: function of(array) {
	    if (!_lodash2['default'].every(array, function (v) {
	      return typeof v === 'string';
	    })) {
	      return new Error('Array includes non-string');
	    }

	    return {
	      validate: function validate(s) {
	        return typeof s === 'string' && _lodash2['default'].includes(array, s);
	      },
	      simulate: function simulate() {
	        return _lodash2['default'].sample(array);
	      }
	    };
	  }
	};

	var number = {
	  of: function of(array) {
	    if (!_lodash2['default'].every(array, function (v) {
	      return typeof v === 'number';
	    })) {
	      return new Error('Array includes NaN');
	    }

	    return {
	      validate: function validate(n) {
	        return typeof n === 'number' && _lodash2['default'].includes(array, n);
	      },
	      simulate: function simulate() {
	        return _lodash2['default'].sample(array);
	      }
	    };
	  }
	};

	exports['default'] = {
	  string: string,
	  number: number
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var ret = __webpack_require__(7);
	var DRange = __webpack_require__(12);
	var types = ret.types;


	/**
	 * If code is alphabetic, converts to other case.
	 * If not alphabetic, returns back code.
	 *
	 * @param {Number} code
	 * @return {Number}
	 */
	function toOtherCase(code) {
	  return code + (97 <= code && code <= 122 ? -32 :
	                 65 <= code && code <= 90  ?  32 : 0);
	}


	/**
	 * Randomly returns a true or false value.
	 *
	 * @return {Boolean}
	 */
	function randBool() {
	  return !this.randInt(0, 1);
	};


	/**
	 * Randomly selects and returns a value from the array.
	 *
	 * @param {Array.<Object>} arr
	 * @return {Object}
	 */
	function randSelect(arr) {
	  if (arr instanceof DRange) {
	    return arr.index(this.randInt(0, arr.length - 1));
	  }
	  return arr[this.randInt(0, arr.length - 1)];
	};


	/**
	 * Determines if a character code is alphabetic and decide
	 * to switch case randomly.
	 *
	 * @param {Number} code
	 * @param {Boolean} ignoreCase
	 * @return {String}
	 */
	function char(code, ignoreCase) {
	  code = ignoreCase && randBool.call(this) ? toOtherCase(code) : code;
	  return String.fromCharCode(code);
	};


	/**
	 * expands a token to a DiscontinuousRange of characters which has a 
	 * length and an index function (for random selecting)
	 *
	 * @param {Object} token
	 * @return {DiscontinuousRange}
	 */
	function expand(token) {
	  if (token.type === ret.types.CHAR) return new DRange(token.value);
	  if (token.type === ret.types.RANGE) return new DRange(token.from, token.to);
	  if (token.type === ret.types.SET) {
	    var drange = new DRange();
	    for (var i = 0; i < token.set.length; i++) {
	      drange.add(expand.call(this, token.set[i]));
	    }
	    if (token.not) {
	      return this.defaultRange.clone().subtract(drange);
	    } else {
	      return drange;
	    }
	  }
	  throw new Error('unexpandable token type: ' + token.type);
	};


	/**
	 * @constructor
	 * @param {RegExp|String} regexp
	 * @param {String} m
	 */
	var RandExp = module.exports = function(regexp, m) {
	  this.defaultRange = this.defaultRange.clone();
	  if (regexp instanceof RegExp) {
	    this.ignoreCase = regexp.ignoreCase;
	    this.multiline = regexp.multiline;
	    if (typeof regexp.max === 'number') {
	      this.max = regexp.max;
	    }
	    regexp = regexp.source;

	  } else if (typeof regexp === 'string') {
	    this.ignoreCase = m && m.indexOf('i') !== -1;
	    this.multiline = m && m.indexOf('m') !== -1;
	  } else {
	    throw new Error('Expected a regexp or string');
	  }

	  this.tokens = ret(regexp);
	};


	// When a repetitional token has its max set to Infinite,
	// randexp won't actually generate a random amount between min and Infinite
	// instead it will see Infinite as min + 100.
	RandExp.prototype.max = 100;


	// Generates the random string.
	RandExp.prototype.gen = function() {
	  return gen.call(this, this.tokens, []);
	};


	// Enables use of randexp with a shorter call.
	RandExp.randexp = function(regexp, m) {
	  var randexp;

	  if (regexp._randexp === undefined) {
	    randexp = new RandExp(regexp, m);
	    regexp._randexp = randexp;
	  } else {
	    randexp = regexp._randexp;
	    if (typeof regexp.max === 'number') {
	      randexp.max = regexp.max;
	    }
	    if (regexp.defaultRange instanceof DRange) {
	      randexp.defaultRange = regexp.defaultRange;
	    }
	    if (typeof regexp.randInt === 'function') {
	      randexp.randInt = regexp.randInt;
	    }
	  }

	  return randexp.gen();
	};


	// This enables sugary /regexp/.gen syntax.
	RandExp.sugar = function() {
	  /* jshint freeze:false */
	  RegExp.prototype.gen = function() {
	    return RandExp.randexp(this);
	  };
	};

	// This allows expanding to include additional characters
	// for instance: RandExp.defaultRange.add(0, 65535);
	RandExp.prototype.defaultRange = new DRange(32, 126);






	/**
	 * Randomly generates and returns a number between a and b (inclusive).
	 *
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Number}
	 */
	RandExp.prototype.randInt = function(a, b) {
	  return a + Math.floor(Math.random() * (1 + b - a));
	};


	/**
	 * Generate random string modeled after given tokens.
	 *
	 * @param {Object} token
	 * @param {Array.<String>} groups
	 * @return {String}
	 */
	function gen(token, groups) {
	  var stack, str, n, i, l;

	  switch (token.type) {


	    case types.ROOT:
	    case types.GROUP:
	      if (token.notFollowedBy) { return ''; }

	      // Insert placeholder until group string is generated.
	      if (token.remember && token.groupNumber === undefined) {
	        token.groupNumber = groups.push(null) - 1;
	      }

	      stack = token.options ? randSelect.call(this, token.options) : token.stack;

	      str = '';
	      for (i = 0, l = stack.length; i < l; i++) {
	        str += gen.call(this, stack[i], groups);
	      }

	      if (token.remember) {
	        groups[token.groupNumber] = str;
	      }
	      return str;


	    case types.POSITION:
	      // Do nothing for now.
	      return '';


	    case types.SET:

	      var expanded_set = expand.call(this, token);
	      if (!expanded_set.length) return '';
	      return char.call(this, randSelect.call(this, expanded_set), this.ignoreCase);

	    case types.RANGE:
	      return char.call(this, this.randInt(token.from, token.to), this.ignoreCase);


	    case types.REPETITION:
	      // Randomly generate number between min and max.
	      n = this.randInt(token.min,
	              token.max === Infinity ? token.min + this.max : token.max);

	      str = '';
	      for (i = 0; i < n; i++) {
	        str += gen.call(this, token.value, groups);
	      }

	      return str;


	    case types.REFERENCE:
	      return groups[token.value - 1] || '';


	    case types.CHAR:
	      return char.call(this, token.value, this.ignoreCase);
	  }
	}




/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var util      = __webpack_require__(8);
	var types     = __webpack_require__(9);
	var sets      = __webpack_require__(10);
	var positions = __webpack_require__(11);


	module.exports = function(regexpStr) {
	  var i = 0, l, c,
	      start = { type: types.ROOT, stack: []},

	      // Keep track of last clause/group and stack.
	      lastGroup = start,
	      last = start.stack,
	      groupStack = [];


	  var repeatErr = function(i) {
	    util.error(regexpStr, 'Nothing to repeat at column ' + (i - 1));
	  };

	  // Decode a few escaped characters.
	  var str = util.strToChars(regexpStr);
	  l = str.length;

	  // Iterate through each character in string.
	  while (i < l) {
	    c = str[i++];

	    switch (c) {
	      // Handle escaped characters, inclues a few sets.
	      case '\\':
	        c = str[i++];

	        switch (c) {
	          case 'b':
	            last.push(positions.wordBoundary());
	            break;

	          case 'B':
	            last.push(positions.nonWordBoundary());
	            break;

	          case 'w':
	            last.push(sets.words());
	            break;

	          case 'W':
	            last.push(sets.notWords());
	            break;

	          case 'd':
	            last.push(sets.ints());
	            break;

	          case 'D':
	            last.push(sets.notInts());
	            break;

	          case 's':
	            last.push(sets.whitespace());
	            break;

	          case 'S':
	            last.push(sets.notWhitespace());
	            break;

	          default:
	            // Check if c is integer.
	            // In which case it's a reference.
	            if (/\d/.test(c)) {
	              last.push({ type: types.REFERENCE, value: parseInt(c, 10) });

	            // Escaped character.
	            } else {
	              last.push({ type: types.CHAR, value: c.charCodeAt(0) });
	            }
	        }

	        break;


	      // Positionals.
	      case '^':
	          last.push(positions.begin());
	        break;

	      case '$':
	          last.push(positions.end());
	        break;


	      // Handle custom sets.
	      case '[':
	        // Check if this class is 'anti' i.e. [^abc].
	        var not;
	        if (str[i] === '^') {
	          not = true;
	          i++;
	        } else {
	          not = false;
	        }

	        // Get all the characters in class.
	        var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

	        // Increase index by length of class.
	        i += classTokens[1];
	        last.push({
	            type: types.SET
	          , set: classTokens[0]
	          , not: not
	        });

	        break;


	      // Class of any character except \n.
	      case '.':
	        last.push(sets.anyChar());
	        break;


	      // Push group onto stack.
	      case '(':
	        // Create group.
	        var group = {
	            type: types.GROUP
	          , stack: []
	          , remember: true
	        };

	        c = str[i];

	        // if if this is a special kind of group.
	        if (c === '?') {
	          c = str[i + 1];
	          i += 2;

	          // Match if followed by.
	          if (c === '=') {
	            group.followedBy = true;

	          // Match if not followed by.
	          } else if (c === '!') {
	            group.notFollowedBy = true;

	          } else if (c !== ':') {
	            util.error(regexpStr,
	                'Invalid group, character \'' + c + '\' after \'?\' at column ' +
	                (i - 1));
	          }

	          group.remember = false;
	        }

	        // Insert subgroup into current group stack.
	        last.push(group);

	        // Remember the current group for when the group closes.
	        groupStack.push(lastGroup);

	        // Make this new group the current group.
	        lastGroup = group;
	        last = group.stack;
	        break;


	      // Pop group out of stack.
	      case ')':
	        if (groupStack.length === 0) {
	          util.error(regexpStr, 'Unmatched ) at column ' + (i - 1));
	        }
	        lastGroup = groupStack.pop();

	        // Check if this group has a PIPE.
	        // To get back the correct last stack.
	        last = lastGroup.options ? lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
	        break;


	      // Use pipe character to give more choices.
	      case '|':
	        // Create array where options are if this is the first PIPE
	        // in this clause.
	        if (!lastGroup.options) {
	          lastGroup.options = [lastGroup.stack];
	          delete lastGroup.stack;
	        }

	        // Create a new stack and add to options for rest of clause.
	        var stack = [];
	        lastGroup.options.push(stack);
	        last = stack;
	        break;


	      // Repetition.
	      // For every repetition, remove last element from last stack
	      // then insert back a RANGE object.
	      // This design is chosen because there could be more than
	      // one repetition symbols in a regex i.e. `a?+{2,3}`.
	      case '{':
	        var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
	        if (rs !== null) {
	          min = parseInt(rs[1], 10);
	          max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
	          i += rs[0].length;

	          last.push({
	              type: types.REPETITION
	            , min: min
	            , max: max
	            , value: last.pop()
	          });
	        } else {
	          last.push({
	              type: types.CHAR
	            , value: 123
	          });
	        }
	        break;

	      case '?':
	        if (last.length === 0) {
	          repeatErr(i);
	        }
	        last.push({
	            type: types.REPETITION
	          , min: 0
	          , max: 1
	          , value: last.pop()
	        });
	        break;

	      case '+':
	        if (last.length === 0) {
	          repeatErr(i);
	        }
	        last.push({
	            type: types.REPETITION
	          , min: 1
	          , max: Infinity
	          , value: last.pop()
	        });
	        break;

	      case '*':
	        if (last.length === 0) {
	          repeatErr(i);
	        }
	        last.push({
	            type: types.REPETITION
	          , min: 0
	          , max: Infinity
	          , value: last.pop()
	        });
	        break;


	      // Default is a character that is not `\[](){}?+*^$`.
	      default:
	        last.push({
	            type: types.CHAR
	          , value: c.charCodeAt(0)
	        });
	    }

	  }

	  // Check if any groups have not been closed.
	  if (groupStack.length !== 0) {
	    util.error(regexpStr, 'Unterminated group');
	  }

	  return start;
	};

	module.exports.types = types;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var types = __webpack_require__(9);
	var sets  = __webpack_require__(10);


	// All of these are private and only used by randexp.
	// It's assumed that they will always be called with the correct input.

	var CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
	var SLSH = { '0': 0, 't': 9, 'n': 10, 'v': 11, 'f': 12, 'r': 13 };

	/**
	 * Finds character representations in str and convert all to
	 * their respective characters
	 *
	 * @param {String} str
	 * @return {String}
	 */
	exports.strToChars = function(str) {
	  var chars_regex = /(\[\\b\])|\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;
	  str = str.replace(chars_regex, function(s, b, a16, b16, c8, dctrl, eslsh) {
	    var code = b     ? 8 :
	               a16   ? parseInt(a16, 16) :
	               b16   ? parseInt(b16, 16) :
	               c8    ? parseInt(c8,   8) :
	               dctrl ? CTRL.indexOf(dctrl) :
	               eslsh ? SLSH[eslsh] : undefined;
	    
	    var c = String.fromCharCode(code);

	    // Escape special regex characters.
	    if (/[\[\]{}\^$.|?*+()]/.test(c)) {
	      c = '\\' + c;
	    }

	    return c;
	  });

	  return str;
	};


	/**
	 * turns class into tokens
	 * reads str until it encounters a ] not preceeded by a \
	 *
	 * @param {String} str
	 * @param {String} regexpStr
	 * @return {Array.<Array.<Object>, Number>}
	 */
	exports.tokenizeClass = function(str, regexpStr) {
	  var tokens = []
	    , regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g
	    , rs, c
	    ;


	  while ((rs = regexp.exec(str)) != null) {
	    if (rs[1]) {
	      tokens.push(sets.words());

	    } else if (rs[2]) {
	      tokens.push(sets.ints());

	    } else if (rs[3]) {
	      tokens.push(sets.whitespace());

	    } else if (rs[4]) {
	      tokens.push(sets.notWords());

	    } else if (rs[5]) {
	      tokens.push(sets.notInts());

	    } else if (rs[6]) {
	      tokens.push(sets.notWhitespace());

	    } else if (rs[7]) {
	      tokens.push({
	          type: types.RANGE
	        , from: (rs[8] || rs[9]).charCodeAt(0)
	        ,   to: rs[10].charCodeAt(0)
	      });

	    } else if (c = rs[12]) {
	      tokens.push({
	          type: types.CHAR
	        , value: c.charCodeAt(0)
	      });

	    } else {
	      return [tokens, regexp.lastIndex];
	    }
	  }

	  exports.error(regexpStr, 'Unterminated character class');
	};


	/**
	 * Shortcut to throw errors.
	 *
	 * @param {String} regexp
	 * @param {String} msg
	 */
	exports.error = function(regexp, msg) {
	  throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	    ROOT       : 0
	  , GROUP      : 1
	  , POSITION   : 2
	  , SET        : 3
	  , RANGE      : 4
	  , REPETITION : 5
	  , REFERENCE  : 6
	  , CHAR       : 7
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var types = __webpack_require__(9);

	var INTS = function() {
	 return [{ type: types.RANGE , from: 48, to: 57 }];
	};

	var WORDS = function() {
	 return [
	      { type: types.CHAR, value: 95 }
	    , { type: types.RANGE, from: 97, to: 122 }
	    , { type: types.RANGE, from: 65, to: 90 }
	  ].concat(INTS());
	};

	var WHITESPACE = function() {
	 return [
	      { type: types.CHAR, value: 9 }
	    , { type: types.CHAR, value: 10 }
	    , { type: types.CHAR, value: 11 }
	    , { type: types.CHAR, value: 12 }
	    , { type: types.CHAR, value: 13 }
	    , { type: types.CHAR, value: 32 }
	    , { type: types.CHAR, value: 160 }
	    , { type: types.CHAR, value: 5760 }
	    , { type: types.CHAR, value: 6158 }
	    , { type: types.CHAR, value: 8192 }
	    , { type: types.CHAR, value: 8193 }
	    , { type: types.CHAR, value: 8194 }
	    , { type: types.CHAR, value: 8195 }
	    , { type: types.CHAR, value: 8196 }
	    , { type: types.CHAR, value: 8197 }
	    , { type: types.CHAR, value: 8198 }
	    , { type: types.CHAR, value: 8199 }
	    , { type: types.CHAR, value: 8200 }
	    , { type: types.CHAR, value: 8201 }
	    , { type: types.CHAR, value: 8202 }
	    , { type: types.CHAR, value: 8232 }
	    , { type: types.CHAR, value: 8233 }
	    , { type: types.CHAR, value: 8239 }
	    , { type: types.CHAR, value: 8287 }
	    , { type: types.CHAR, value: 12288 }
	    , { type: types.CHAR, value: 65279 }
	  ];
	};

	var NOTANYCHAR = function() {
	 return [
	      { type: types.CHAR, value: 10 }
	    , { type: types.CHAR, value: 13 }
	    , { type: types.CHAR, value: 8232 }
	    , { type: types.CHAR, value: 8233 }
	  ];
	};

	// predefined class objects
	exports.words = function() {
	  return { type: types.SET, set: WORDS(), not: false };
	};

	exports.notWords = function() {
	  return { type: types.SET, set: WORDS(), not: true };
	};

	exports.ints = function() {
	  return { type: types.SET, set: INTS(), not: false };
	};

	exports.notInts = function() {
	  return { type: types.SET, set: INTS(), not: true };
	};

	exports.whitespace = function() {
	  return { type: types.SET, set: WHITESPACE(), not: false };
	};

	exports.notWhitespace = function() {
	  return { type: types.SET, set: WHITESPACE(), not: true };
	};

	exports.anyChar = function() {
	  return { type: types.SET, set: NOTANYCHAR(), not: true };
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var types = __webpack_require__(9);

	exports.wordBoundary = function() {
	  return { type: types.POSITION, value: 'b' };
	};

	exports.nonWordBoundary = function() {
	  return { type: types.POSITION, value: 'B' };
	};

	exports.begin = function() {
	  return { type: types.POSITION, value: '^' };
	};

	exports.end = function() {
	  return { type: types.POSITION, value: '$' };
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	//protected helper class
	function _SubRange(low, high) {
	    this.low = low;
	    this.high = high;
	    this.length = 1 + high - low;
	}

	_SubRange.prototype.overlaps = function (range) {
	    return !(this.high < range.low || this.low > range.high);
	};

	_SubRange.prototype.touches = function (range) {
	    return !(this.high + 1 < range.low || this.low - 1 > range.high);
	};

	//returns inclusive combination of _SubRanges as a _SubRange
	_SubRange.prototype.add = function (range) {
	    return this.touches(range) && new _SubRange(Math.min(this.low, range.low), Math.max(this.high, range.high));
	};

	//returns subtraction of _SubRanges as an array of _SubRanges (there's a case where subtraction divides it in 2)
	_SubRange.prototype.subtract = function (range) {
	    if (!this.overlaps(range)) return false;
	    if (range.low <= this.low && range.high >= this.high) return [];
	    if (range.low > this.low && range.high < this.high) return [new _SubRange(this.low, range.low - 1), new _SubRange(range.high + 1, this.high)];
	    if (range.low <= this.low) return [new _SubRange(range.high + 1, this.high)];
	    return [new _SubRange(this.low, range.low - 1)];
	};

	_SubRange.prototype.toString = function () {
	    if (this.low == this.high) return this.low.toString();
	    return this.low + '-' + this.high;
	};

	_SubRange.prototype.clone = function () {
	    return new _SubRange(this.low, this.high);
	};




	function DiscontinuousRange(a, b) {
	    if (this instanceof DiscontinuousRange) {
	        this.ranges = [];
	        this.length = 0;
	        if (a !== undefined) this.add(a, b);
	    } else {
	        return new DiscontinuousRange(a, b);
	    }
	}

	function _update_length(self) {
	    self.length = self.ranges.reduce(function (previous, range) {return previous + range.length}, 0);
	}

	DiscontinuousRange.prototype.add = function (a, b) {
	    var self = this;
	    function _add(subrange) {
	        var new_ranges = [];
	        var i = 0;
	        while (i < self.ranges.length && !subrange.touches(self.ranges[i])) {
	            new_ranges.push(self.ranges[i].clone());
	            i++;
	        }
	        while (i < self.ranges.length && subrange.touches(self.ranges[i])) {
	            subrange = subrange.add(self.ranges[i]);
	            i++;
	        }
	        new_ranges.push(subrange);
	        while (i < self.ranges.length) {
	            new_ranges.push(self.ranges[i].clone());
	            i++;
	        }
	        self.ranges = new_ranges;
	        _update_length(self);
	    }

	    if (a instanceof DiscontinuousRange) {
	        a.ranges.forEach(_add);
	    } else {
	        if (a instanceof _SubRange) {
	            _add(a);
	        } else {
	            if (b === undefined) b = a;
	            _add(new _SubRange(a, b));
	        }
	    }
	    return this;
	};

	DiscontinuousRange.prototype.subtract = function (a, b) {
	    var self = this;
	    function _subtract(subrange) {
	        var new_ranges = [];
	        var i = 0;
	        while (i < self.ranges.length && !subrange.overlaps(self.ranges[i])) {
	            new_ranges.push(self.ranges[i].clone());
	            i++;
	        }
	        while (i < self.ranges.length && subrange.overlaps(self.ranges[i])) {
	            new_ranges = new_ranges.concat(self.ranges[i].subtract(subrange));
	            i++;
	        }
	        while (i < self.ranges.length) {
	            new_ranges.push(self.ranges[i].clone());
	            i++;
	        }
	        self.ranges = new_ranges;
	        _update_length(self);
	    }
	    if (a instanceof DiscontinuousRange) {
	        a.ranges.forEach(_subtract);
	    } else {
	        if (a instanceof _SubRange) {
	            _subtract(a);
	        } else {
	            if (b === undefined) b = a;
	            _subtract(new _SubRange(a, b));
	        }
	    }
	    return this;
	};


	DiscontinuousRange.prototype.index = function (index) {
	    var i = 0;
	    while (i < this.ranges.length && this.ranges[i].length <= index) {
	        index -= this.ranges[i].length;
	        i++;
	    }
	    if (i >= this.ranges.length) return null;
	    return this.ranges[i].low + index;
	};


	DiscontinuousRange.prototype.toString = function () {
	    return '[ ' + this.ranges.join(', ') + ' ]'
	};

	DiscontinuousRange.prototype.clone = function () {
	    return new DiscontinuousRange(this);
	};

	module.exports = DiscontinuousRange;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _type = __webpack_require__(5);

	var _type2 = _interopRequireDefault(_type);

	var propTypify = function propTypify(t) {
	  return function (props, propName, componenName) {
	    if (!props) {
	      return t;
	    } else if (!t.validate(props[propName])) {
	      return new Error(propName + ' does not validate.');
	    }
	  };
	};

	exports['default'] = _lodash2['default'](_type2['default']).map(function (typeInits, typeName) {
	  return [typeName, _lodash2['default'](typeInits).map(function (init, initName) {
	    return [initName, function (value) {
	      return propTypify(init(value));
	    }];
	  }).object().value()];
	}).object().value();
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	exports['default'] = function (Target) {
	  if (!Target.defaultProps) Target.defaultProps = {};
	  for (var p in Target.propTypes) {
	    var noError = false;
	    try {
	      Target.propTypes[p]();
	      noError = true;
	    } catch (e) {} finally {
	      if (noError && !Target.defaultProps[p]) {
	        Target.defaultProps[p] = Target.propTypes[p]().simulate();
	      }
	    }
	  }

	  return (function (_React$Component) {
	    var _class = function _class() {
	      _classCallCheck(this, _class);

	      _React$Component.apply(this, arguments);
	    };

	    _inherits(_class, _React$Component);

	    _class.prototype.render = function render() {
	      return _react2['default'].createElement(Target, this.props);
	    };

	    _createClass(_class, null, [{
	      key: 'propTypes',
	      value: Target.propTypes,
	      enumerable: true
	    }, {
	      key: 'defaultProps',
	      value: Target.defaultProps,
	      enumerable: true
	    }]);

	    return _class;
	  })(_react2['default'].Component);
	};

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _color = __webpack_require__(16);

	var _color2 = _interopRequireDefault(_color);

	exports['default'] = {
	  index: function index(i) {
	    return _color2['default']().hsl(i % 6 * 60, 80, 75).rgbString();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var convert = __webpack_require__(17),
	    string = __webpack_require__(19);

	var Color = function(obj) {
	  if (obj instanceof Color) return obj;
	  if (! (this instanceof Color)) return new Color(obj);

	   this.values = {
	      rgb: [0, 0, 0],
	      hsl: [0, 0, 0],
	      hsv: [0, 0, 0],
	      hwb: [0, 0, 0],
	      cmyk: [0, 0, 0, 0],
	      alpha: 1
	   }

	   // parse Color() argument
	   if (typeof obj == "string") {
	      var vals = string.getRgba(obj);
	      if (vals) {
	         this.setValues("rgb", vals);
	      }
	      else if(vals = string.getHsla(obj)) {
	         this.setValues("hsl", vals);
	      }
	      else if(vals = string.getHwb(obj)) {
	         this.setValues("hwb", vals);
	      }
	      else {
	        throw new Error("Unable to parse color from string \"" + obj + "\"");
	      }
	   }
	   else if (typeof obj == "object") {
	      var vals = obj;
	      if(vals["r"] !== undefined || vals["red"] !== undefined) {
	         this.setValues("rgb", vals)
	      }
	      else if(vals["l"] !== undefined || vals["lightness"] !== undefined) {
	         this.setValues("hsl", vals)
	      }
	      else if(vals["v"] !== undefined || vals["value"] !== undefined) {
	         this.setValues("hsv", vals)
	      }
	      else if(vals["w"] !== undefined || vals["whiteness"] !== undefined) {
	         this.setValues("hwb", vals)
	      }
	      else if(vals["c"] !== undefined || vals["cyan"] !== undefined) {
	         this.setValues("cmyk", vals)
	      }
	      else {
	        throw new Error("Unable to parse color from object " + JSON.stringify(obj));
	      }
	   }
	}

	Color.prototype = {
	   rgb: function (vals) {
	      return this.setSpace("rgb", arguments);
	   },
	   hsl: function(vals) {
	      return this.setSpace("hsl", arguments);
	   },
	   hsv: function(vals) {
	      return this.setSpace("hsv", arguments);
	   },
	   hwb: function(vals) {
	      return this.setSpace("hwb", arguments);
	   },
	   cmyk: function(vals) {
	      return this.setSpace("cmyk", arguments);
	   },

	   rgbArray: function() {
	      return this.values.rgb;
	   },
	   hslArray: function() {
	      return this.values.hsl;
	   },
	   hsvArray: function() {
	      return this.values.hsv;
	   },
	   hwbArray: function() {
	      if (this.values.alpha !== 1) {
	        return this.values.hwb.concat([this.values.alpha])
	      }
	      return this.values.hwb;
	   },
	   cmykArray: function() {
	      return this.values.cmyk;
	   },
	   rgbaArray: function() {
	      var rgb = this.values.rgb;
	      return rgb.concat([this.values.alpha]);
	   },
	   hslaArray: function() {
	      var hsl = this.values.hsl;
	      return hsl.concat([this.values.alpha]);
	   },
	   alpha: function(val) {
	      if (val === undefined) {
	         return this.values.alpha;
	      }
	      this.setValues("alpha", val);
	      return this;
	   },

	   red: function(val) {
	      return this.setChannel("rgb", 0, val);
	   },
	   green: function(val) {
	      return this.setChannel("rgb", 1, val);
	   },
	   blue: function(val) {
	      return this.setChannel("rgb", 2, val);
	   },
	   hue: function(val) {
	      return this.setChannel("hsl", 0, val);
	   },
	   saturation: function(val) {
	      return this.setChannel("hsl", 1, val);
	   },
	   lightness: function(val) {
	      return this.setChannel("hsl", 2, val);
	   },
	   saturationv: function(val) {
	      return this.setChannel("hsv", 1, val);
	   },
	   whiteness: function(val) {
	      return this.setChannel("hwb", 1, val);
	   },
	   blackness: function(val) {
	      return this.setChannel("hwb", 2, val);
	   },
	   value: function(val) {
	      return this.setChannel("hsv", 2, val);
	   },
	   cyan: function(val) {
	      return this.setChannel("cmyk", 0, val);
	   },
	   magenta: function(val) {
	      return this.setChannel("cmyk", 1, val);
	   },
	   yellow: function(val) {
	      return this.setChannel("cmyk", 2, val);
	   },
	   black: function(val) {
	      return this.setChannel("cmyk", 3, val);
	   },

	   hexString: function() {
	      return string.hexString(this.values.rgb);
	   },
	   rgbString: function() {
	      return string.rgbString(this.values.rgb, this.values.alpha);
	   },
	   rgbaString: function() {
	      return string.rgbaString(this.values.rgb, this.values.alpha);
	   },
	   percentString: function() {
	      return string.percentString(this.values.rgb, this.values.alpha);
	   },
	   hslString: function() {
	      return string.hslString(this.values.hsl, this.values.alpha);
	   },
	   hslaString: function() {
	      return string.hslaString(this.values.hsl, this.values.alpha);
	   },
	   hwbString: function() {
	      return string.hwbString(this.values.hwb, this.values.alpha);
	   },
	   keyword: function() {
	      return string.keyword(this.values.rgb, this.values.alpha);
	   },

	   rgbNumber: function() {
	      return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
	   },

	   luminosity: function() {
	      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
	      var rgb = this.values.rgb;
	      var lum = [];
	      for (var i = 0; i < rgb.length; i++) {
	         var chan = rgb[i] / 255;
	         lum[i] = (chan <= 0.03928) ? chan / 12.92
	                  : Math.pow(((chan + 0.055) / 1.055), 2.4)
	      }
	      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	   },

	   contrast: function(color2) {
	      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
	      var lum1 = this.luminosity();
	      var lum2 = color2.luminosity();
	      if (lum1 > lum2) {
	         return (lum1 + 0.05) / (lum2 + 0.05)
	      };
	      return (lum2 + 0.05) / (lum1 + 0.05);
	   },

	   level: function(color2) {
	     var contrastRatio = this.contrast(color2);
	     return (contrastRatio >= 7.1)
	       ? 'AAA'
	       : (contrastRatio >= 4.5)
	        ? 'AA'
	        : '';
	   },

	   dark: function() {
	      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
	      var rgb = this.values.rgb,
	          yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	      return yiq < 128;
	   },

	   light: function() {
	      return !this.dark();
	   },

	   negate: function() {
	      var rgb = []
	      for (var i = 0; i < 3; i++) {
	         rgb[i] = 255 - this.values.rgb[i];
	      }
	      this.setValues("rgb", rgb);
	      return this;
	   },

	   lighten: function(ratio) {
	      this.values.hsl[2] += this.values.hsl[2] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },

	   darken: function(ratio) {
	      this.values.hsl[2] -= this.values.hsl[2] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },

	   saturate: function(ratio) {
	      this.values.hsl[1] += this.values.hsl[1] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },

	   desaturate: function(ratio) {
	      this.values.hsl[1] -= this.values.hsl[1] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },

	   whiten: function(ratio) {
	      this.values.hwb[1] += this.values.hwb[1] * ratio;
	      this.setValues("hwb", this.values.hwb);
	      return this;
	   },

	   blacken: function(ratio) {
	      this.values.hwb[2] += this.values.hwb[2] * ratio;
	      this.setValues("hwb", this.values.hwb);
	      return this;
	   },

	   greyscale: function() {
	      var rgb = this.values.rgb;
	      // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
	      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
	      this.setValues("rgb", [val, val, val]);
	      return this;
	   },

	   clearer: function(ratio) {
	      this.setValues("alpha", this.values.alpha - (this.values.alpha * ratio));
	      return this;
	   },

	   opaquer: function(ratio) {
	      this.setValues("alpha", this.values.alpha + (this.values.alpha * ratio));
	      return this;
	   },

	   rotate: function(degrees) {
	      var hue = this.values.hsl[0];
	      hue = (hue + degrees) % 360;
	      hue = hue < 0 ? 360 + hue : hue;
	      this.values.hsl[0] = hue;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },

	   /**
	    * Ported from sass implementation in C
	    * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	    */
	   mix: function(mixinColor, weight) {
	      var color1 = this;
	      var color2 = mixinColor;
	      var p = weight !== undefined ? weight : 0.5;

	      var w = 2 * p - 1;
	      var a = color1.alpha() - color2.alpha();

	      var w1 = (((w * a == -1) ? w : (w + a)/(1 + w*a)) + 1) / 2.0;
	      var w2 = 1 - w1;

	      return this
	        .rgb(
	          w1 * color1.red() + w2 * color2.red(),
	          w1 * color1.green() + w2 * color2.green(),
	          w1 * color1.blue() + w2 * color2.blue()
	        )
	        .alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	   },

	   toJSON: function() {
	     return this.rgb();
	   },

	   clone: function() {
	     return new Color(this.rgb());
	   }
	}


	Color.prototype.getValues = function(space) {
	   var vals = {};
	   for (var i = 0; i < space.length; i++) {
	      vals[space.charAt(i)] = this.values[space][i];
	   }
	   if (this.values.alpha != 1) {
	      vals["a"] = this.values.alpha;
	   }
	   // {r: 255, g: 255, b: 255, a: 0.4}
	   return vals;
	}

	Color.prototype.setValues = function(space, vals) {
	   var spaces = {
	      "rgb": ["red", "green", "blue"],
	      "hsl": ["hue", "saturation", "lightness"],
	      "hsv": ["hue", "saturation", "value"],
	      "hwb": ["hue", "whiteness", "blackness"],
	      "cmyk": ["cyan", "magenta", "yellow", "black"]
	   };

	   var maxes = {
	      "rgb": [255, 255, 255],
	      "hsl": [360, 100, 100],
	      "hsv": [360, 100, 100],
	      "hwb": [360, 100, 100],
	      "cmyk": [100, 100, 100, 100]
	   };

	   var alpha = 1;
	   if (space == "alpha") {
	      alpha = vals;
	   }
	   else if (vals.length) {
	      // [10, 10, 10]
	      this.values[space] = vals.slice(0, space.length);
	      alpha = vals[space.length];
	   }
	   else if (vals[space.charAt(0)] !== undefined) {
	      // {r: 10, g: 10, b: 10}
	      for (var i = 0; i < space.length; i++) {
	        this.values[space][i] = vals[space.charAt(i)];
	      }
	      alpha = vals.a;
	   }
	   else if (vals[spaces[space][0]] !== undefined) {
	      // {red: 10, green: 10, blue: 10}
	      var chans = spaces[space];
	      for (var i = 0; i < space.length; i++) {
	        this.values[space][i] = vals[chans[i]];
	      }
	      alpha = vals.alpha;
	   }
	   this.values.alpha = Math.max(0, Math.min(1, (alpha !== undefined ? alpha : this.values.alpha) ));
	   if (space == "alpha") {
	      return;
	   }

	   // cap values of the space prior converting all values
	   for (var i = 0; i < space.length; i++) {
	      var capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
	      this.values[space][i] = Math.round(capped);
	   }

	   // convert to all the other color spaces
	   for (var sname in spaces) {
	      if (sname != space) {
	         this.values[sname] = convert[space][sname](this.values[space])
	      }

	      // cap values
	      for (var i = 0; i < sname.length; i++) {
	         var capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
	         this.values[sname][i] = Math.round(capped);
	      }
	   }
	   return true;
	}

	Color.prototype.setSpace = function(space, args) {
	   var vals = args[0];
	   if (vals === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof vals == "number") {
	      vals = Array.prototype.slice.call(args);
	   }
	   this.setValues(space, vals);
	   return this;
	}

	Color.prototype.setChannel = function(space, index, val) {
	   if (val === undefined) {
	      // color.red()
	      return this.values[space][index];
	   }
	   // color.red(100)
	   this.values[space][index] = val;
	   this.setValues(space, this.values[space]);
	   return this;
	}

	module.exports = Color;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(18);

	var convert = function() {
	   return new Converter();
	}

	for (var func in conversions) {
	  // export Raw versions
	  convert[func + "Raw"] =  (function(func) {
	    // accept array or plain args
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[func](arg);
	    }
	  })(func);

	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];

	  // export rgb2hsl and ["rgb"]["hsl"]
	  convert[from] = convert[from] || {};

	  convert[from][to] = convert[func] = (function(func) { 
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      
	      var val = conversions[func](arg);
	      if (typeof val == "string" || val === undefined)
	        return val; // keyword

	      for (var i = 0; i < val.length; i++)
	        val[i] = Math.round(val[i]);
	      return val;
	    }
	  })(func);
	}


	/* Converter does lazy conversion and caching */
	var Converter = function() {
	   this.convs = {};
	};

	/* Either get the values for a space or
	  set the values for a space, depending on args */
	Converter.prototype.routeSpace = function(space, args) {
	   var values = args[0];
	   if (values === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof values == "number") {
	      values = Array.prototype.slice.call(args);        
	   }

	   return this.setValues(space, values);
	};
	  
	/* Set the values for a space, invalidating cache */
	Converter.prototype.setValues = function(space, values) {
	   this.space = space;
	   this.convs = {};
	   this.convs[space] = values;
	   return this;
	};

	/* Get the values for a space. If there's already
	  a conversion for the space, fetch it, otherwise
	  compute it */
	Converter.prototype.getValues = function(space) {
	   var vals = this.convs[space];
	   if (!vals) {
	      var fspace = this.space,
	          from = this.convs[fspace];
	      vals = convert[fspace][space](from);

	      this.convs[space] = vals;
	   }
	  return vals;
	};

	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	   Converter.prototype[space] = function(vals) {
	      return this.routeSpace(space, arguments);
	   }
	});

	module.exports = convert;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/* MIT license */

	module.exports = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,

	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,

	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,

	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,

	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,

	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,

	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,

	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,

	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	}


	function rgb2hsl(rgb) {
	  var r = rgb[0]/255,
	      g = rgb[1]/255,
	      b = rgb[2]/255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, l;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g)/ delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  l = (min + max) / 2;

	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, v;

	  if (max == 0)
	    s = 0;
	  else
	    s = (delta/max * 1000)/10;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  v = ((max / 255) * 1000) / 10;

	  return [h, s, v];
	}

	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1/255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

	  return [h, w * 100, b * 100];
	}

	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c, m, y, k;

	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}

	function rgb2keyword(rgb) {
	  return reverseKeywords[JSON.stringify(rgb)];
	}

	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;

	  // assume sRGB
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	  return [x * 100, y *100, z * 100];
	}

	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	        x = xyz[0],
	        y = xyz[1],
	        z = xyz[2],
	        l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}

	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;

	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }

	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;

	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;

	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;

	    rgb[i] = val * 255;
	  }

	  return rgb;
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv, v;

	  if(l === 0) {
	      // no need to do calc on black
	      // also avoids divide by 0 error
	      return [0, 0, 0];
	  }

	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}

	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}

	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}


	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;

	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl, l;

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args))
	}

	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}

	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i, v, f, n;

	  // wh + bl cant be > 1
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }

	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);  // linear interpolation

	  switch (i) {
	    default:
	    case 6:
	    case 0: r = v; g = n; b = wh; break;
	    case 1: r = n; g = v; b = wh; break;
	    case 2: r = wh; g = v; b = n; break;
	    case 3: r = wh; g = n; b = v; break;
	    case 4: r = n; g = wh; b = v; break;
	    case 5: r = v; g = wh; b = n; break;
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}

	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}

	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}

	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}

	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r, g, b;

	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}

	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}

	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}

	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}

	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}


	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r, g, b;

	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	  // assume sRGB
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
	    : r = (r * 12.92);

	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
	    : g = (g * 12.92);

	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
	    : b = (b * 12.92);

	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);

	  return [r * 255, g * 255, b * 255];
	}

	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}

	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x, y, z, y2;

	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1/3);
	  }

	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

	  return [x, y, z];
	}

	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr, h, c;

	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}

	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}

	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a, b, hr;

	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}

	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}

	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}

	function keyword2rgb(keyword) {
	  return cssKeywords[keyword];
	}

	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}

	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}

	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}

	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}

	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}

	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}

	var cssKeywords = {
	  aliceblue:  [240,248,255],
	  antiquewhite: [250,235,215],
	  aqua: [0,255,255],
	  aquamarine: [127,255,212],
	  azure:  [240,255,255],
	  beige:  [245,245,220],
	  bisque: [255,228,196],
	  black:  [0,0,0],
	  blanchedalmond: [255,235,205],
	  blue: [0,0,255],
	  blueviolet: [138,43,226],
	  brown:  [165,42,42],
	  burlywood:  [222,184,135],
	  cadetblue:  [95,158,160],
	  chartreuse: [127,255,0],
	  chocolate:  [210,105,30],
	  coral:  [255,127,80],
	  cornflowerblue: [100,149,237],
	  cornsilk: [255,248,220],
	  crimson:  [220,20,60],
	  cyan: [0,255,255],
	  darkblue: [0,0,139],
	  darkcyan: [0,139,139],
	  darkgoldenrod:  [184,134,11],
	  darkgray: [169,169,169],
	  darkgreen:  [0,100,0],
	  darkgrey: [169,169,169],
	  darkkhaki:  [189,183,107],
	  darkmagenta:  [139,0,139],
	  darkolivegreen: [85,107,47],
	  darkorange: [255,140,0],
	  darkorchid: [153,50,204],
	  darkred:  [139,0,0],
	  darksalmon: [233,150,122],
	  darkseagreen: [143,188,143],
	  darkslateblue:  [72,61,139],
	  darkslategray:  [47,79,79],
	  darkslategrey:  [47,79,79],
	  darkturquoise:  [0,206,209],
	  darkviolet: [148,0,211],
	  deeppink: [255,20,147],
	  deepskyblue:  [0,191,255],
	  dimgray:  [105,105,105],
	  dimgrey:  [105,105,105],
	  dodgerblue: [30,144,255],
	  firebrick:  [178,34,34],
	  floralwhite:  [255,250,240],
	  forestgreen:  [34,139,34],
	  fuchsia:  [255,0,255],
	  gainsboro:  [220,220,220],
	  ghostwhite: [248,248,255],
	  gold: [255,215,0],
	  goldenrod:  [218,165,32],
	  gray: [128,128,128],
	  green:  [0,128,0],
	  greenyellow:  [173,255,47],
	  grey: [128,128,128],
	  honeydew: [240,255,240],
	  hotpink:  [255,105,180],
	  indianred:  [205,92,92],
	  indigo: [75,0,130],
	  ivory:  [255,255,240],
	  khaki:  [240,230,140],
	  lavender: [230,230,250],
	  lavenderblush:  [255,240,245],
	  lawngreen:  [124,252,0],
	  lemonchiffon: [255,250,205],
	  lightblue:  [173,216,230],
	  lightcoral: [240,128,128],
	  lightcyan:  [224,255,255],
	  lightgoldenrodyellow: [250,250,210],
	  lightgray:  [211,211,211],
	  lightgreen: [144,238,144],
	  lightgrey:  [211,211,211],
	  lightpink:  [255,182,193],
	  lightsalmon:  [255,160,122],
	  lightseagreen:  [32,178,170],
	  lightskyblue: [135,206,250],
	  lightslategray: [119,136,153],
	  lightslategrey: [119,136,153],
	  lightsteelblue: [176,196,222],
	  lightyellow:  [255,255,224],
	  lime: [0,255,0],
	  limegreen:  [50,205,50],
	  linen:  [250,240,230],
	  magenta:  [255,0,255],
	  maroon: [128,0,0],
	  mediumaquamarine: [102,205,170],
	  mediumblue: [0,0,205],
	  mediumorchid: [186,85,211],
	  mediumpurple: [147,112,219],
	  mediumseagreen: [60,179,113],
	  mediumslateblue:  [123,104,238],
	  mediumspringgreen:  [0,250,154],
	  mediumturquoise:  [72,209,204],
	  mediumvioletred:  [199,21,133],
	  midnightblue: [25,25,112],
	  mintcream:  [245,255,250],
	  mistyrose:  [255,228,225],
	  moccasin: [255,228,181],
	  navajowhite:  [255,222,173],
	  navy: [0,0,128],
	  oldlace:  [253,245,230],
	  olive:  [128,128,0],
	  olivedrab:  [107,142,35],
	  orange: [255,165,0],
	  orangered:  [255,69,0],
	  orchid: [218,112,214],
	  palegoldenrod:  [238,232,170],
	  palegreen:  [152,251,152],
	  paleturquoise:  [175,238,238],
	  palevioletred:  [219,112,147],
	  papayawhip: [255,239,213],
	  peachpuff:  [255,218,185],
	  peru: [205,133,63],
	  pink: [255,192,203],
	  plum: [221,160,221],
	  powderblue: [176,224,230],
	  purple: [128,0,128],
	  rebeccapurple: [102, 51, 153],
	  red:  [255,0,0],
	  rosybrown:  [188,143,143],
	  royalblue:  [65,105,225],
	  saddlebrown:  [139,69,19],
	  salmon: [250,128,114],
	  sandybrown: [244,164,96],
	  seagreen: [46,139,87],
	  seashell: [255,245,238],
	  sienna: [160,82,45],
	  silver: [192,192,192],
	  skyblue:  [135,206,235],
	  slateblue:  [106,90,205],
	  slategray:  [112,128,144],
	  slategrey:  [112,128,144],
	  snow: [255,250,250],
	  springgreen:  [0,255,127],
	  steelblue:  [70,130,180],
	  tan:  [210,180,140],
	  teal: [0,128,128],
	  thistle:  [216,191,216],
	  tomato: [255,99,71],
	  turquoise:  [64,224,208],
	  violet: [238,130,238],
	  wheat:  [245,222,179],
	  white:  [255,255,255],
	  whitesmoke: [245,245,245],
	  yellow: [255,255,0],
	  yellowgreen:  [154,205,50]
	};

	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(20);

	module.exports = {
	   getRgba: getRgba,
	   getHsla: getHsla,
	   getRgb: getRgb,
	   getHsl: getHsl,
	   getHwb: getHwb,
	   getAlpha: getAlpha,

	   hexString: hexString,
	   rgbString: rgbString,
	   rgbaString: rgbaString,
	   percentString: percentString,
	   percentaString: percentaString,
	   hslString: hslString,
	   hslaString: hslaString,
	   hwbString: hwbString,
	   keyword: keyword
	}

	function getRgba(string) {
	   if (!string) {
	      return;
	   }
	   var abbr =  /^#([a-fA-F0-9]{3})$/,
	       hex =  /^#([a-fA-F0-9]{6})$/,
	       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       keyword = /(\D+)/;

	   var rgb = [0, 0, 0],
	       a = 1,
	       match = string.match(abbr);
	   if (match) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i] + match[i], 16);
	      }
	   }
	   else if (match = string.match(hex)) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
	      }
	   }
	   else if (match = string.match(rgba)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i + 1]);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(per)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(keyword)) {
	      if (match[1] == "transparent") {
	         return [0, 0, 0, 0];
	      }
	      rgb = colorNames[match[1]];
	      if (!rgb) {
	         return;
	      }
	   }

	   for (var i = 0; i < rgb.length; i++) {
	      rgb[i] = scale(rgb[i], 0, 255);
	   }
	   if (!a && a != 0) {
	      a = 1;
	   }
	   else {
	      a = scale(a, 0, 1);
	   }
	   rgb[3] = a;
	   return rgb;
	}

	function getHsla(string) {
	   if (!string) {
	      return;
	   }
	   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hsl);
	   if (match) {
	      var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          s = scale(parseFloat(match[2]), 0, 100),
	          l = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, s, l, a];
	   }
	}

	function getHwb(string) {
	   if (!string) {
	      return;
	   }
	   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hwb);
	   if (match) {
	    var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          w = scale(parseFloat(match[2]), 0, 100),
	          b = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, w, b, a];
	   }
	}

	function getRgb(string) {
	   var rgba = getRgba(string);
	   return rgba && rgba.slice(0, 3);
	}

	function getHsl(string) {
	  var hsla = getHsla(string);
	  return hsla && hsla.slice(0, 3);
	}

	function getAlpha(string) {
	   var vals = getRgba(string);
	   if (vals) {
	      return vals[3];
	   }
	   else if (vals = getHsla(string)) {
	      return vals[3];
	   }
	   else if (vals = getHwb(string)) {
	      return vals[3];
	   }
	}

	// generators
	function hexString(rgb) {
	   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
	              + hexDouble(rgb[2]);
	}

	function rgbString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return rgbaString(rgba, alpha);
	   }
	   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
	}

	function rgbaString(rgba, alpha) {
	   if (alpha === undefined) {
	      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
	   }
	   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
	           + ", " + alpha + ")";
	}

	function percentString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return percentaString(rgba, alpha);
	   }
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);

	   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
	}

	function percentaString(rgba, alpha) {
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
	}

	function hslString(hsla, alpha) {
	   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
	      return hslaString(hsla, alpha);
	   }
	   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
	}

	function hslaString(hsla, alpha) {
	   if (alpha === undefined) {
	      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
	   }
	   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
	           + alpha + ")";
	}

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	function hwbString(hwb, alpha) {
	   if (alpha === undefined) {
	      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
	   }
	   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
	           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	}

	function keyword(rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}

	// helpers
	function scale(num, min, max) {
	   return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return (str.length < 2) ? "0" + str : str;
	}


	//create a list of reverse color names
	var reverseNames = {};
	for (var name in colorNames) {
	   reverseNames[colorNames[name]] = name;
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
		"aliceblue": [
			240,
			248,
			255
		],
		"antiquewhite": [
			250,
			235,
			215
		],
		"aqua": [
			0,
			255,
			255
		],
		"aquamarine": [
			127,
			255,
			212
		],
		"azure": [
			240,
			255,
			255
		],
		"beige": [
			245,
			245,
			220
		],
		"bisque": [
			255,
			228,
			196
		],
		"black": [
			0,
			0,
			0
		],
		"blanchedalmond": [
			255,
			235,
			205
		],
		"blue": [
			0,
			0,
			255
		],
		"blueviolet": [
			138,
			43,
			226
		],
		"brown": [
			165,
			42,
			42
		],
		"burlywood": [
			222,
			184,
			135
		],
		"cadetblue": [
			95,
			158,
			160
		],
		"chartreuse": [
			127,
			255,
			0
		],
		"chocolate": [
			210,
			105,
			30
		],
		"coral": [
			255,
			127,
			80
		],
		"cornflowerblue": [
			100,
			149,
			237
		],
		"cornsilk": [
			255,
			248,
			220
		],
		"crimson": [
			220,
			20,
			60
		],
		"cyan": [
			0,
			255,
			255
		],
		"darkblue": [
			0,
			0,
			139
		],
		"darkcyan": [
			0,
			139,
			139
		],
		"darkgoldenrod": [
			184,
			134,
			11
		],
		"darkgray": [
			169,
			169,
			169
		],
		"darkgreen": [
			0,
			100,
			0
		],
		"darkgrey": [
			169,
			169,
			169
		],
		"darkkhaki": [
			189,
			183,
			107
		],
		"darkmagenta": [
			139,
			0,
			139
		],
		"darkolivegreen": [
			85,
			107,
			47
		],
		"darkorange": [
			255,
			140,
			0
		],
		"darkorchid": [
			153,
			50,
			204
		],
		"darkred": [
			139,
			0,
			0
		],
		"darksalmon": [
			233,
			150,
			122
		],
		"darkseagreen": [
			143,
			188,
			143
		],
		"darkslateblue": [
			72,
			61,
			139
		],
		"darkslategray": [
			47,
			79,
			79
		],
		"darkslategrey": [
			47,
			79,
			79
		],
		"darkturquoise": [
			0,
			206,
			209
		],
		"darkviolet": [
			148,
			0,
			211
		],
		"deeppink": [
			255,
			20,
			147
		],
		"deepskyblue": [
			0,
			191,
			255
		],
		"dimgray": [
			105,
			105,
			105
		],
		"dimgrey": [
			105,
			105,
			105
		],
		"dodgerblue": [
			30,
			144,
			255
		],
		"firebrick": [
			178,
			34,
			34
		],
		"floralwhite": [
			255,
			250,
			240
		],
		"forestgreen": [
			34,
			139,
			34
		],
		"fuchsia": [
			255,
			0,
			255
		],
		"gainsboro": [
			220,
			220,
			220
		],
		"ghostwhite": [
			248,
			248,
			255
		],
		"gold": [
			255,
			215,
			0
		],
		"goldenrod": [
			218,
			165,
			32
		],
		"gray": [
			128,
			128,
			128
		],
		"green": [
			0,
			128,
			0
		],
		"greenyellow": [
			173,
			255,
			47
		],
		"grey": [
			128,
			128,
			128
		],
		"honeydew": [
			240,
			255,
			240
		],
		"hotpink": [
			255,
			105,
			180
		],
		"indianred": [
			205,
			92,
			92
		],
		"indigo": [
			75,
			0,
			130
		],
		"ivory": [
			255,
			255,
			240
		],
		"khaki": [
			240,
			230,
			140
		],
		"lavender": [
			230,
			230,
			250
		],
		"lavenderblush": [
			255,
			240,
			245
		],
		"lawngreen": [
			124,
			252,
			0
		],
		"lemonchiffon": [
			255,
			250,
			205
		],
		"lightblue": [
			173,
			216,
			230
		],
		"lightcoral": [
			240,
			128,
			128
		],
		"lightcyan": [
			224,
			255,
			255
		],
		"lightgoldenrodyellow": [
			250,
			250,
			210
		],
		"lightgray": [
			211,
			211,
			211
		],
		"lightgreen": [
			144,
			238,
			144
		],
		"lightgrey": [
			211,
			211,
			211
		],
		"lightpink": [
			255,
			182,
			193
		],
		"lightsalmon": [
			255,
			160,
			122
		],
		"lightseagreen": [
			32,
			178,
			170
		],
		"lightskyblue": [
			135,
			206,
			250
		],
		"lightslategray": [
			119,
			136,
			153
		],
		"lightslategrey": [
			119,
			136,
			153
		],
		"lightsteelblue": [
			176,
			196,
			222
		],
		"lightyellow": [
			255,
			255,
			224
		],
		"lime": [
			0,
			255,
			0
		],
		"limegreen": [
			50,
			205,
			50
		],
		"linen": [
			250,
			240,
			230
		],
		"magenta": [
			255,
			0,
			255
		],
		"maroon": [
			128,
			0,
			0
		],
		"mediumaquamarine": [
			102,
			205,
			170
		],
		"mediumblue": [
			0,
			0,
			205
		],
		"mediumorchid": [
			186,
			85,
			211
		],
		"mediumpurple": [
			147,
			112,
			219
		],
		"mediumseagreen": [
			60,
			179,
			113
		],
		"mediumslateblue": [
			123,
			104,
			238
		],
		"mediumspringgreen": [
			0,
			250,
			154
		],
		"mediumturquoise": [
			72,
			209,
			204
		],
		"mediumvioletred": [
			199,
			21,
			133
		],
		"midnightblue": [
			25,
			25,
			112
		],
		"mintcream": [
			245,
			255,
			250
		],
		"mistyrose": [
			255,
			228,
			225
		],
		"moccasin": [
			255,
			228,
			181
		],
		"navajowhite": [
			255,
			222,
			173
		],
		"navy": [
			0,
			0,
			128
		],
		"oldlace": [
			253,
			245,
			230
		],
		"olive": [
			128,
			128,
			0
		],
		"olivedrab": [
			107,
			142,
			35
		],
		"orange": [
			255,
			165,
			0
		],
		"orangered": [
			255,
			69,
			0
		],
		"orchid": [
			218,
			112,
			214
		],
		"palegoldenrod": [
			238,
			232,
			170
		],
		"palegreen": [
			152,
			251,
			152
		],
		"paleturquoise": [
			175,
			238,
			238
		],
		"palevioletred": [
			219,
			112,
			147
		],
		"papayawhip": [
			255,
			239,
			213
		],
		"peachpuff": [
			255,
			218,
			185
		],
		"peru": [
			205,
			133,
			63
		],
		"pink": [
			255,
			192,
			203
		],
		"plum": [
			221,
			160,
			221
		],
		"powderblue": [
			176,
			224,
			230
		],
		"purple": [
			128,
			0,
			128
		],
		"rebeccapurple": [
			102,
			51,
			153
		],
		"red": [
			255,
			0,
			0
		],
		"rosybrown": [
			188,
			143,
			143
		],
		"royalblue": [
			65,
			105,
			225
		],
		"saddlebrown": [
			139,
			69,
			19
		],
		"salmon": [
			250,
			128,
			114
		],
		"sandybrown": [
			244,
			164,
			96
		],
		"seagreen": [
			46,
			139,
			87
		],
		"seashell": [
			255,
			245,
			238
		],
		"sienna": [
			160,
			82,
			45
		],
		"silver": [
			192,
			192,
			192
		],
		"skyblue": [
			135,
			206,
			235
		],
		"slateblue": [
			106,
			90,
			205
		],
		"slategray": [
			112,
			128,
			144
		],
		"slategrey": [
			112,
			128,
			144
		],
		"snow": [
			255,
			250,
			250
		],
		"springgreen": [
			0,
			255,
			127
		],
		"steelblue": [
			70,
			130,
			180
		],
		"tan": [
			210,
			180,
			140
		],
		"teal": [
			0,
			128,
			128
		],
		"thistle": [
			216,
			191,
			216
		],
		"tomato": [
			255,
			99,
			71
		],
		"turquoise": [
			64,
			224,
			208
		],
		"violet": [
			238,
			130,
			238
		],
		"wheat": [
			245,
			222,
			179
		],
		"white": [
			255,
			255,
			255
		],
		"whitesmoke": [
			245,
			245,
			245
		],
		"yellow": [
			255,
			255,
			0
		],
		"yellowgreen": [
			154,
			205,
			50
		]
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(2);

	var _radium2 = _interopRequireDefault(_radium);

	var _DeltaBar = __webpack_require__(22);

	var _DeltaBar2 = _interopRequireDefault(_DeltaBar);

	var _servicesFormat = __webpack_require__(23);

	var _servicesFormat2 = _interopRequireDefault(_servicesFormat);

	var Aspect = (function (_React$Component) {
	  function Aspect() {
	    _classCallCheck(this, _Aspect);

	    _React$Component.apply(this, arguments);
	  }

	  _inherits(Aspect, _React$Component);

	  var _Aspect = Aspect;

	  _Aspect.prototype.render = function render() {
	    var _props = this.props;
	    var text = _props.text;
	    var rating = _props.rating;
	    var delta = _props.delta;
	    var deltaText = _props.deltaText;
	    var color = _props.color;
	    var modStyle = _props.modStyle;

	    return _react2['default'].createElement(
	      'div',
	      { style: [styles.main] },
	      _react2['default'].createElement(
	        'div',
	        { style: [styles.blurb] },
	        delta > 0 && _react2['default'].createElement(
	          'span',
	          { style: [styles.delta, { background: '#2f2' }] },
	          ' +' + delta
	        ),
	        delta < 0 && _react2['default'].createElement(
	          'span',
	          { style: [styles.delta] },
	          ' -' + String(-delta)
	        ),
	        _react2['default'].createElement(
	          'span',
	          { style: [styles.rating] },
	          rating
	        ),
	        _react2['default'].createElement(
	          'p',
	          { style: [styles.text] },
	          _servicesFormat2['default'].capitalize(text)
	        ),
	        deltaText && _react2['default'].createElement(
	          'em',
	          null,
	          deltaText
	        )
	      ),
	      _react2['default'].createElement(_DeltaBar2['default'], {
	        percent: rating,
	        color: color,
	        delta: delta
	      })
	    );
	  };

	  _createClass(_Aspect, null, [{
	    key: 'defaultProps',
	    value: {
	      text: 'Aspect text',
	      rating: 20,
	      delta: 4,
	      deltaText: '',
	      color: '#f77'
	    },
	    enumerable: true
	  }]);

	  Aspect = _radium2['default'](Aspect) || Aspect;
	  return Aspect;
	})(_react2['default'].Component);

	var styles = {
	  main: {
	    boxSizing: 'border-box',
	    padding: '15px 0'
	  },
	  blurb: {
	    marginBottom: 15
	  },
	  text: {
	    fontSize: '1em',
	    margin: 0,
	    fontStyle: 'italic'
	  },
	  rating: {
	    float: 'right',
	    padding: '2px 5px'
	  },
	  delta: {
	    float: 'right',
	    color: '#fff',
	    fontWeight: 100,
	    padding: '2px 5px',
	    background: '#f22',
	    borderRadius: 30
	  }
	};

	exports['default'] = Aspect;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(2);

	var _radium2 = _interopRequireDefault(_radium);

	var _color = __webpack_require__(16);

	var _color2 = _interopRequireDefault(_color);

	var DeltaBar = (function (_React$Component) {
	  function DeltaBar() {
	    _classCallCheck(this, _DeltaBar);

	    _React$Component.apply(this, arguments);
	  }

	  _inherits(DeltaBar, _React$Component);

	  var _DeltaBar = DeltaBar;

	  _DeltaBar.prototype.render = function render() {
	    var _props = this.props;
	    var percent = _props.percent;
	    var delta = _props.delta;
	    var height = _props.height;
	    var color = _props.color;
	    var modStyle = _props.modStyle;

	    return _react2['default'].createElement(
	      'svg',
	      {
	        width: '100%',
	        viewBox: '0 0 100 ' + height,
	        style: [styles.svg, modStyle]
	      },
	      _react2['default'].createElement('rect', {
	        x: 0,
	        width: 100,
	        height: height,
	        fill: '#eee'
	      }),
	      _react2['default'].createElement('rect', {
	        x: 0,
	        width: percent,
	        height: height,
	        fill: color
	      }),
	      delta > 0 && _react2['default'].createElement('rect', {
	        x: percent,
	        width: delta,
	        height: height,
	        fill: _color2['default'](color).darken(0.3).rgbString()
	      }),
	      delta < 0 && _react2['default'].createElement('rect', {
	        x: percent + delta,
	        width: -delta,
	        height: height,
	        fill: _color2['default'](color).lighten(0.2).rgbString()
	      }),
	      _react2['default'].createElement('rect', {
	        x: percent + delta - 0.5,
	        width: 0.5,
	        height: height,
	        fill: '#000'
	      })
	    );
	  };

	  _createClass(_DeltaBar, null, [{
	    key: 'defaultProps',
	    value: {
	      percent: 70,
	      delta: 10,
	      height: 3,
	      color: '#f44'
	    },
	    enumerable: true
	  }]);

	  DeltaBar = _radium2['default'](DeltaBar) || DeltaBar;
	  return DeltaBar;
	})(_react2['default'].Component);

	var styles = {
	  svg: {
	    padding: 0,
	    margin: 0
	  }
	};

	exports['default'] = DeltaBar;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  capitalize: function capitalize(str) {
	    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(2);

	var _radium2 = _interopRequireDefault(_radium);

	var Button = (function (_React$Component) {
	  function Button() {
	    _classCallCheck(this, _Button);

	    _React$Component.apply(this, arguments);
	  }

	  _inherits(Button, _React$Component);

	  var _Button = Button;

	  _Button.prototype.render = function render() {
	    var _props = this.props;
	    var text = _props.text;
	    var handler = _props.handler;
	    var color = _props.color;
	    var background = _props.background;
	    var border = _props.border;
	    var hover = _props.hover;
	    var modStyle = _props.modStyle;

	    return _react2['default'].createElement(
	      'div',
	      {
	        style: [styles.button, {
	          color: color,
	          backgroundColor: background,
	          boxShadow: '0 0 0 1px ' + border,
	          borderRadius: 5,
	          ':hover': hover
	        }, modStyle],
	        onClick: handler
	      },
	      text
	    );
	  };

	  _createClass(_Button, null, [{
	    key: 'defaultProps',
	    value: {
	      color: '#557',
	      background: '#fff',
	      border: '#557',
	      hover: {
	        color: '#fff',
	        backgroundColor: '#557'
	      }
	    },
	    enumerable: true
	  }]);

	  Button = _radium2['default'](Button) || Button;
	  return Button;
	})(_react2['default'].Component);

	var styles = {
	  button: {
	    boxSizing: 'border-box',
	    padding: 15,
	    margin: 0,
	    cursor: 'pointer',
	    textAlign: 'center'
	  }
	};

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ }
/******/ ]);