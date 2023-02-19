type CheckboxProps = {
  value: string;
  checked?: boolean;
  onChange?: (event: any) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const handleChange = (event: CheckboxProps) => {
    props.onChange?.(event);
  };

  return (
    <div className='checkbox-container'>
      <input type='checkbox' onChange={handleChange} checked={props.checked}/>
      <p>{props.value}</p>
    </div>
  );
};

export default Checkbox;
