
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{height: "4rem"}}></div>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6 className="w-10 test1" style={{fontSize: 20}}>질병</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0"></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  

    <div className ="row inner-top-md">
      <div className="container text-center">
          <div id="parentDiv1" className="martix-txt" >
          
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" style={{marginLeft: 50, width: 400, height: 5}} >
          <div className="card "  style={{width:600}}>
            <div className="card-header pb-0 p-3">
              <div className="d-flex justify-content-between">
                <h4 className="mb-2 w-18 test1" style={{fontSize:30, height:30}}>상추질병</h4>
              </div>
            </div>
            <div className="table-responsive" style={{height:350, width: 600}}>
            <table className="table align-items-center">
                <tbody>
                  <tr>
                    <td className="w-20">
                      <h6 className="w-10 test1" style={{fontSize: 20}}>상추균핵병</h6>
                    </td>
                    <td style={{width: 100}}>
                      <p className="w-10 test1" style={{fontSize: 15}}>상추의 약한 부위를 통해 침입해요</p>
                      <p className="w-10 test1" style={{fontSize: 15}}>물러서 썩고 흰 균이 자라며, 감염 부위에는 균핵(덩어리)가 형성돼요</p>
                      <p className="w-10 test1" style={{fontSize: 15}}>습도가 높고 15~25℃의 서늘한 상태에서 발생하는 경우가 많아요</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-10">
                      <h6 className="w-10 test1" style={{fontSize: 20}}>상추노균병</h6>
                    </td>
                    <td>
                      <p className="w-10 test1" style={{fontSize: 15}}>공기를 통해 전염되기 때문에 온·습도, 병원균 침입 차단이 중요해요</p>
                      <p className="w-10 test1" style={{fontSize: 15}}>잎 표면에 반점과 흰 균이 생기며, 아래 잎부터 발생해요</p> 
                      <p className="w-10 test1" style={{fontSize: 15}}>병든 잎은 끝에서부터 갈색으로 변해요</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{height: "4rem"}}></div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" style={{width: 400, height: 5}} >
            <div class="card "  style={{width: 600}}>
              <div class="card-header pb-0 p-3">
                <div class="d-flex justify-content-between">
          <h4 class="mb-2 w-18 test1" style={{fontSize: 30,height: 30}}>솎아내기</h4>
        </div>
      </div>
      <div class="table-responsive" style={{height:372, width: 610}}>
              <table class="table align-items-center">
                <tbody>
                  <tr>
                    <td style={{width: 100}}>
                      <p class="w-10 test1" style={{fontSize: 15}}>-고품질의 농산물을 수확하기 위해서 필요한 과정!</p>
                      <p class="w-10 test1" style={{fontSize: 15}}>-생육환경을 양호하게 하는 솎아내기!</p>
                      <p class="w-10 test1" style={{fontSize: 15}}>-간격이 너무 좁으면, 잘 자라지 못하므로 아깝더라도 솎아주세요.</p>
                      <p class="w-10 test1" style={{fontSize: 15}}>-조심히 흙을 떠서 옮겨 심어주세요</p>
                      <p class="w-10 test1" style={{fontSize: 15}}>-질병이 난 작물을 제거하며 품질을 높여보세요.</p>
                      <p class="w-10 test1" style={{fontSize: 15}}>-상추의 경우 1차(잎 1~2매) 5cm, 2차(잎 3~4매) 10cm,</p>
                      <p class="w-10 test1" style={{fontSize: 15}}> 3차(잎 5~6매) 20cm 간격으로 솎아주세요!</p>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="parentDiv2" class="col-xl-3 col-sm-6 mb-xl-0 mb-4" style="margin-top:-920px ; margin-left: 700px; width: 400px; height: 100px;">
         
          <div class="card" style="width: 425px; height: 530px;">
            <div class="card-header pb-1 p-3 mx-5">
              <div class="d-flex justify-content-between">
                <h5 class="mb-2 w-100 test1" style="font-size: 28px;">가정에서 할수있는 천연방제법</h5>
              </div>
            </div>
          <div class="matrix-board col-sm-50 inner-left-xs inner-right-sm animated fadeInUp">
          
          
            <style>
              .pic{ width:200px; height:200px; background: url(../assets/img/pastinfo/Makgeolli.jpg) no-repeat; }
              .text{ width:200px; height:200px; background:#000000; opacity:0; padding:10px;}
              .text p{ padding-top:3%; } 
              .pic:hover .text { opacity:0.7; text-align:center; color:#ffffff; }
            </style>
            <div class="matrix-box">
            <div class="pic"> 
              <div class="text"> 
                  <h3 class="test1">막걸리</h3>
                  <p class="test1" style="font-size: 20px;">막걸리와 설탕을 2대 1로 섞어 원액 제조 후, 원액(소주잔 1컵)에 2L 물을 섞어주세요!</p>
              </div> 
            </div>
          </div>

         
          <div class="matrix-box">
            <div class="pic"> 
              <div class="text"> 
                <h3 class="test1">설탕물</h3>
                <p class="test1" style="font-size: 20px;">우유에 백설탕 2스푼을 섞어 잘 녹인 후 해충이 있는 잎 뒷면에 뿌려주세요!</p>
              </div> 
            </div>
          </div>

         
          <div class="matrix-box">
            <div class="pic" style="background-image: url(../assets/img/pastinfo/vegetable.png);"> 
              <div class="text"> 
                <h3 class="test1">채소껍질</h3>
                <p class="test1" style="font-size: 20px;">요리하면서 나오는 채소 껍질 7, 흙을 3의 비율로 섞어 비료로 사용해보세요!</p>
              </div> 
            </div>
          </div>

        
          <div class="matrix-box">
            <div class="pic" style="background-image: url(../assets/img/pastinfo/egg.jpg);"> 
              <div class="text"> 
                <h3 class="test1">달걀 껍질</h3>
                <p class="test1" style="font-size: 20px;">달걀 껍데기를 부수어 흙이랑 섞어주세요. 흙을 알칼리성으로 만들어요!</p>
              </div> 
            </div>
          </div>
          <img src="../assets/img/mark.png"  style="margin-left: 250px;" >
                    </div>
                  </div>
                </div>
                  </div>
              </div>



        </div>
        </div>
      </div>
    </div>  

  );
}

export default App;
