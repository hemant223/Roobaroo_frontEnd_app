import axios from 'axios';
import Swal from 'sweetalert2';
// var ServerURL = 'http://10.0.2.2:6000';
var ServerURL = 'http://192.168.196.160:9292';
// var ServerURL = "http://campusshala.com:8888";

const getDataAxios = async Url => {
  let Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEZXZpY2VJZCI6Ik90aGVyIDAuMC4wIC8gT3RoZXIgMC4wLjAiLCJDcmVhdGVkVGltZSI6IjA2OjE0OjE3IiwiQ3JlYXRlZERhdGUiOiIyMDIzLTA1LTAzVDAwOjQ0OjE3LjQzMloiLCJpYXQiOjE2ODMwNzQ2NTcsImV4cCI6MTY4MzA4MTg1N30.gj8zGgcbJZcB9vdfCuZBypFU5DuUwasz5GZgOt9_crU"
  try {
    var url = `${ServerURL}/${Url}`;
    var config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };

    var response = await axios.get(url, config);
    // console.log("respnse", response);
    var result = response.data;
    return result;
  } catch (error) {
    if (error.response.status === 401) {
      // alert("Session Expired");
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Session has Expired Please Login Again',
        showConfirmButton: false,
        timer: 30000,
      });
      // localStorage.clear();
      localStorage.removeItem('adminInfo');
      localStorage.removeItem('token');
      setTimeout(() => window.location.replace('/'), 2000);
    } else {
      console.log(error);
    }
  }
};

// To Send Data In Node
const postDataAxios = async (Url, body) => {
  let Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEZXZpY2VJZCI6Ik90aGVyIDAuMC4wIC8gT3RoZXIgMC4wLjAiLCJDcmVhdGVkVGltZSI6IjA2OjE0OjE3IiwiQ3JlYXRlZERhdGUiOiIyMDIzLTA1LTAzVDAwOjQ0OjE3LjQzMloiLCJpYXQiOjE2ODMwNzQ2NTcsImV4cCI6MTY4MzA4MTg1N30.gj8zGgcbJZcB9vdfCuZBypFU5DuUwasz5GZgOt9_crU"
  try {
    var url = `${ServerURL}/${Url}`;
    var config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };
    const response = await axios.post(url, body, config);
    var result = response.data;
    return result;
  } catch (error) {
    if (error.response.status === 401) {
      // alert("Session Expired");
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Session has Expired Please Login Again',
        showConfirmButton: false,
        timer: 30000,
      });
      // localStorage.removeItem("adminInfo");
      // localStorage.removeItem("token");
      // localStorage.clear();
      setTimeout(() => window.location.replace('/'), 2000);
    } else {
      console.log(error);
    }
  }
};

const putDataAxios = async (Url, body) => {
  var Token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEZXZpY2VJZCI6Ik90aGVyIDAuMC4wIC8gT3RoZXIgMC4wLjAiLCJDcmVhdGVkVGltZSI6IjEyOjU5OjIyIiwiQ3JlYXRlZERhdGUiOiIyMDIzLTA1LTAyVDA3OjI5OjIyLjQxN1oiLCJpYXQiOjE2ODMwMTI1NjIsImV4cCI6MTY4MzAxOTc2Mn0.fZoDEswZgWQ49DsSlgEU0dZSVsgXobc5AYmKWMWosLo';
  try {
    var url = `${ServerURL}/${Url}`;
    const config = {
      headers: {
        'content-type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${Token}`,
      },
    };
    const response = await axios.put(url, body, config);
    var result = response.data;
    return result;
  } catch (error) {
    if (error.response.status === 401) {
      // alert("Session Expired");
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Session has Expired Please Login Again',
        showConfirmButton: false,
        timer: 30000,
      });
      // localStorage.clear();
      // localStorage.removeItem("adminInfo");
      // localStorage.removeItem("token");
      setTimeout(() => window.location.replace('/'), 2000);
    } else {
      console.log(error);
    }
  }
};

// const postDataAndImageAxios = async (Url, body) => {
//   let Token = JSON.parse(localStorage.getItem("token"));
//   try {
//     var url = `${ServerURL}/${Url}`;
//     const config = {
//       headers: {
//         "Content-type": "multipart/form-data",
//         Authorization: `Bearer ${Token}`,
//       },
//     };

//     var response = await axios.post(url, body, config);
//     var result = response.data;
//     return result;
//   } catch (error) {
//     if (error.response.status === 401) {
//       // alert("Session Expired");
//       Swal.fire({
//         position: "top-end",
//         icon: "info",
//         title: "Session has Expired Please Login Again",
//         showConfirmButton: false,
//         timer: 30000,
//       });
//       // localStorage.clear();
//       localStorage.removeItem("adminInfo");
//       localStorage.removeItem("token");
//       setTimeout(() => window.location.replace("/"), 2000);
//     } else {
//       console.log(error);
//     }
//   }
// };

// const putDataAndImageAxios = async (Url, body) => {
//   var Token = JSON.parse(localStorage.getItem("token"));
//   try {
//     var url = `${ServerURL}/${Url}`;
//     const config = {
//       headers: {
//         "Content-type": "multipart/form-data",
//         Authorization: `Bearer ${Token}`,
//       },
//     };

//     var response = await axios.put(url, body, config);
//     var result = response.data;
//     return result;
//   } catch (error) {
//     if (error.response.status === 401) {
//       // alert("Session Expired");
//       Swal.fire({
//         position: "top-end",
//         icon: "info",
//         title: "Session has Expired Please Login Again",
//         showConfirmButton: false,
//         timer: 30000,
//       });
//       // localStorage.clear();
//       localStorage.removeItem("adminInfo");
//       localStorage.removeItem("token");
//       setTimeout(() => window.location.replace("/"), 2000);
//     } else {
//       console.log(error);
//     }
//   }
// };

// const postDataAxiosWithoutToken = async (Url, body, config) => {
//   try {
//     var url = `${ServerURL}/${Url}`;
//     config = { "content-type": "application/json;charset=utf-8" };
//     const response = await axios.post(url, body, config);
//     var result = response.data;
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

export {
  ServerURL,
  getDataAxios,
  postDataAxios,
  putDataAxios,
  // postDataAndImageAxios,
  // putDataAndImageAxios,
  // postDataAxiosWithoutToken,
};