import React from 'react';

import { Button } from '../core/Button';
// import Icon from './Icon';
// import Dropdown from './Dropdown';

export const Action = ({ onClick, iconProps, buttonProps, dropdownItemProps, renderProp }) => {
  if (iconProps) {
    // return <Icon onClick={onClick} {...iconProps} />
  } else if (buttonProps) {
    return <Button onClick={onClick} {...buttonProps} />
  } else if (dropdownItemProps) {
    // return <Dropdown.Item onClick={onClick} {...dropdownItemProps} />
  } else {
    return renderProp({ onClick });
  }
}