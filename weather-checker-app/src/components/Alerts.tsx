import * as React from "react";

interface AlertProps {
  message: string;
}

export function alertComponent(className: string) {
  return function Alert({ message }: React.PropsWithChildren<AlertProps>) {
    return message ? (
      <div className={`alert ${className}`}>{message}</div>
    ) : null;
  };
}

export const ErrorAlert = alertComponent("alert-danger");
export const WarningAlert = alertComponent("alert-warning");
