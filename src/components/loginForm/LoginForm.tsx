import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./loginForm.css";

const LoginForm: React.FC = () => {

  return (
    <form className="login-form">
      <MyInput type={"text"} label={"Type your login:"} placeholder={"login"} />
      <MyInput type={"email"} label={"Type your email:"} placeholder={"email"} />
      <MyInput type={"password"} label={"Type your password:"} placeholder={"password"} />
      <MyButton type={"submit"} text={"submit"} isDanger={false} />
    </form>
  );
};

export default LoginForm;