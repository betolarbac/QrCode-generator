import { useState } from "react";


export function GetSearch() {
  const [formValue, setFormValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  async function getQrCode(event) {
    event.preventDefault();
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${formValue}`;

    setQrCode(url);
  }

  return (
    <>
      <div className="wrapper">
        <div className="contentTitle">
          <h1>Gerar seu próprio QR Code</h1>
        </div>
        <div className="searchContainer">
          <div className="boxSearch">
            <form onSubmit={getQrCode}>
              <input
                type="text"
                value={formValue}
                className="input"
                placeholder="http://..."
                required
                onChange={(e) => setFormValue(e.target.value)}
              />
              <button className="buttonSearch">Gerar QRCode</button>
            </form>
          </div>
        </div>

        <img
          src={qrCode}
          alt=""
          className={`img ${qrCode === "" ? "ImgNone" : ""}`}
        />
      </div>
    </>
  );
}
