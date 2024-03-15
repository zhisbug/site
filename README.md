This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Commands

### Development:

1. Change `next.config.js` to
```python
module.exports = {
  basePath: '',
  assetPrefix: '',
};
```
2. Build dev version:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment at `https://cseweb.ucsd.edu/~haozhang/`:
```python
1. Change `next.config.js` to:
```python
module.exports = {
  basePath: '/~haozhang',
  assetPrefix: '/~haozhang/',
};
```

2. Build deployment version:
```bash
npm run build
```

3. Change the path to read my photo shot from `/xx.png` to `xx.png`.

4. Copy the files in `out` to the server root address.