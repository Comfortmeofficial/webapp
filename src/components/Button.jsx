const styles = {
  primary:
    "bg-[#0e5e66] text-white border border-[#0e5e66] hover:bg-[#0a4f55] hover:border-[#0a4f55]",
  secondary:
    "bg-white text-[#111417] border border-[#d9d9d9] hover:bg-[#f2f2f2]",
  outline:
    "bg-transparent text-[#1f2328] border border-[#b9bcc1] hover:bg-[#ececec]",
  accent:
    "bg-[#77b32a] text-white border border-[#77b32a] hover:bg-[#679a24] hover:border-[#679a24]",
};

function Button({
  children,
  variant = "primary",
  className = "",
  as = "button",
  ...props
}) {
  const Component = as;
  return (
    <Component
      className={`inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium tracking-wide transition duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
