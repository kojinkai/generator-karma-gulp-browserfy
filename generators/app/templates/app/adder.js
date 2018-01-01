export default class {
  add(...args) {
    return args.reduce((acc, curr) => acc + curr)
  }
}
