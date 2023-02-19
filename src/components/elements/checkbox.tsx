type CheckboxProps = {
  value: string;
  checked?: boolean;
  onChange?: (event: any) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEvent: CheckboxProps = {
      value: props.value,
      checked: event.target.checked
    };
    props.onChange?.(newEvent);
  };

  return (
    <div className='checkbox-container'>
      <input type='checkbox' onChange={handleChange} checked={props.checked} />
      <p>{props.value}</p>
    </div>
  );
};

export default Checkbox;
