import './App.css';
import Good from './Good.png';
import BlackCom from './BlackCom';

function App() {
  return (
    <>
    <div style={{height: "4rem"}}></div>   
            <div className="left test1">
              <BlackCom name= "모 니 터 링"/>
            </div>
      
            <div className="right test1">
              <BlackCom name ="사 진"/>
            </div>



            <div className="container-fluid py-4">
      
              <div style={{height: "3rem"}}></div>

             
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" style={{marginRight:106.5,width: 410,height: 350,float:'right'}}>
                <div className="card">
                  <div className="card-body p-3" style={{width:1200, height :350}}>
                    <div className="row">
                      <div className="col-8">
                          <div className="numbers">
                            
                          
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="right test1" style={{marginRight: 0.01}}>
                <button type="button" className="btn bg-gradient-info w-auto my-4 mb-2 " style={{fontSize: 15}}>영상 만들기</button>
              </div>
            </div>
            </div>
            
              
              
              
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" style={{marginLeft:110,width: 400,height: 100}} >
                  <div className="card">
                    <div className="card-body p-3"  style={{width:400, height :100}}>
                      <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                              <p className=" mb-0 text-uppercase font-weight-bold w-30 test1" style={{fontSize: 20}}>온도</p>
                              
                            </div>
                        </div>
                      <div className="col-4 text-end">
                    
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             


              
              <div style={{height: "1rem"}}></div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" style={{marginLeft:110,width: 400,height: 100}} >
                  <div className="card">
                    <div className="card-body p-3" style={{width:400, height :100}}>
                      <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                              <p className=" mb-0 text-uppercase font-weight-bold w-30 test1" style={{fontSize: 20}}>습도</p>
                              
                            </div>
                        </div>
                      <div className="col-4 text-end">
                   
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{height: "1rem"}}></div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" style={{marginLeft:110,width: 400,height: 100}} >
                  <div className="card">
                    <div className="card-body p-3" style={{width:400, height :100}}>
                      <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                              <p className=" mb-0 text-uppercase font-weight-bold w-30 test1" style={{fontSize: 20}}>작물 질병</p>
                            </div>
                        </div>
                      <div className="col-4 text-end">
                        <img src={Good} style={{width:80, height :80}} alt="goodrabbit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
      </>
  );
}

export default App;
