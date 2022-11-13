import React, { FC } from 'react';
import styled from 'styled-components';
import { createClassName } from '../../utils/stringUtils';
import { ListProps } from './List.types';

const ListElement: FC<ListProps> = ({
  items,
  ordered,
  orientation = 'vertical',
  listStyleType,
  className,
}) => {
  if (!!ordered) {
    return (
      <ol
        className={createClassName(`list`, className)}
        style={{ listStyleType: listStyleType ?? 'decimal' }}
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
      className={createClassName(`list`, className)}
      style={{ listStyleType: listStyleType ?? 'none' }}
    >
      {items?.map((item, i) => (
        <li className='list-item' key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const StyledList = styled(ListElement)`
  list-style-position: inside;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  flex-direction: ${props =>
    !!props.orientation && props.orientation === 'vertical' ? 'column' : 'row'};

  color: ${props => props.theme.colorPalette.text};
  list-style-type: ${props => props.listStyleType};
`;

export const List: FC<ListProps> = ({
  items,
  ordered,
  orientation,
  listStyleType,
  className,
}) => {
  return (
    <StyledList
      items={items}
      ordered={ordered}
      orientation={orientation}
      listStyleType={listStyleType}
      className={className}
    />
  );
};
