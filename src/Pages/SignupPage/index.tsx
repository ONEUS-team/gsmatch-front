import { useEffect } from "react";
import { usePreventLeave } from "../../hooks/usePreventLeave";

export default function SignupPage() {
  const { enablePrevent } = usePreventLeave();

  useEffect(() => {
    enablePrevent();
  }, []);

  return <div>SignupPage</div>;
}
