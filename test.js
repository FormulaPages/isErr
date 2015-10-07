var iserr = require('./ISERR');
var assert = require('assert');
var error = require('formula-errors');

describe('iserr', function() {
  it('should return true if value is error', function() {
    assert( iserr(0) === false, '0 is not an error');
    assert( iserr(1) === false, '1 is not an error');
    assert( iserr('Hello') === false, '"Hello" is not an error');
    assert( iserr(error.nil), 'Should be error');
    assert( iserr(error.value), 'Should be error');
    assert( iserr(error.ref), 'Should be error');
    assert( iserr(error.name), 'Should be error');
    assert( iserr(error.num), 'Should be error');
    assert( iserr(error.na) === false, 'Should not be error');
    assert( iserr(error.error), 'Should be error');
    assert( iserr(error.data), 'Should be error');
    assert( iserr(error.missing), 'Should be error');
    assert( iserr(error.unknown), 'Should be error');
    assert( iserr(NaN), 'NaN should be error');
    assert( iserr(Number.POSITIVE_INFINITY), 'Should be error');
    assert( iserr(Number.NEGATIVE_INFINITY), 'Should be error');
  });
})
  
