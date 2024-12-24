const useAlert = () => {
  const showAlert = (alertValue: string) => {
    alert(`This is ${alertValue} page`);
  };
  return showAlert;
};

export default useAlert;
