import Details from "./Details";

function Content(props) {
  return (
    <div className="card">
      <div className="card-heading">
        <p className="card-key">{props.key}</p>
        <h2>{props.name}</h2>
        <img className="circle-img" src={props.img} alt="profile-img"></img>
      </div>

      <div className="card-body">
        <Details detailInfo={props.address} />
        <Details detailInfo={props.phone} />
      </div>
    </div>
  );
}

export default Content;
