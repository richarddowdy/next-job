export default function DefaultLayout({ children, title = "This is the default title" }) {
  return (
    <div className="">
      <div className="">{children}</div>
    </div>
  );
}
