import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>oops Error encountered!</h1>
      <h2>
        {err.status}:{err.statusText}
      </h2>
    </div>
  );
};

export default Error;
