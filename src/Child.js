import { useSelector } from "react-redux";
const Child = () => {
  const value = useSelector((e) => e);

  return (
    <div>
      <h1>{value.demo.value}</h1>
    </div>
  );
};
export default Child;
