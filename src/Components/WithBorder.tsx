const WithBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border-8 border-purple-500 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithBorder;
