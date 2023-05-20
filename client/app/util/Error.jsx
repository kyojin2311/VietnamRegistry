function Error({ title, children }) {
  return (
    <div className="error">
      <div className="icon"></div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Error;
