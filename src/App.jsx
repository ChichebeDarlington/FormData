import "./App.css";

function App() {
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // console.log(formData);
    // const email = formData.get("email");
    // const name = formData.get("name");
    // const password = formData.get("password");
    // console.log(email, name, password);
    const data = Object.fromEntries(formData);
    const values = [...formData.values()];
    console.log(values);
    const isEmpty = values.includes("");
    if (isEmpty) {
      console.log("Please fill in all data");
    }
    // clear inputs
    // event.currentTarget.reset();
  };

  const form = () => {
    return (
      <form onSubmit={onSubmit}>
        {/* the input must have the name attribute which must match */}
        <h1>FORMDATA</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
        <div className="btn">
          <button>Submit</button>
        </div>
      </form>
    );
  };
  return <div className="center">{form()}</div>;
}

export default App;
