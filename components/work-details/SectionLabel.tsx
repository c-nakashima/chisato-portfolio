/**
 * Work Detail Page's Section Label Component (H2)
 *
 * @property {string} number - Section Indicate Number
 * @property {string} labelText - Section Label Text
 */
type Props = {
  number: string;
  labelText: string;
  className?: string;
};

export default function BlocLabel({ number, labelText, className }: Props) {
  return (
    <h2 className={`text-sm font-sans font-medium duration-150 ${className}`}>
      <span className="mr-1 text-neutral-400 font-semibold">{number}</span>
      {labelText}
    </h2>
  );
}
