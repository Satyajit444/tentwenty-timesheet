export default function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`border border-gray-300
        rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-0 ${className}`}
    />
  );
}