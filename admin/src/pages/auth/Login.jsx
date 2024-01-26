import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/features/auth/authApi";
import Button from "../../components/ui/Button";
import Error from "../../components/ui/Error";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useNavigate();

  const [login, { data, isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && data?.user?._id) {
      toast.success("User Login Successfully");
      router("/");
    }
  }, [data, isLoading, isError, error, router]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    login({
      username,
      password,
    });
  };
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-5 py-10 bg-[#f2f4fc]">
      <div className="login-container bg-white rounded-[7px] p-8 w-full sm:w-[445px]">
        <h2 className="text-2xl text-center my-3">Logo Here</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5 pt-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Error>{errors?.username}</Error>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Error>{errors?.password}</Error>
          </div>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm">
                Remeber this Device
              </label>
            </div>
            <Link to="/" className="text-primary font-medium text-sm">
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" loading={isLoading}>
            Sign In
          </Button>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium">{`Don't`} have an account? </span>
            <Link
              to="/auth/sign-up"
              className="text-primary font-medium text-sm"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
