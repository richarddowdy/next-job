export default function DefaultLayout({ children, title = "This is the default title" }) {
  return <div className="h-100">{children}</div>;
}
