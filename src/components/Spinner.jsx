import { ClipLoader } from "react-spinners";

const Spinner = ({loading}) => {
  return (
    <>
      <h2 className="mx-auto text-center flex justify-center">
        Loading...
        <ClipLoader loading={loading}/>
      </h2>
    </>
  );
};

export default Spinner;
