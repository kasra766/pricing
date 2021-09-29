import NewInputRange from "./input-range/NewInputRange";
import NewInputToggleButton from "./InputToggleButton/NewInputToggle";

const Input = () => {
  return (
    <div>
      <h6>How many email subscribers do you have?</h6>
      <NewInputRange />
      <NewInputToggleButton />
    </div>
  );
};
export default Input;
