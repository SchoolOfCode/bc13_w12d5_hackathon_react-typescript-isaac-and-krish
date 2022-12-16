import * as React from "react";
interface AlertProps {
  message: string;
}
export function AlertComponent(className: string) {
  return function Alert({ message }: React.PropsWithChildren<AlertProps>) {
    return message ? (
      <div className={`alert ${className}`}>{message}</div>
    ) : null;
  };
}
export const ErrorAlert = AlertComponent("alert-danger");
export const WarningAlert = AlertComponent("alert-warning");