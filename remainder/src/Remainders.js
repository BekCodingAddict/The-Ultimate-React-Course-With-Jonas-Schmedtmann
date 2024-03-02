import "./index.css";

function Remainders({ remainders, onDelete }) {
  return (
    <div className="container">
      {remainders.map((remainder) => (
        <Remainder
          remainder={remainder}
          key={remainder.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

function Remainder({ remainder, onDelete }) {
  return (
    <div className="remainder-card">
      <div className="card-header">
        <h1>{remainder.title}</h1>
        <p>{remainder.date}</p>
      </div>
      <div className="content">
        <p>Content..</p>
      </div>
      <div className="edit-delete">
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-trash" onClick={() => onDelete(remainder.id)}></i>
      </div>
    </div>
  );
}

export default Remainders;
