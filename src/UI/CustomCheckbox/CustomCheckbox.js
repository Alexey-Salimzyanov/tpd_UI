import classes from './CustomCheckbox.module.css'

const CustomCheckbox = ({ children, ...props }) => {
  return (
    <label className={classes['custom-checkbox']}>
      <input type="checkbox" {...props} />
      <span className={classes.checkmark}></span>
      {children}
    </label>
  );
};

export default CustomCheckbox;

