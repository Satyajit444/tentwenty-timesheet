interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className="", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        bg-blue-600 text-white rounded px-4 py-2
        hover:bg-blue-700 transition
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    />
  );
}