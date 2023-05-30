import logo from './logo.png';
import video from './bg.mp4';
import './App.css';

function App() {
  return (
    <>
    
    <video className="bg-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
    <source src={video} type="video/mp4" /></video>
    
        <div className="masthead">
        <br></br>
        <br></br>
        <br></br>
            <div className="masthead-content text-white">
                <div className="container-fluid px-4 px-lg-0">
                    <div className="d-flex justify-content-center">
                        <img src={logo} alt="logo"/>
                    </div>

                    <span className="mb-5 w-10 test1" style={{fontSize: 20}}>Real-time Smart Farm Updates<br></br>
                        Timelapse Video Production Service
                        </span>
                        
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                        <div className="row input-group-newsletter">
                            <div className="col test1"><input className="form-control" id="id" type="id" placeholder="ID" aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                            <div className="col test1"><input className="form-control" id="password" type="password" placeholder="PASSWORD" aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                            <div className="col-auto test1"><button className="btn btn-primary" id="submitButton" type="submit" onclick="location.href='dashboard.html';">Login</button></div>
                        </div>

                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3 mt-2">
                            <div className="fw-bolder test1" style={{fontSize: 20}}>Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <span href="https://startbootstrap.com/solution/contact-forms"></span>
                            </div>
                        </div>

                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2 test1" style={{fontSize: 20}}>Error sending message!</div></div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
);
}

export default App;
