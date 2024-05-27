import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const StyledInputBase = styled(InputBase)(({ theme, toggle }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    "&::placeholder": {
      color: toggle === "dark" ? "white" : "#333333", // Change this to your desired placeholder color
      opacity: 1,   // Ensure the placeholder color is fully opaque
    },
  },
}));

function Input(props) {
  const { submit, toggle } = props;
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(submit)}>
      <StyledInputBase
        placeholder="Search A City..."
        {...register("city")}
        toggle={toggle}
      />
    </form>
  );
}

export default Input;
