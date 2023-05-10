import axios from 'axios';
import Swal from 'sweetalert2';
import { getStoreData, removeStoreData } from './helper/utils/AsyncStorageServices';
// import {useNavigation, useFocusEffect} from '@react-navigation/native';
var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEZXZpY2VJZCI6Ik90aGVyIDAuMC4wIC8gT3RoZXIgMC4wLjAiLCJDcmVhdGVkVGltZSI6IjE0OjU5OjMwIiwiQ3JlYXRlZERhdGUiOiIyMDIzLTA1LTEwVDA5OjI5OjMwLjc3N1oiLCJpYXQiOjE2ODM3MTA5NzAsImV4cCI6MTY4MzcxODE3MH0.wNqKjevV9obrPbw6IrT_qEQrzu4NVyXVaLd15l2Mb98";
var ServerURL = 'http://10.0.2.2:9292';
// var ServerURL = "http://campusshala.com:9292";
// const navigation=useNavigation()
const getDataAxios = async Url => {
  const Token = token
  // alert(Token)
  
  console.log("token==================>", Token);
  // alert(Token)
  try {
    var url = `${ServerURL}/${Url}`;
    // alert(url)
    var config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };

    var response = await axios.get(url, config);
    
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
      removeStoreData('userData');
      removeStoreData('token');
      // setTimeout(() => navigation.navigate('Login'), 2000);
    } else {
      console.log(error);
    }
  }
};

// To Send Data In Node
const postDataAxios = async (Url, body) => {
  const Token = token
  // alert(JSON.stringify(body))
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
      alert("Session Expired");
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Session has Expired Please Login Again',
        showConfirmButton: false,
        timer: 30000,
      });
      removeStoreData('userData');
      removeStoreData('token');
      // setTimeout(() => navigation.navigate('Login'), 2000);
    } else {
      console.log(error);
    }
  }
};

const putDataAxios = async (Url, body) => {
 
  const Token = token

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
      removeStoreData('userData');
      removeStoreData('token');
      // setTimeout(() => navigation.navigate('Login'), 2000);
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
//   const Token = await getStoreData('token');
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
  //  postDataAxiosWithoutToken,
};
