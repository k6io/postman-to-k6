/* global postman pm globals environment */

import test from 'ava'
import 'shim'

const undef = void 0
const Reset = Symbol.for('reset')
const Scope = Symbol.for('scope')

test.beforeEach(t => {
  postman[Reset]()
})

test.serial('globals read clear', t => {
  postman[Scope]()
  t.is(globals.test, undef)
})

test.serial('globals read set', t => {
  postman[Scope]({ global: { test: 'a' } })
  t.is(globals.test, 'a')
})

test.serial('globals write', t => {
  postman[Scope]()
  t.throws(() => {
    globals.test = 'a'
  })
})

test.serial('getGlobalVariable clear', t => {
  postman[Scope]()
  t.is(postman.getGlobalVariable('test'), undef)
})

test.serial('getGlobalVariable set', t => {
  postman[Scope]({ global: { test: 'a' } })
  t.is(postman.getGlobalVariable('test'), 'a')
})

test.serial('setGlobalVariable clear', t => {
  postman[Scope]()
  postman.setGlobalVariable('test', 'a')
  t.is(globals.test, 'a')
})

test.serial('setGlobalVariable set', t => {
  postman[Scope]({ global: { test: 'a' } })
  postman.setGlobalVariable('test', 'b')
  t.is(globals.test, 'b')
})

test.serial('clearGlobalVariable', t => {
  postman[Scope]({ global: { test: 'a' } })
  t.is(globals.test, 'a')
  postman.clearGlobalVariable('test')
  t.is(globals.test, undef)
})

test.serial('clearGlobalVariables', t => {
  postman[Scope]({ global: { test: 'a', test2: 'b' } })
  t.is(globals.test, 'a')
  t.is(globals.test2, 'b')
  postman.clearGlobalVariables()
  t.is(globals.test, undef)
  t.is(globals.test2, undef)
})

test.serial('environment read clear', t => {
  postman[Scope]()
  t.is(environment.test, undef)
})

test.serial('environment read set', t => {
  postman[Scope]({ environment: { test: 'a' } })
  t.is(environment.test, 'a')
})

test.serial('environment write', t => {
  postman[Scope]()
  t.throws(() => {
    environment.test = 'a'
  })
})

test.serial('getEnvironmentVariable clear', t => {
  postman[Scope]({ environment: {} })
  t.is(postman.getEnvironmentVariable('test'), undef)
})

test.serial('getEnvironmentVariable set', t => {
  postman[Scope]({ environment: { test: 'a' } })
  t.is(postman.getEnvironmentVariable('test'), 'a')
})

test.serial('setEnvironmentVariable clear', t => {
  postman[Scope]({ environment: {} })
  postman.setEnvironmentVariable('test', 'a')
  t.is(environment.test, 'a')
})

test.serial('setEnvironmentVariable set', t => {
  postman[Scope]({ environment: { test: 'a' } })
  postman.setEnvironmentVariable('test', 'b')
  t.is(environment.test, 'b')
})

test.serial('clearEnvironmentVariable', t => {
  postman[Scope]({ environment: { test: 'a' } })
  t.is(environment.test, 'a')
  postman.clearEnvironmentVariable('test')
  t.is(environment.test, undef)
})

test.serial('clearEnvironmentVariables', t => {
  postman[Scope]({ environment: { test: 'a', test2: 'b' } })
  t.is(environment.test, 'a')
  t.is(environment.test2, 'b')
  postman.clearEnvironmentVariables()
  t.is(environment.test, undef)
  t.is(environment.test2, undef)
})

test.serial('variables.get clear', t => {
  postman[Scope]()
  t.is(pm.variables.get('test'), undef)
})

test.serial('variables.get global', t => {
  postman[Scope]({ global: { test: 'a' } })
  t.is(pm.variables.get('test'), 'a')
})

test.serial('variables.get collection', t => {
  postman[Scope]({
    global: { test: 'a' },
    collection: { test: 'b' }
  })
  t.is(pm.variables.get('test'), 'b')
})

test.serial('variables.get environment', t => {
  postman[Scope]({
    global: { test: 'a' },
    collection: { test: 'b' },
    environment: { test: 'c' }
  })
  t.is(pm.variables.get('test'), 'c')
})

test.serial('variables.get data', t => {
  postman[Scope]({
    global: { test: 'a' },
    collection: { test: 'b' },
    environment: { test: 'c' },
    data: { test: 'd' }
  })
  t.is(pm.variables.get('test'), 'd')
})
