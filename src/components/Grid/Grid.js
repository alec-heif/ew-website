import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Grid.module.scss';

export const Grid = ({
  children,
  className,
  gap = 2,
  col = false,
  ...rest
}) => (
  <div
    className={cx(styles.root, className, {
      [styles[`gap${gap}`]]: gap,
      [styles.columns]: col,
    })}
    {...rest}
  >
    {children}
  </div>
);
export const GridItem = ({
  align = 'top',
  justify = 'left',
  children,
  className,
  ...rest
}) => (
  <div
    className={cx(styles.item, className, styles.gridItem, {
      [styles[`${align}`]]: align,
      [styles[`${justify}`]]: justify,
    })}
    {...rest}
  >
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.number,
  col: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

GridItem.propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  children: PropTypes.node,
  justify: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};
