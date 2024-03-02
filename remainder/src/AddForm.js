function AddForm({ onSubmit, title, setTitle }) {
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>ADD +</button>
    </form>
  );
}

export default AddForm;
