# Node demo
用于学习Node的基础操作和koa框架，以廖雪峰的[Node.js教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501245426ad4b91f2b880464ba876a8e3043fc8ef000)为基础，也参考了阮一峰老师的[Koa框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html)。

#### 目录结构

```
NodeDemo
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
├─koa
│  ├─koa_mvc
│  │  │  app.js
│  │  │  controller.js
│  │  └─controllers
│  │          hello.js
│  │          login.js
│  ├─koa_normal
│  │      koa_cookie.js
│  │      koa_error.js
│  │      koa_http1.js
│  │      koa_http2.js
│  ├─koa_rest
│  │  │  app.js
│  │  │  controller.js
│  │  │  product.js
│  │  │  rest.js
│  │  │
│  │  └─controllers
│  │          api.js
│  │          index.js
│  └─koa_sql
│          app.js
│          config.js
│          init.txt
│          seq.js
└─node_base
        crypto.js
        http_demo.js
```

#### 目录简介
- koa_normal: koa框架的基础操作（Cookie、错误处理、http等等）
- koa_mvc: 以koa框架为基础的MVC结构web服务器
- koa_rest: 以koa框架为基础的REST服务器
- koa_sql: 在koa框架下对数据库的操作
- node_base: node下的基础操作