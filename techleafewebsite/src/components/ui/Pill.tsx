type PillProps = {
  children: React.ReactNode;
};

export default function Pill({ children }: PillProps) {
  return <span className="pill">{children}</span>;
}
