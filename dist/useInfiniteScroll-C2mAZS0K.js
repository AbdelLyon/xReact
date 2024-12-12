import { useEffect as s } from "react";
const t = (r, f) => {
  s(() => {
    r && f && f();
  }, [r, f]);
};
export {
  t as u
};
