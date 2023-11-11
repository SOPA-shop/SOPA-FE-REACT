import axios from 'axios';

// Tạo một phiên axios
const HTTP = axios.create({
  baseURL: 'http://localhost:8080',
});

HTTP.interceptors.request.use((config) => {
  // Lấy token từ lưu trữ (localStorage, cookies, hoặc nơi khác)
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// Tạo một interceptor để xử lý mã lỗi HTTP
HTTP.interceptors.response.use(
  (response) => {
    // Xử lý phản hồi thành công
    return response.data;
  },
  (error) => {
    // Xử lý lỗi
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        // Xử lý mã lỗi 401 (Unauthorized)
        // Ví dụ: Đăng xuất người dùng
      } else if (status === 403) {
        // Xử lý mã lỗi 403 (Forbidden)
        // Ví dụ: Hiển thị thông báo "Tài khoản không có quyền truy cập"
      } else if (status === 404) {
        // Xử lý mã lỗi 404 (Not Found)
        // Ví dụ: Hiển thị thông báo "Trang không tồn tại"
      } else {
        // Xử lý các mã lỗi khác
        // Ví dụ: Hiển thị thông báo lỗi chung
      }
    }

    return Promise.reject(error);
  },
);

export default HTTP;
