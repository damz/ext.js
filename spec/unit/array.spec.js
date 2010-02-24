describe 'Array'
  describe '#each()'
    it 'should be an alias of #forEach()'
      Array.prototype.each.should.equal Array.prototype.forEach
    end
  end

  describe '#includes()'
    it 'should indicate whether an array contains an item'
      ['test'].includes('test').should.be_true
      ['test'].includes('ok').should.be_false
    end

    it 'should indicate whether an array contains any of the items in a given array'
      [1,2,3,4,5].includes([1,2,3,4,5]).should.be_true
      [1,2,3,4,5].includes([1,2,3,4,5,6]).should.be_false
    end
    
    it 'should work with multiple arguments'
      ['foo', 'bar'].includes('foo', 'bar').should.be_true
      ['foo', 'bar'].includes('bar', 'foo').should.be_true
      ['foo', 'bar'].includes('bar', 'nope').should.be_false
      ['foo', 'bar'].includes('nope', 'foo').should.be_false
      ['foo', 'bar'].includes('foo', 'nope').should.be_false
      ['foo', 'bar'].includes('nope', 'bar').should.be_false
    end
  end

  describe '#first'
    it 'should equal the first element of the array'
      [1,2,3].first.should.equal 1
    end

    it 'should be possible to assign the value'
      var a = [1,2,3]
      a.first = 4
      a[0].should.eql 4
    end
  end

  describe '#last'
    it 'should equal the last element of the array'
      [1,2,3].last.should.equal 3
    end

    it 'should be possible to assign the value'
      var a = [1,2,3]
      a.last = 4
      a[2].should.eql 4
    end
  end
  
  describe '#at()'
    it 'should return the value at the given index'
      [1,2,3].at(0).should.eql 1
    end
  end
  
  describe '#compact()'
    describe 'given no arguments'
      it 'should remove null values'
        [null,1,2,null,3].compact().should.eql [1,2,3]
      end
      
      it 'should remove undefined values'
        [null,1,2,null,,3].compact().should.eql [1,2,3]
      end
      
      it 'should leave falsey values'
        [false, -1, 0].compact().should.eql [false, -1, 0]
      end
    end
    
    describe 'given arguments'
      it 'should remove only values passed'
        [null, 1,2,3].compact(1,2).should.eql [null, 3]
        [false, -1, null, 0, undefined].compact(false, null).should.eql [-1, 0, undefined]
        ['0', 0, -1, false].compact(false, 0).should.eql ['0', -1]
      end
    end
  end

  describe '#flatten'
    it 'should flatten the array'
      [1,[2,[3]]].flatten.should.eql [1,2,3]
    end
  end
  
  describe '#drop()'
    it 'should drop the first n values'
      1..10.drop(5).should.eql 6..10
    end
  end
  
  describe '#take()'
    it 'should take the first n values'
      1..10.take(5).should.eql 1..5
    end
  end
  
  describe '#grep()'
    it 'should select strings matching'
      ['foo', 'foobar', 'bar'].grep(/^foo(bar)?/).should.eql ['foo', 'foobar']
    end
    
    it 'should ignore other objects'
      [1, 'foo'].grep(/foo/).should.eql ['foo']
    end
  end
  
  describe '#reduce()'
    it 'should iterate with memo object'
      var evens = 1..10.reduce([], function(evens, n){
        if (n % 2 === 0) evens.push(n)
        return evens
      })
      evens.should.eql [2,4,6,8,10]
    end
    
    it 'should work with shorthand function syntax'
      1..5.reduce(0, '+').should.eql 15
    end
  end
  
  describe '#select()'
    it 'should collect values when truthy'
      var evens = 1..10.select(function(n){ return n % 2 === 0 })
      evens.should.eql [2,4,6,8,10]
    end
    
    it 'should work with shorthand function syntax'
      1..10.select('a % 2 === 0').should.eql [2,4,6,8,10]
    end
  end
  
  describe '#map()'
    it 'should return values returned by the given callback'
      1..3.map(function(n){ return ++n }).should.eql [2,3,4]
    end
    
    it 'should work with shorthand function syntax'
      ['foo', 'bar'].map('length').should.eql [3,3]
    end
  end
  
  describe '#sample'
    it 'should return a random value'
      1..5.sample.should.be_a Number
      1..5.sample.should.be_a Number
      1..5.sample.should.be_a Number
    end
  end
end