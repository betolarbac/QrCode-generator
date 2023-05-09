


export function Encurtador() {


  return (
    <>
      <div className="wrapper">
        <div className="contentTitle">
          <h1>Encurte seu Link</h1>
        </div>
        <div className="searchContainer">
          <div className="boxSearch">
            <form >
              <input
                type="text"
                className="input"
                placeholder="http://..."
                required
              />
              <button className="buttonSearch">Encurtar</button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}
