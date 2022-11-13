import React, { FC } from 'react';
import { createClassName } from '../../utils/stringUtils';
import './List.scss';

export type ListOrientation = 'horizontal' | 'vertical';
export type ListStyleType =
  | 'disc'
  | 'armenian'
  | 'circle'
  | 'cjk-ideographic'
  | 'decimal'
  | 'decimal-leading-zero'
  | 'georgian'
  | 'hebrew'
  | 'hiragana'
  | 'hiragana-iroha'
  | 'katakana'
  | 'katakana-iroha'
  | 'lower-alpha'
  | 'lower-greek'
  | 'lower-latin'
  | 'lower-roman'
  | 'none'
  | 'square'
  | 'upper-alpha'
  | 'upper-greek'
  | 'upper-latin'
  | 'upper-roman'
  | 'initial'
  | 'inherit';

export type ListProps = {
  items?: React.ReactNode[];
  ordered?: boolean;
  orientation?: ListOrientation;
  marker?: ListStyleType;
  style?: React.CSSProperties;
  className?: string;
};

export const List: FC<ListProps> = ({
  items,
  ordered,
  orientation = 'vertical',
  marker,
  style,
  className,
}) => {
  if (!!ordered) {
    return (
      <ol
        className={createClassName(`list ordered ${orientation}`, className)}
        style={{ listStyleType: marker ?? 'decimal', ...style }}
      >
        {items?.map((item, i) => (
          <li className='list-item' key={i}>
            {item}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul
      className={createClassName(`list unordered ${orientation}`, className)}
      style={{ listStyleType: marker ?? 'none', ...style }}
    >
      {items?.map((item, i) => (
        <li className='list-item' key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
};
