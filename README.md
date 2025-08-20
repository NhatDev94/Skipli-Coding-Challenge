# Skipli Coding Challenge

Dự án này sử dụng **React**, **TypeScript**, **Vite**, **Tailwind CSS** và các component từ **Radix UI**. Chức năng chính gồm: xác thực đăng nhập, quản lý nhân viên, và chat thời gian thực.

Vì **không xác thực được sdt** khi đăng ký tài khoản **Twilio** nên có dùng **Vonage** để thay thế, nhưng chỉ được **2$** để gửi tin nhắn. Nên có gửi thêm **Code** về **aip phone-validate**

## Cách chạy dự án

### 1. Server

    git clone https://github.com/NhatDev94/skipli-server.git
    cd skipli-server
    npm i
    npm run dev

### 2. Client

    git clone https://github.com/NhatDev94/Skipli-Coding-Challenge.git
    cd Skipli-Coding-Challenge
    npm i
    npm run dev

### 3. Sửa tài khoản Admin trong Firebase Database bằng cách sửa số điện thoại ở ref users/0963244816

### Đã mời email: hongnguyen.skipli.engineering@gmail.com làm Owner của dự án.

**Để tiện cho việc test nên có push .env lên github**
**Nếu client hoặc server chạy ở PORT khác khai báo trong .env, vui lòng sửa lại 2 key VITE_API_URL và CLIENT_URL**
