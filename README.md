# power-assert-demo [![Build Status](https://travis-ci.org/azu/power-assert-demo.svg?branch=master)](https://travis-ci.org/azu/power-assert-demo)

Try [power-assert](https://github.com/twada/power-assert "power-assert") in your browser.

DEMO: http://azu.github.io/power-assert-demo

[![img](http://monosnap.com/image/abZWIEqxlpWsWev1oPP03DxNvdsOId.png)](http://azu.github.io/power-assert-demo)

## Usage

You can write test with [power-assert](https://github.com/twada/power-assert "power-assert").

[power-assert](https://github.com/twada/power-assert "power-assert") API equal to [Node.js assert module](http://nodejs.org/api/assert.html "Assert Node.js Manual &amp; Documentation"),
but it's has very-meaningful results.

``` js
describe('Array', function(){
    beforeEach(function(){
        this.ary = [1,2,3];
    });
    describe('#indexOf()', function(){
        it('should return index when the value is present', function(){
            var zero = 0, two = 2;
            assert(this.ary.indexOf(zero) === two);
        });
        it('should return -1 when the value is not present', function(){
            var minusOne = -1, two = 2;
            assert.ok(this.ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
```

Run the test code :

- mac: ⌘-return
- windows: ctrl-enter

## Browser Support

It's depend on iframes'`srcdoc`.

- [iframe\[srcdoc\] attribute](http://www.chromestatus.com/features/5222955109842944 "Chromium Dashboard")

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
