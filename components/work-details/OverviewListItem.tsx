/**
 * Overview's List Item Component
 *
 * @property {string} labelText - List Item Label Text
 * @property {string} content - List Item Content
 * @property {string} description - List Item Description
 */
type Props = {
  labelText: string;
  content: React.ReactNode;
  description?: string;
  className?: string;
};

export default function OverviewListItem({
  labelText,
  content,
  description,
  className,
}: Props) {
  return (
    <li className={`flex flex-col items-center space-y-3 px-4 ${className}`}>
      <span className="font-semibold text-sm">{labelText}</span>
      <div className="flex min-h-8 items-center">{content}</div>
      {description && (
        <span className="text-sm font-light text-neutral-500">
          {description}
        </span>
      )}
    </li>
  );
}
