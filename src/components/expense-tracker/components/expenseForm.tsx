const ExpenseForm = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input id="Description" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input id="Amount" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
