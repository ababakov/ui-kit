import React from 'react';
import { cnChoiceGroup, ChoiceGroupPropSize } from '../ChoiceGroup';
import { ItemProps } from '../../BaseCheckGroupField/BaseCheckGroupField';
import { IconPropSize, IIcon } from '../../Icon';

export type ChoiceGroupItemProps = {
  icon?: React.FC<IIcon>;
  size?: ChoiceGroupPropSize;
};

export type IChoiceGroupItem<T> = ItemProps<T> & ChoiceGroupItemProps;

export function ChoiceGroupItem<T>(props: IChoiceGroupItem<T>): React.ReactElement {
  const { className, label, onChange, checked, id, multiply, value, icon, size = 'm' } = props;
  const stringId = id.toString();
  const Icon = icon;

  const getIconSizeChoiceGroupSize = (buttonSize: ChoiceGroupPropSize): IconPropSize => {
    const sizeObj: Record<ChoiceGroupPropSize, IconPropSize> = {
      xs: 'xs',
      s: 'xs',
      m: 's',
      l: 'm',
    };

    return sizeObj[buttonSize];
  };

  return (
    <React.Fragment>
      <input
        type={multiply ? 'checkbox' : 'radio'}
        className={cnChoiceGroup('input')}
        id={stringId}
        checked={checked}
      />
      <label
        className={cnChoiceGroup('label', { size, checkbox: multiply }, [className])}
        onClick={(e) => {
          onChange({ e, value, id, checked: !checked });
        }}
        htmlFor={stringId}
      >
        {Icon && <Icon size={getIconSizeChoiceGroupSize(size)} />}
        {label}
      </label>
    </React.Fragment>
  );
}
