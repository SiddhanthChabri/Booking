import "./mailList.css";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        <div className="mailInputContainer">
          <input type="text" placeholder="Enter your Email"></input>
          <button>Subscribe</button>
        </div>
      </span>
    </div>
  );
}

export default MailList;
