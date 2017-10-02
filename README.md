# react-admin-ui
> Admin ui use antd and redux.

## support:
+ redux
+ antd
+ react-router (4.x)

## resources:
+ https://reacttraining.com/react-router/web/guides/philosophy

## dev propxy:
```json
"devServer": {
  "port": 8812,
  "hot": true,
  "host": "train-h5.dcpai.cn",
  "stats": "errors-only",
  "proxy": {
    "/weipai": {
      "target": "http://139.196.57.60:8082",
      "changeOrigin": true
    },
    "/shanggu": {
      "target": "http://train-h5.dcpai.cn:80",
      "pathRewrite": {
        "^/shanggu": "/src/modules"
      },
      "changeOrigin": true
    }
  }
}
```
