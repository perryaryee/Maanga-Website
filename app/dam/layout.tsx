export default function DamLayout({ children }: { children: React.ReactNode }) {
  /* Same top offset as /track — fixed Navbar would cover utility pages otherwise */
  return <div className="pt-28 sm:pt-32 md:pt-36">{children}</div>;
}
