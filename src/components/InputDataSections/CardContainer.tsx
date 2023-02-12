import React from 'react';

interface CardContainerProps {
  deleteFunction: () => void;
  moveFunction: () => void;
}

const CardContainer = ({ deleteFunction, moveFunction }: CardContainerProps) => {
  return <div>CardContainer</div>;
};

export default CardContainer;
