import { FormnInputLable, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormnInputLable shrink={otherProps.value.length}>
          {label}
        </FormnInputLable>
      )}
    </Group>
  );
};

export default FormInput;
