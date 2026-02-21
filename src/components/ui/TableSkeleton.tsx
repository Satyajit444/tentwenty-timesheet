export default function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg animate-pulse">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3" />
            <th className="px-4 py-3" />
            <th className="px-4 py-3" />
            <th className="px-4 py-3" />
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-200 rounded w-10" />
              </td>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-200 rounded w-40" />
              </td>
              <td className="px-4 py-3">
                <div className="h-6 bg-gray-200 rounded w-24" />
              </td>
              <td className="px-4 py-3 text-right">
                <div className="h-4 bg-gray-200 rounded w-12 ml-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}