const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 模拟的用户数据
const users = {
    admin: '123456',
    user: 'password'
};

// 登录接口
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: '用户名或密码错误' });
    }
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});