function Content(props) {
  return (
    <div className="card">
      <div className="card-heading">
        <h2>{props.name}</h2>
        <img className="circle-img" src={props.img} alt="profile-img"></img>
      </div>

      <div className="card-body">
        <p>{props.address}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default Content;
