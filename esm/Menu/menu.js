import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, createContext } from 'react';
import classNames from 'classnames';
export var MenuContext = /*#__PURE__*/createContext({
  index: '0'
});
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ~~~js
 * import { Menu } from 'chicken-designship'
 * ~~~
 */

export var Menu = function Menu(props) {
  var className = props.className,
      mode = props.mode,
      style = props.style,
      children = props.children,
      defaultIndex = props.defaultIndex,
      onSelect = props.onSelect,
      defaultOpenSubMenus = props.defaultOpenSubMenus;

  var _useState = useState(defaultIndex),
      _useState2 = _slicedToArray(_useState, 2),
      currentActive = _useState2[0],
      setActive = _useState2[1];

  var classes = classNames('chicken-design-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });

  var handleClick = function handleClick(index) {
    setActive(index);

    if (onSelect) {
      onSelect(index);
    }
  };

  var passedContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus
  };

  var renderChildren = function renderChildren() {
    return React.Children.map(children, function (child, index) {
      var childElement = child;
      var displayName = childElement.type.displayName;

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return /*#__PURE__*/React.cloneElement(childElement, {
          index: index.toString()
        });
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component");
      }
    });
  };

  return /*#__PURE__*/React.createElement("ul", {
    className: classes,
    style: style,
    "data-testid": "test-menu"
  }, /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: passedContext
  }, renderChildren()));
};
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
};
export default Menu;