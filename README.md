# Install

```
npm install return-format-time --save-dev
```

# Usage

## Node.js CommonJS

```
require('return-format-time.js')();
```

## AMD

```
require(['return-format-time'], function (ReturnFormatTime) {
  ReturnFormatTime()
});
```

then

```
<script>
    var d = new Date().format('yy-mm-dd h:i:s')
    console.log(d)
</script>
```

# License

MIT © Thank