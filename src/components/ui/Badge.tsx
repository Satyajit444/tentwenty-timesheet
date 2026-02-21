import clsx from "clsx";

type Status = "COMPLETED" | "INCOMPLETE" | "MISSING";

interface BadgeProps {
  status: Status;
}

export default function Badge({ status }: BadgeProps) {
  return (
    <span
      className={clsx(
        "px-2.5 py-1 text-xs font-medium rounded-md",
        status === "COMPLETED" &&
          "bg-green-100 text-green-700",

        status === "INCOMPLETE" &&
          "bg-yellow-100 text-yellow-800",

        status === "MISSING" &&
          "bg-rose-100 text-rose-700"
      )}
    >
      {status.toLowerCase()}
    </span>
  );
}