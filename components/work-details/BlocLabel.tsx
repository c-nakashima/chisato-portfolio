/**
 * Work Detail Page's Bloc Label Component (H3)
 *
 * @property {string} labelText - Bloc Label Text
 */
type Props = {
  labelText: string;
  className?: string;
};

export default function SectionLabel({ labelText, className }: Props) {
  return (
    <h3
      className={`font-sans text-2xl font-light text-neutral-500 dark:text-neutral-400 ${className}`}
    >
      {labelText}
    </h3>
  );
}
