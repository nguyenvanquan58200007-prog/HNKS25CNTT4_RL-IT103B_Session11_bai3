/*
 * BẢNG PHÂN TÍCH TRADE-OFF: CÁC CÁCH KHAI BÁO HÀM TRONG JAVASCRIPT
 * | Tiêu chuẩn          | Function Declaration       | Function Expression        | Arrow Function (=>)             |
 * |---------------------|----------------------------|----------------------------|---------------------------------|
 * | Cơ chế Hoisting     | Được nâng lên đầu phạm vi  | KHÔNG được nâng            | KHÔNG được nâng                 |
 * | Cú pháp             | Dài, từ khóa `function`    | Gán vào biến `const fn =`  | Ngắn gọn, implicit return       |
 * | Con trỏ `this`      | Động (theo ngữ cảnh gọi)   | Động (theo ngữ cảnh gọi)   | Lexical (kế thừa từ bên ngoài)  |
 * | Đối tượng arguments | Có hỗ trợ                  | Có hỗ trợ                  | KHÔNG hỗ trợ (dùng Rest Params) |
 * | Khuyến nghị chuẩn   | Hàm tiện ích (Utility)     | Khi cần hàm ẩn danh        | CHUẨN ES6+ CHO TOÀN DỰ ÁN       |
 * QUY CHUẨN VIẾT MÃ DỰ ÁN SMART HOME IOT:
 * 1. Bắt buộc dùng Arrow Function cho mọi logic nghiệp vụ (CRUD, xử lý sự kiện) để tránh lỗi mất
 *    ngữ cảnh `this` và bắt buộc lập trình viên phải khai báo hàm trước khi gọi (tránh lỗi ngầm)
 * 2. Chỉ sử dụng Function Declaration cho các hàm Helper dùng chung đặt ở cuối file để code gọn gàng.
 */

console.log("=== 1. FUNCTION DECLARATION ===");
console.log(checkDeviceStatus("DEV_01"));

function checkDeviceStatus(deviceId) {
  return `Thiết bị ${deviceId} đang hoạt động bình thường.`;
}

console.log("=== 2. FUNCTION EXPRESSION ===");
try {
  console.log(getDeviceTemperature("DEV_02"));
} catch (error) {
  console.log("Lỗi Function Expression:", error.message);
}

const getDeviceTemperature = function (deviceId) {
  return `Nhiệt độ của ${deviceId} là 24 độ C.`;
};

console.log("=== 3. ARROW FUNCTION ===");
try {
  console.log(turnOnDevice("DEV_03"));
} catch (error) {
  console.log("Lỗi Arrow Function:", error.message);
}

const turnOnDevice = (deviceId) => {
  return `Đã bật thiết bị ${deviceId}.`;
};

console.log("=== GỌI HÀM SAU KHI ĐÃ KHAI BÁO (CHUẨN ES6+) ===");
console.log(getDeviceTemperature("DEV_02"));
console.log(turnOnDevice("DEV_03"));
