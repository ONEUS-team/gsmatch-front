export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";

    window.history.pushState(null, "", window.location.href);
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    window.addEventListener("popstate", () => {
      window.history.pushState(null, "", window.location.href);
    });
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
    window.removeEventListener("popstate", () => {
      window.history.pushState(null, "", window.location.href);
    });
  };

  return { enablePrevent, disablePrevent };
};
