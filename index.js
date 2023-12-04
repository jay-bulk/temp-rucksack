import os from 'os'
import path from 'path'

const homeDir = os.homedir()
const {env} = process

console.log(env)
console.log(homeDir)

