import React from "react";
import "../Style/Home.css";
import {
  RiNotification3Line,
  RiBarChart2Line,
  RiSettings3Line,
  RiUserLine,
  RiDiscussLine,
  RiGlobalLine,
  RiFileCopy2Line,
  RiMovieLine,
  RiTable2,
  RiSearchLine,
  RiFilter2Line,
  RiListUnordered,
  RiAddCircleLine,
} from "react-icons/ri";

function Home() {
  return (
    <div className=" container__home ">
      {/* home top */}
      <div className=" home__top ">
        {/* title */}
        <div className=" top__title ">
          <img
            src="https://st1.u-tad.com/media/2020/11/Ij8G0b_x_400x400.png"
            alt=""
          />
          <h1>DazShop</h1>
        </div>
        {/* user options */}
        <div className=" home__user ">
          <RiNotification3Line className=" user__icon " />
          <img
            src="https://img.freepik.com/foto-gratis/vista-frontal-hombre-sonriente-espacio-copia_23-2148404240.jpg?w=740&t=st=1680645677~exp=1680646277~hmac=f855a2eb6162188f4f4cfee1e913f1edfdcbec8cf8194e23996ba3cdd2293018"
            alt=""
          />
          <div className=" user__info ">
            <h2>Alfred Sinaga</h2>
            <h3>alfreds@gmail.com</h3>
          </div>
        </div>
      </div>

      {/* home content */}
      <div className=" home__content ">
        {/* content navbar */}
        <div className=" content__navbar ">
          <div className=" navbar__option">
            <RiNotification3Line />
            <h2>Dashboard</h2>
          </div>
          <div className=" navbar__option">
            <RiBarChart2Line />
            <h2>Analytics</h2>
          </div>
          <div className=" navbar__option">
            <RiGlobalLine />
            <h2>Post</h2>
          </div>
          <div className=" navbar__option">
            <RiFileCopy2Line />
            <h2>Pages</h2>
          </div>
          <div className=" navbar__optionMedia">
            <RiMovieLine />
            <h2>Media</h2>
          </div>
          <div className=" navbar__option">
            <RiDiscussLine />
            <h2>Comments</h2>
          </div>
          <div className=" navbar__option">
            <RiUserLine />
            <h2>Users</h2>
          </div>
          <div className=" navbar__option">
            <RiSettings3Line />
            <h2>Settings</h2>
          </div>
        </div>

        {/* content gallery */}
        <div className=" content__gallery ">
          <div className=" gallery__title ">
            <h2>Media</h2>
          </div>
          <div className=" gallery__chargeBar ">
            <div className=" chargeBar__bar" />
            <h2>80%</h2>
          </div>
          <div className=" gallery__images ">
            {/* images filters */}
            <div className=" images__filters ">
              <div className=" filters__types ">
                <h2>All</h2>
                <h2>Image</h2>
                <h2>Video</h2>
                <h2>Audio</h2>
                <h2>Documents</h2>
              </div>
              <div className=" filters__icons ">
                <RiSearchLine className=" icon " />
                <RiTable2 className=" icon " />
                <RiFilter2Line className=" icon " />
                <RiListUnordered className=" icon " />
                <RiAddCircleLine className=" add__icon " />
              </div>
            </div>

            {/* pictures */}
            <div className=" images__pictures ">
              <div className=" pictures__date ">
                <h2>Dec 10, 2020</h2>
              </div>
              <div className=" pictures__images ">
                <img src="https://i2.wp.com/stylizedstation.com/wp-content/uploads/2019/10/image2.png?fit=861%2C1024&ssl=1" alt="" />
                <img src="https://cdn.fs.teachablecdn.com/eYKAprpPRbO4AWvLPf5g" alt="" />
                <img src="https://cdnb.artstation.com/p/assets/images/images/036/820/789/large/iris-bernardelli-whatsapp-image-2021-04-16-at-13-06-29-1.jpg?1618718464" alt="" />
                <img src="https://i.redd.it/cteobxwme0g51.png" alt="" />
                <img src="https://cdna.artstation.com/p/assets/images/images/038/677/584/large/hellena-kashirskikh-untitled444.jpg?1623760678" alt="" />
              </div>
              <div className=" pictures__date2 ">
                <h2>Dec 12, 2020</h2>
              </div>
              <div className=" pictures__images ">
                <img src="https://www.filepicker.io/api/file/S3b4mhu2Rz6vm8VIsAIf" alt="" />
                <img src="https://cdn.dribbble.com/users/15687/screenshots/14467891/media/0c17732bb387d8837d30a5e850c8bedd.png?compress=1&resize=400x300&vertical=top" alt="" />
                <img src="https://www.arden.nl/static/465c4ad3cfde11b34e72f822fdc1a760/29007/office_02.png" alt="" />
                <img src="https://www.filepicker.io/api/file/MTH1Ns4bTOmLD3y7Jg1g" alt="" />
                <img src="https://blenderartists.org/uploads/default/original/4X/2/b/8/2b8724471601fa567d89c53ae3ed6869bab4e4cf.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
