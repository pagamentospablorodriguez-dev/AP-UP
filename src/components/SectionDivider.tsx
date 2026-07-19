interface SectionDividerProps {
  label?: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="reveal mx-auto my-14 flex max-w-3xl items-center gap-4 px-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
      {label && (
        <span className="font-serif text-sm italic tracking-wide text-gold/80">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
