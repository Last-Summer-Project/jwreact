import logo from './logo.svg';
import video from './bg.mp4';
import './App.css';

function App() {
  return (
  
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6 className="w-10 test1" style={{fontSize: 20}}>영상</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0">
                  <center>
                    <video width="60%" height="60%" controls autoplay>
                    <source src={video} type="video/mp4" />
                    </video>
                  </center>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
