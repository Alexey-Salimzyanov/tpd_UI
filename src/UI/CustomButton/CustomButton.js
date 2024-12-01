import classes from './CustomButton.module.css'; 

const CustomButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes['custom-button']} >
      {children}
    </button>
  );
};

export default CustomButton;

