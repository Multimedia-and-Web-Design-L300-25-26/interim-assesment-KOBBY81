import { Link } from "react-router-dom";

export default function AuthShell({
  title,
  subtitle,
  emailLabel = "Email",
  primaryText,
  socialGoogleText,
  socialAppleText,
  showPasskey = false,
  passkeyText = "Sign in with Passkey",
  bottomText,
  bottomLinkText,
  bottomLinkTo,
}) {
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
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 text-[16px] leading-6 text-[#5d6c83]">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-8">
            <label className="mb-2 block text-[14px] font-medium text-[#111827]">
              {emailLabel}
            </label>
            <input
              type="email"
              className="h-[56px] w-full rounded-[14px] border border-[#d1d5db] bg-white px-4 text-[16px] text-[#111827] outline-none transition focus:border-[#1652f0] focus:ring-2 focus:ring-[#1652f0]/15"
            />
          </div>

          <button className="mt-5 h-[56px] w-full rounded-full bg-[#1652f0] text-[16px] font-semibold text-white transition hover:bg-[#1447d6]">
            {primaryText}
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e5e7eb]" />
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6b7280]">
              OR
            </span>
            <div className="h-px flex-1 bg-[#e5e7eb]" />
          </div>

          {showPasskey ? (
            <button className="mb-3 flex h-[56px] w-full items-center justify-center rounded-full border border-[#d1d5db] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#f8fafc]">
              {passkeyText}
            </button>
          ) : null}

          <button className="mb-3 flex h-[56px] w-full items-center justify-center gap-3 rounded-full border border-[#d1d5db] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#f8fafc]">
            <GoogleIcon />
            {socialGoogleText}
          </button>

          <button className="flex h-[56px] w-full items-center justify-center gap-3 rounded-full border border-[#d1d5db] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#f8fafc]">
            <AppleIcon />
            {socialAppleText}
          </button>

          <div className="mt-7 text-center text-[15px] text-[#5d6c83]">
            {bottomText}{" "}
            <Link
              to={bottomLinkTo}
              className="font-semibold text-[#1652f0] hover:underline"
            >
              {bottomLinkText}
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

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.4c-.2 1.3-1.5 3.8-5.4 3.8-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.8 0 3 .8 3.7 1.4l2.5-2.4C16.6 3.3 14.5 2.4 12 2.4A9.6 9.6 0 0 0 2.4 12 9.6 9.6 0 0 0 12 21.6c5.5 0 9.2-3.8 9.2-9.2 0-.6-.1-1.1-.2-1.6H12Z"
      />
      <path
        fill="#FBBC05"
        d="M3.5 7.5 6.7 9.8A5.8 5.8 0 0 1 12 6.1c1.8 0 3 .8 3.7 1.4l2.5-2.4C16.6 3.3 14.5 2.4 12 2.4a9.56 9.56 0 0 0-8.5 5.1Z"
      />
      <path
        fill="#34A853"
        d="M12 21.6c2.4 0 4.5-.8 6-2.2l-2.8-2.2c-.8.5-1.8.9-3.2.9-3.8 0-5.1-2.5-5.4-3.7l-3.2 2.4A9.6 9.6 0 0 0 12 21.6Z"
      />
      <path
        fill="#4285F4"
        d="M21.2 12.4c0-.6-.1-1.1-.2-1.6H12v3.9h5.4c-.2 1-.9 2-2 2.8l2.8 2.2c1.7-1.5 2.9-3.9 2.9-7.3Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M16.7 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.3-.1-2.5.7-3.2.7-.7 0-1.7-.7-2.8-.7-1.5 0-2.8.8-3.6 2.1-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.2-2.6 1.2-2.7 0 0-2.3-.9-2.3-3.2ZM14.6 6.2c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.7-1 1.7-.9 2.6 1 .1 1.9-.5 2.5-1.2Z" />
    </svg>
  );
}