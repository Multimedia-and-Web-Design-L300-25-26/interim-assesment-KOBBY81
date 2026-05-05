import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/signin");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center px-6 pt-10">
        <Link to="/" className="mb-10 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1652f0] text-[18px] font-bold text-white">
            C
          </span>
          <span className="text-[28px] font-semibold tracking-[-0.03em] text-[#1652f0]">
            coinbase
          </span>
        </Link>

        <div className="w-full max-w-[440px] rounded-[28px] border border-[#e5e7eb] bg-white px-8 pb-8 pt-9 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <h1 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0a0b0d]">
            Create your account
          </h1>
          <p className="mt-3 text-[16px] leading-6 text-[#5d6c83]">
            Access all that Coinbase has to offer with a single account.
          </p>

          <p className="mt-2 text-center text-sm text-red-600">
            Demo app – do not use your real password
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              <label className="mb-2 block text-[14px] font-medium text-[#111827]">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[56px] w-full rounded-[14px] border border-[#d1d5db] bg-white px-4 text-[16px] text-[#111827] outline-none transition focus:border-[#1652f0] focus:ring-2 focus:ring-[#1652f0]/15"
                required
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[14px] font-medium text-[#111827]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[56px] w-full rounded-[14px] border border-[#d1d5db] bg-white px-4 text-[16px] text-[#111827] outline-none transition focus:border-[#1652f0] focus:ring-2 focus:ring-[#1652f0]/15"
                required
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[14px] font-medium text-[#111827]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[56px] w-full rounded-[14px] border border-[#d1d5db] bg-white px-4 text-[16px] text-[#111827] outline-none transition focus:border-[#1652f0] focus:ring-2 focus:ring-[#1652f0]/15"
                required
              />
            </div>

            {error && <p className="mt-3 text-red-500">{error}</p>}

            <button
              type="submit"
              className="mt-5 h-[56px] w-full rounded-full bg-[#1652f0] text-[16px] font-semibold text-white transition hover:bg-[#1447d6]"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-7 text-center text-[15px] text-[#5d6c83]">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-[#1652f0] hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-8 pb-10 text-center text-[13px] text-[#6b7280]">
          <a href="#" className="hover:text-black">
            Privacy
          </a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-black">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}