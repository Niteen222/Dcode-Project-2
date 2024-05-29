import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className='main' >
          <div className='p'>
            <div className='blur'></div>
          </div>
        </div>
        <nav>
          <div className='nav1'>
            <h1>Dcode</h1><span className='path'>PATHSHALA</span>
          </div>
          <div className='nav2'>
            <a href="">About</a>
            <select>
              <option>Features</option>
              <option>College's Details</option>
              <option>School's Details</option>
              <option>Dcode 360</option>
              <option>Exams</option>
              <option>Counselling Plans</option>
            </select>
          </div>
          <div className='nav3'>
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </nav>
        <div className='start'>
          <div className='first'>
            <h2 className='c'>- Coming Soon</h2>
            <h2 className='g'>Get Notified </h2>
            <h2 className='w'>When we Launch</h2>
            <div className='em'>
              <p>Enter Your email address</p>
              <button>Notify Me</button>
            </div>
            <div className="social">
              <div className="ic">
                <a href="https://www.facebook.com/profile.php?id=61559054327553"  target="_blank">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="ic">
                <a href="https://www.instagram.com/dcodepathshala/"  target="_blank">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
              </div>
              <div className="ic">
                <a href="https://www.linkedin.com/company/dcode-pathshala/"  target="_blank">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="ic">
                <a href="https://www.youtube.com/channel/UCmw8gV545IIVgWnk0mzDRrw"  target="_blank">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className='second'>
            <p className='c1'></p>
            <div  className='shot'>
              <div className='one'>
                <p>9:41</p>
                <div className='icon'>
                  <i class="fa-solid fa-signal"></i>
                  <i class="fa-solid fa-wifi"></i>
                  <i class="fa-solid fa-battery-full"></i>
                </div>
              </div>
              <p className='info'>Product Info</p>
              <div className="mains">
                <div className="a">
                  <div className="a1">
                    <img src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="" />
                    <div>
                      <p className='goat'>Broops Goat </p>
                      <p className='flu'>Expert Teacher</p>
                    </div>
                    <button className='view'>View</button>
                  </div>
                  <div className="b">
                    <img className='gif' src="https://www.shutterstock.com/image-vector/landscape-view-university-students-walking-260nw-2177237095.jpg" alt="" />
                  </div>
                  <div className='o1'>
                    <h2 className='o'></h2>
                    <p className='m'></p>
                    <hr />
                  </div>
                  <div className="c">
                    <div className="c2">
                      <span>15</span>
                      <span><i class="fa-solid fa-arrow-up"></i></span>
                    </div>
                    <div className='share'>
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                  <div className="sect">
                    <img className='pro' src="https://www.otago.ac.nz/__data/assets/image/0035/491876/Top-task-why-otago.png" alt="" />
                    <div className="bt">
                      <p>Share path now</p>
                      <div className='send'>
                        <i class="fa-regular fa-paper-plane"></i>
                      </div>
                    </div>
                    <p className='home'>Go to Home</p>
                  </div>
                  <div className="sec3">
                    <div className='das'>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                    </div>
                    <p className='rot'><i class="fa-solid fa-align-right"></i></p>
                  </div>

                  <div className="brooks">
                    <div className="br1">
                      <img src="https://res.cloudinary.com/usopc-prod/image/upload/v1686076230/NGB%20Diving/Athlete%20Profiles/Bridget%20O%27Neil/O_Neil_B_Thumbnail_1105405.jpg" alt="" />
                    </div>
                    <div className="br3">
                      <p className='min'>54min</p>
                      <p className='se'>Selina Brooks</p>
                      <div className='her'>
                        <i class="fa-solid fa-heart x"></i>
                        <i class="fa-solid fa-share y"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text">
              <h3>FAQ</h3>
              <h3>Privacy Policy
                <hr />
              </h3>
              <h3>Email Us</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
