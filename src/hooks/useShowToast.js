import React, { useCallback } from "react";

import { useToast } from "@zendeskgarden/react-notifications";
import Notifications from "components/Notifications/Notifications";

const useShowToast = () => {
  const { addToast } = useToast();

  const showToast = useCallback(
    ({ type, title, message }) => {
      addToast(({ close }) => (
        <Notifications
          title={title}
          type={type}
          message={message}
          onClose={close}
        />
      ));
    },
    [addToast]
  );

  return showToast;
};

export default useShowToast;
