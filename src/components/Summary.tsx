interface SummaryProps {
  summary: string;
}

export default function Summary({ summary }: SummaryProps) {
  return (
    <div className="mb-7">
      <h2 className="text-2xl font-bold mb-3 max-sm:text-xl max-sm:mb-2 max-sm:hidden">
        About
      </h2>
      <p className="text-base font-medium font-mono text-gray-500 text-justify max-sm:text-sm">
        {summary}
      </p>
    </div>
  );
}
