import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h2>Oops!</h2>
      <h3>something went wrong!</h3>
    </div>
  );
};

export default Error;
