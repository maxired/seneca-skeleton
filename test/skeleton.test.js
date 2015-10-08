'use strict'

var Lab = require('lab')
var Seneca = require('seneca')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it

var Skeleton = require('..')

var si = Seneca({
  log: 'silent'
})

si.use(Skeleton)

describe('skeleton', function () {
  it('works', function (done) {
    done()
  })
})
