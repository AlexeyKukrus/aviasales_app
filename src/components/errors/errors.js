import React from 'react';
import { Alert } from 'antd';

export const ErrorWarning = () => {
  return <Alert description="Рейсов, подходящих под заданные фильтры, не найдено." type="warning" showIcon />;
};

export const ErrorError = ({ message }) => {
  return <Alert message="Error" description={message} type="error" showIcon />;
};
